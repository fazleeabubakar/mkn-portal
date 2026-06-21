"""
MKN Portal - Auto Scrap News from mkn.gov.my
=============================================
Scrapes the latest 5 news/announcements from the official MKN website
and saves them to berita_mkn.json (overwrite mode).

Usage:
    python auto_scrap_mkn.py

Requirements:
    pip install requests beautifulsoup4 lxml
"""

import json
import os
import re
import sys
import warnings
from datetime import datetime

import requests
from bs4 import BeautifulSoup

# Suppress InsecureRequestWarning when SSL verify is disabled
from urllib3.exceptions import InsecureRequestWarning
warnings.filterwarnings("ignore", category=InsecureRequestWarning)

# ===== Configuration =====
MKN_BASE_URL = "https://www.mkn.gov.my/web"
MKN_BM_PAGE = f"{MKN_BASE_URL}/ms"
MKN_EN_PAGE = f"{MKN_BASE_URL}/en"
OUTPUT_FILE = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "public", "berita_mkn.json"
)
MAX_ITEMS = 5

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ms-MY,ms;q=0.9,en-US;q=0.8,en;q=0.7",
}

# MKN website category translations
BM_CATEGORY_MAP = {
    "Komunikasi Strategik": "Komunikasi Strategik",
    "Pengurusan Keselamatan Negeri": "Pengurusan Keselamatan Negeri",
    "Pengurusan Organisasi & Pembangunan Keselamatan": "Pengurusan Organisasi",
    "Keselamatan Siber": "Keselamatan Siber",
    "Pengurusan Bencana": "Pengurusan Bencana",
    "Dasar": "Dasar",
}
EN_CATEGORY_MAP = {
    "Komunikasi Strategik": "Strategic Communication",
    "Pengurusan Keselamatan Negeri": "State Security Management",
    "Pengurusan Organisasi & Pembangunan Keselamatan": "Organisational Management",
    "Keselamatan Siber": "Cybersecurity",
    "Pengurusan Bencana": "Disaster Management",
    "Dasar": "Policy",
}


def fetch_page(url: str, timeout: int = 30) -> BeautifulSoup | None:
    """Fetch a webpage and return a BeautifulSoup object, handling SSL issues."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=timeout, verify=True)
        response.raise_for_status()
        return BeautifulSoup(response.text, "lxml")
    except requests.exceptions.SSLError:
        print(f"       [SSL] Certificate verify failed, retrying without verify...")
        try:
            response = requests.get(url, headers=HEADERS, timeout=timeout, verify=False)
            response.raise_for_status()
            return BeautifulSoup(response.text, "lxml")
        except requests.RequestException as e:
            print(f"[ERROR] Failed to fetch {url}: {e}")
            return None
    except requests.RequestException as e:
        print(f"[ERROR] Failed to fetch {url}: {e}")
        return None


def extract_news(soup: BeautifulSoup, lang: str) -> list[dict]:
    """
    Extract news items from MKN homepage.
    The MKN website uses WordPress with Elementor.
    Articles appear as heading + date + category link patterns.
    """
    news_items = []
    seen_titles = set()

    # Strategy 1: Find article links with date patterns in URL
    # MKN URLs contain date: /web/ms/2026/06/19/program-jualan-rahmah-madani-201/
    all_links = soup.find_all("a", href=True)
    article_links = []
    for link in all_links:
        href = link["href"]
        # Match date-patterned article URLs
        date_pattern = re.search(r"/web/(ms|en)/(\d{4})/(\d{2})/(\d{2})/([^/]+)", href)
        if date_pattern:
            year, month, day = date_pattern.group(2, 3, 4)
            slug = date_pattern.group(5)
            full_url = href if href.startswith("http") else f"{MKN_BASE_URL}{href}"
            article_links.append({
                "url": full_url,
                "date_numeric": f"{day} {month} {year}",
                "slug": slug,
            })

    # Strategy 2: Find headings with nearby dates
    # Pattern from MKN: heading with title, then date text nearby
    headings = soup.find_all(["h2", "h3", "h4", "h5"])

    for heading in headings:
        title = heading.get_text(strip=True)

        # Skip section headings and short texts
        skip_texts = [
            "artikel/berita terkini", "berita terkini", "latest news",
            "pengumuman", "announcements", "tender", "sebutharga",
            "kluster", "interaktif", "galeri", "info keselamatan",
            "e-maklumbalas", "e-penyertaan", "e-integriti", "e-ceramah",
            "tender / sebutharga", "iklan", "keputusan",
        ]
        if len(title) < 8 or any(t in title.lower() for t in skip_texts):
            continue

        if title in seen_titles:
            continue
        seen_titles.add(title)

        # Walk up the DOM tree to find the article container
        container = heading
        for _ in range(5):
            if container.parent:
                container = container.parent
            else:
                break

        container_text = container.get_text(separator=" ", strip=True)

        # Extract date from container text
        date_match = re.search(
            r"(\d{1,2}\s+(Januari|Februari|Mac|April|Mei|Jun|Julai|Ogos"
            r"|September|Oktober|November|Disember"
            r"|January|February|March|April|May|June|July|August"
            r"|September|October|November|December"
            r"|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
            r"\s+\d{4})",
            container_text, re.IGNORECASE
        )
        date_text = date_match.group(1) if date_match else ""

        # Also try numeric date pattern
        if not date_text:
            date_match2 = re.search(r"(\d{1,2}/\d{1,2}/\d{4})", container_text)
            date_text = date_match2.group(1) if date_match2 else ""

        # Extract category from nearby links
        category = ""
        cat_links = container.find_all("a")
        for cat_link in cat_links:
            cat_href = cat_link.get("href", "")
            cat_text = cat_link.get_text(strip=True)
            if "/komunikasi-strategik/" in cat_href:
                category = "Komunikasi Strategik"
            elif "/pengursan-keselamatan-negeri/" in cat_href:
                category = "Pengurusan Keselamatan Negeri"
            elif "/pengurusan-organisasi-pembangunan-keselamatan/" in cat_href:
                category = "Pengurusan Organisasi & Pembangunan Keselamatan"
            elif "/keselamatan-siber/" in cat_href:
                category = "Keselamatan Siber"
            elif "/pengurusan-bencana/" in cat_href or "/disaster-management/" in cat_href:
                category = "Pengurusan Bencana"
            elif cat_text and len(cat_text) > 3 and cat_text not in title:
                category = cat_text

        # Extract article URL
        link_url = ""
        a_tag = heading.find("a")
        if a_tag and a_tag.get("href"):
            link_url = a_tag["href"]
            if link_url and not link_url.startswith("http"):
                link_url = f"{MKN_BASE_URL}{link_url}"

        # Extract excerpt from the article page if link is found
        excerpt = ""
        if link_url:
            excerpt = fetch_excerpt_from_article(link_url, lang)

        # Only add if we have a title and a date
        if title and date_text:
            news_items.append({
                "title": title,
                "date": date_text.strip(),
                "category": category,
                "link": link_url,
                "excerpt": excerpt if excerpt else title,
            })

    return news_items[:MAX_ITEMS * 2]  # Get extra for deduplication


def fetch_excerpt_from_article(url: str, lang: str) -> str:
    """Fetch an individual article page and extract the first paragraph as excerpt."""
    soup = fetch_page(url)
    if not soup:
        return ""

    # Try to find the main content area
    content_selectors = [
        ".entry-content", ".post-content", ".article-content",
        ".elementor-widget-text-editor", ".content-area",
    ]

    for selector in content_selectors:
        content = soup.select_one(selector)
        if content:
            # Get first meaningful paragraph
            paragraphs = content.find_all("p")
            for p in paragraphs:
                text = p.get_text(strip=True)
                if len(text) > 30:  # Skip very short paragraphs
                    # Clean up and truncate
                    if len(text) > 150:
                        text = text[:147] + "..."
                    return text

    # Fallback: find any substantial paragraph
    all_p = soup.find_all("p")
    for p in all_p:
        text = p.get_text(strip=True)
        if len(text) > 50 and not text.lower().startswith(("facebook", "twitter", "whatsapp")):
            if len(text) > 150:
                text = text[:147] + "..."
            return text

    return ""


def assign_tag_and_color(category: str, lang: str) -> tuple[str, str]:
    """Assign tag label and color based on category."""
    tag_map_bm = {
        "pengurusan bencana": ("Aktif", "#dc2626"),
        "keselamatan siber": ("Baharu", "#6d28d9"),
        "antipengganas": ("Kemas kini", "#1d4ed8"),
        "keselamatan awam": ("Pencapaian", "#15803d"),
        "keselamatan sempadan": ("Operasi", "#c2410c"),
        "dasar": ("Diluluskan", "#0d2240"),
        "komunikasi strategik": ("Semasa", "#0ea5e9"),
        "pengurusan keselamatan negeri": ("Kemas kini", "#1d4ed8"),
        "pengurusan organisasi": ("Baharu", "#6d28d9"),
    }
    tag_map_en = {
        "disaster management": ("Active", "#dc2626"),
        "cybersecurity": ("New", "#6d28d9"),
        "counter-terrorism": ("Update", "#1d4ed8"),
        "public safety": ("Milestone", "#15803d"),
        "border security": ("Operation", "#c2410c"),
        "policy": ("Approved", "#0d2240"),
        "strategic communication": ("Current", "#0ea5e9"),
        "state security management": ("Update", "#1d4ed8"),
        "organisational management": ("New", "#6d28d9"),
    }

    tag_map = tag_map_bm if lang == "bm" else tag_map_en
    cat_lower = category.lower().strip()

    for key, (tag, color) in tag_map.items():
        if key in cat_lower or cat_lower in key:
            return tag, color

    return ("Semasa", "#0ea5e9") if lang == "bm" else ("Current", "#0ea5e9")


def translate_category_to_en(bm_category: str) -> str:
    """Translate BM category to EN."""
    for bm, en in zip(BM_CATEGORY_MAP.keys(), EN_CATEGORY_MAP.values()):
        if bm.lower() in bm_category.lower() or bm_category.lower() in bm.lower():
            return en
    return "Strategic Communication"


def scrape_mkn_news() -> list[dict]:
    """Main scraping function — scrapes BM page primarily and tries EN."""
    print("=" * 60)
    print("MKN Portal News Scraper")
    print("=" * 60)
    print(f"Scraping from: {MKN_BM_PAGE} (BM)")
    print(f"Max items: {MAX_ITEMS}")
    print()

    # ===== Scrape BM page (primary) =====
    print("[1/2] Fetching BM homepage...")
    bm_soup = fetch_page(MKN_BM_PAGE)
    bm_news = []
    if bm_soup:
        bm_news = extract_news(bm_soup, "bm")
        print(f"       Found {len(bm_news)} BM articles")
    else:
        print("       Failed to fetch BM page")

    # ===== Scrape EN page (secondary, for translation) =====
    print("[2/2] Fetching EN homepage...")
    en_soup = fetch_page(MKN_EN_PAGE)
    en_news = []
    if en_soup:
        en_news = extract_news(en_soup, "en")
        print(f"       Found {len(en_news)} EN articles")
    else:
        print("       Failed to fetch EN page")

    # ===== Build bilingual results =====
    results = []

    # Use BM articles as the primary source
    for i in range(min(len(bm_news), MAX_ITEMS)):
        bm_item = bm_news[i]
        bm_tag, bm_color = assign_tag_and_color(bm_item["category"], "bm")
        en_category = translate_category_to_en(bm_item["category"])
        en_tag, en_color = assign_tag_and_color(en_category, "en")

        # Try to find matching EN article by date
        en_match = None
        for en_item in en_news:
            # Match by similar date (same day/month/year)
            bm_date_clean = re.sub(r"[^\d]", "", bm_item["date"])
            en_date_clean = re.sub(r"[^\d]", "", en_item["date"])
            if bm_date_clean == en_date_clean:
                en_match = en_item
                break

        bm_entry = {
            "category": bm_item["category"] or "Komunikasi Strategik",
            "date": bm_item["date"],
            "title": bm_item["title"],
            "excerpt": bm_item["excerpt"] if len(bm_item["excerpt"]) > 15 else bm_item["title"],
            "tag": bm_tag,
            "tagColor": bm_color,
        }

        if en_match:
            en_entry = {
                "category": en_match["category"] or en_category,
                "date": en_match["date"],
                "title": en_match["title"],
                "excerpt": en_match["excerpt"] if len(en_match["excerpt"]) > 15 else en_match["title"],
                "tag": en_tag,
                "tagColor": en_color,
            }
        else:
            # No EN match — use category-translated placeholder
            en_entry = {
                "category": en_category,
                "date": bm_item["date"],  # Same date
                "title": bm_item["title"],  # Needs manual translation
                "excerpt": bm_item["excerpt"],
                "tag": en_tag,
                "tagColor": en_color,
            }

        results.append({
            "id": i + 1,
            "bm": bm_entry,
            "en": en_entry,
        })

    # If no BM news found but EN exists, use EN as primary
    if not bm_news and en_news:
        for i in range(min(len(en_news), MAX_ITEMS)):
            en_item = en_news[i]
            en_tag, en_color = assign_tag_and_color(en_item["category"], "en")
            bm_category = "Komunikasi Strategik"  # Default BM category
            bm_tag, bm_color = assign_tag_and_color(bm_category, "bm")

            results.append({
                "id": i + 1,
                "bm": {
                    "category": bm_category,
                    "date": en_item["date"],
                    "title": en_item["title"],
                    "excerpt": en_item["excerpt"],
                    "tag": bm_tag,
                    "tagColor": bm_color,
                },
                "en": {
                    "category": en_item["category"] or "Strategic Communication",
                    "date": en_item["date"],
                    "title": en_item["title"],
                    "excerpt": en_item["excerpt"] if len(en_item["excerpt"]) > 15 else en_item["title"],
                    "tag": en_tag,
                    "tagColor": en_color,
                },
            })

    return results


def save_to_json(data: list[dict], filepath: str) -> None:
    """Save scraped data to JSON file (overwrite mode)."""
    try:
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"\n[SUCCESS] Saved {len(data)} news items to: {filepath}")
    except IOError as e:
        print(f"\n[ERROR] Failed to write to {filepath}: {e}")
        sys.exit(1)


def main():
    """Main entry point."""
    news_data = scrape_mkn_news()

    if not news_data:
        print("\n[WARNING] No news items found.")
        print("          The website structure may have changed,")
        print("          or the site may be temporarily unavailable.")
        print("          Keeping existing berita_mkn.json unchanged.")
        sys.exit(0)

    print(f"\nScraped {len(news_data)} news items:")
    for item in news_data:
        bm = item["bm"]
        print(f"  #{item['id']}: [{bm['date']}] {bm['title'][:70]}")

    save_to_json(news_data, OUTPUT_FILE)
    print("\nDone! Run this script regularly to keep berita_mkn.json updated.")
    print("Tip: Set up a cron job or Windows Task Scheduler for auto-updates.")


if __name__ == "__main__":
    main()

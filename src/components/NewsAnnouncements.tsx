import { Icon } from './Icon';
import { newsItems } from '../data/content';

export function NewsAnnouncements() {
  return (
    <section id="news" className="section">
      <div className="container">
        <div className="section-header">
          <h2>News & Announcements</h2>
          <p className="subtitle">
            Stay updated with the latest developments, operations, and initiatives from the National Security Council.
          </p>
          <div className="section-divider" />
        </div>

        <div className="news-grid">
          {/* Featured News (first item) */}
          <div className="news-featured">
            <div className="news-featured-banner">
              <div className="news-featured-pattern" />
              <span
                className="news-tag"
                style={{ background: newsItems[0].tagColor }}
              >
                {newsItems[0].tag}
              </span>
              <Icon name="alert" size={48} color="rgba(255,255,255,0.2)" />
            </div>
            <div className="news-featured-body">
              <div className="news-meta">
                <span className="news-category">{newsItems[0].category}</span>
                <span className="news-dot">•</span>
                <span className="news-date">{newsItems[0].date}</span>
              </div>
              <h3 className="news-featured-title">{newsItems[0].title}</h3>
              <p className="news-featured-excerpt">{newsItems[0].excerpt}</p>
              <a href="#news" className="news-read-more">
                Read Full Article
                <Icon name="arrow" size={16} color="#c5a253" />
              </a>
            </div>
          </div>

          {/* News List */}
          <div className="news-list">
            {newsItems.slice(1).map((item, i) => (
              <div key={i} className="news-card">
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span className="news-dot">•</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-excerpt">{item.excerpt}</p>
                  <div className="news-card-footer">
                    <span
                      className="news-tag-sm"
                      style={{ background: `${item.tagColor}15`, color: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                    <a href="#news" className="news-card-link">
                      Read more
                      <Icon name="arrow" size={14} color="#0d2240" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-cta">
          <a href="#news" className="btn btn-navy">
            View All Announcements
            <Icon name="arrow" size={18} color="#fff" />
          </a>
        </div>
      </div>

      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Featured */
        .news-featured {
          background: var(--mkn-white);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--mkn-gray-light);
          display: flex;
          flex-direction: column;
        }
        .news-featured-banner {
          position: relative;
          background: linear-gradient(135deg, #0d2240, #1a3a5c);
          padding: 48px;
          min-height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .news-featured-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 80% 20%, rgba(197, 162, 83, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(26, 58, 92, 0.3) 0%, transparent 50%);
        }
        .news-featured-banner .news-tag {
          position: relative;
          z-index: 2;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--mkn-white);
          letter-spacing: 0.5px;
        }
        .news-featured-banner svg {
          position: relative;
          z-index: 2;
          opacity: 0.3;
        }
        .news-featured-body {
          padding: 28px;
          flex: 1;
        }
        .news-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 0.78rem;
        }
        .news-category {
          color: var(--mkn-gold-dark);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .news-dot {
          color: var(--mkn-gray-light);
        }
        .news-date {
          color: var(--mkn-gray);
        }
        .news-featured-title {
          font-size: 1.3rem;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .news-featured-excerpt {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .news-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--mkn-gold-dark);
          font-weight: 600;
          font-size: 0.88rem;
          transition: gap 0.2s ease;
        }
        .news-read-more:hover {
          gap: 10px;
        }

        /* News List */
        .news-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .news-card {
          background: var(--mkn-white);
          border-radius: 12px;
          border: 1px solid var(--mkn-gray-light);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .news-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }
        .news-card-body {
          padding: 20px 24px;
        }
        .news-card-title {
          font-size: 1rem;
          margin-bottom: 8px;
          line-height: 1.4;
          color: var(--mkn-navy);
        }
        .news-card-excerpt {
          font-size: 0.82rem;
          color: var(--mkn-gray);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .news-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .news-tag-sm {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .news-card-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--mkn-navy);
          transition: gap 0.2s ease;
        }
        .news-card-link:hover {
          gap: 8px;
        }

        .news-cta {
          text-align: center;
        }

        @media (max-width: 1024px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .news-featured-banner {
            padding: 32px 24px;
            min-height: 120px;
          }
          .news-featured-body {
            padding: 20px;
          }
          .news-featured-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}

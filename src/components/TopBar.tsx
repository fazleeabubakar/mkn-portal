import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../i18n/ThemeContext';

export function TopBar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-gov-label">
              <Icon name="shield" size={14} color="#b8965a" />
              {t.ui.officialPortal}
            </span>
          </div>
          <div className="topbar-right">
            <a href="#intranet" className="topbar-pill">{t.ui.intranet}</a>
            <a href="#webmail" className="topbar-pill">{t.ui.webmail}</a>
            <div className="topbar-sep">|</div>
            <div className="topbar-lang">
              <button
                className={lang === 'en' ? 'lang-active' : 'lang-btn'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <span className="lang-sep">|</span>
              <button
                className={lang === 'bm' ? 'lang-active' : 'lang-btn'}
                onClick={() => setLang('bm')}
              >
                BM
              </button>
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} color="#b8965a" />
            </button>
            <div className="topbar-links">
              <a href="#accessibility" className="topbar-link">{t.ui.accessibility}</a>
              <a href="#sitemap" className="topbar-link">{t.ui.sitemap}</a>
              <a href="#faq" className="topbar-link">{t.ui.faq}</a>
              <a href="#contact" className="topbar-link">{t.ui.contactUs}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="topbar-gold-line" />
      <style>{`
        .topbar {
          background: var(--mkn-navy);
          height: var(--topbar-height);
          display: flex;
          align-items: center;
          font-size: 0.78rem;
        }
        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .topbar-gov-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.3px;
          font-weight: 500;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .topbar-pill {
          padding: 3px 10px;
          border-radius: 3px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.2s ease;
          text-transform: uppercase;
        }
        .topbar-pill:hover {
          color: var(--mkn-gold);
          border-color: var(--mkn-gold);
          background: rgba(184, 150, 90, 0.1);
        }
        .topbar-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.7rem;
        }
        .topbar-lang {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgba(255, 255, 255, 0.5);
        }
        .topbar-lang button {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s;
          letter-spacing: 0.5px;
        }
        .lang-active {
          color: var(--mkn-gold) !important;
          font-weight: 700 !important;
        }
        .lang-btn:hover {
          color: var(--mkn-gold);
        }
        .lang-sep {
          color: rgba(255, 255, 255, 0.3);
        }
        .topbar-links {
          display: flex;
          gap: 14px;
        }
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(184, 150, 90, 0.12);
          border: 1px solid rgba(184, 150, 90, 0.3);
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
          background: rgba(184, 150, 90, 0.25);
          transform: scale(1.1);
        }
        .topbar-link {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s;
        }
        .topbar-link:hover {
          color: var(--mkn-gold);
        }
        .topbar-gold-line {
          height: 2px;
          background: var(--mkn-gold);
        }

        @media (max-width: 1024px) {
          .topbar-links { display: none; }
          .topbar-pill { display: none; }
          .topbar-sep { display: none; }
        }
        @media (max-width: 768px) {
          .topbar-gov-label { font-size: 0.7rem; }
          .theme-toggle { width: 24px; height: 24px; }
        }
      `}</style>
    </>
  );
}

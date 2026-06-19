import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function TopBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-gov-label">
            <Icon name="shield" size={14} color="#c5a253" />
            {t.ui.officialPortal}
          </span>
        </div>
        <div className="topbar-right">
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
          <div className="topbar-links">
            <a href="#accessibility" className="topbar-link">{t.ui.accessibility}</a>
            <a href="#sitemap" className="topbar-link">{t.ui.sitemap}</a>
            <a href="#faq" className="topbar-link">{t.ui.faq}</a>
            <a href="#contact" className="topbar-link">{t.ui.contactUs}</a>
          </div>
        </div>
      </div>
      <style>{`
        .topbar {
          background: var(--mkn-navy);
          border-bottom: 1px solid rgba(197, 162, 83, 0.3);
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
        .topbar-gov-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.3px;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .topbar-lang {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.5);
        }
        .topbar-lang button {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          padding: 0;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s;
        }
        .lang-active {
          color: var(--mkn-gold);
          font-weight: 700;
        }
        .lang-btn:hover {
          color: var(--mkn-gold);
        }
        .lang-sep {
          color: rgba(255, 255, 255, 0.3);
        }
        .topbar-links {
          display: flex;
          gap: 16px;
        }
        .topbar-link {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s;
        }
        .topbar-link:hover {
          color: var(--mkn-gold);
        }
        @media (max-width: 768px) {
          .topbar-links { display: none; }
          .topbar-gov-label { font-size: 0.7rem; }
        }
      `}</style>
    </div>
  );
}

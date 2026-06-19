import { Icon } from './Icon';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-gov-label">
            <Icon name="shield" size={14} color="#c5a253" />
            An official portal of the Malaysian Government
          </span>
        </div>
        <div className="topbar-right">
          <div className="topbar-lang">
            <span className="lang-active">EN</span>
            <span className="lang-sep">|</span>
            <span className="lang-btn">BM</span>
          </div>
          <div className="topbar-links">
            <a href="#accessibility" className="topbar-link">Accessibility</a>
            <a href="#sitemap" className="topbar-link">Sitemap</a>
            <a href="#faq" className="topbar-link">FAQ</a>
            <a href="#contact" className="topbar-link">Contact Us</a>
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
        .lang-active {
          color: var(--mkn-gold);
          font-weight: 700;
        }
        .lang-btn {
          cursor: pointer;
          transition: color 0.2s;
        }
        .lang-btn:hover {
          color: var(--mkn-gold);
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

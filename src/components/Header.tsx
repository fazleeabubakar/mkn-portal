import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="header-logo" onClick={() => setMobileOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}mkn-emblem.png`} alt="Majlis Keselamatan Negara" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">MAJLIS KESELAMATAN NEGARA</span>
            <span className="logo-subtitle">{t.ui.logoSubtitle}</span>
          </div>
        </a>

        <nav className={`header-nav ${mobileOpen ? 'nav-open' : ''}`}>
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMobileOpen(false)}>
            {t.ui.emergencyContact}
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={26} color="#0d2240" />
        </button>
      </div>

      <style>{`
        .header {
          background: var(--mkn-white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 3px solid var(--mkn-gold);
        }
        .header-scrolled {
          box-shadow: var(--shadow-lg);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          gap: 24px;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .logo-img {
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .logo-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--mkn-navy);
          letter-spacing: 0.5px;
        }
        .logo-subtitle {
          font-size: 0.72rem;
          color: var(--mkn-gray);
          letter-spacing: 0.3px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--mkn-navy);
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--mkn-gold);
          transition: all 0.25s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover {
          color: var(--mkn-gold-dark);
          background: rgba(197, 162, 83, 0.08);
        }
        .nav-link:hover::after {
          width: 60%;
        }
        .nav-cta {
          margin-left: 8px;
          padding: 10px 20px;
          font-size: 0.82rem;
        }
        .mobile-toggle {
          display: none;
          padding: 8px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .mobile-toggle:hover {
          background: rgba(197, 162, 83, 0.1);
        }

        @media (max-width: 1024px) {
          .header-nav {
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            background: var(--mkn-white);
            flex-direction: column;
            padding: 16px;
            gap: 4px;
            box-shadow: var(--shadow-xl);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            border-bottom: 3px solid var(--mkn-gold);
          }
          .nav-open {
            transform: translateY(0);
          }
          .nav-link {
            width: 100%;
            padding: 14px;
          }
          .nav-cta {
            margin-left: 0;
            margin-top: 8px;
            width: 100%;
            justify-content: center;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 600px) {
          .logo-subtitle { display: none; }
          .logo-title { font-size: 0.8rem; }
          .logo-img { width: 44px; height: 44px; }
        }
      `}</style>
    </header>
  );
}

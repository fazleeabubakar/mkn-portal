import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const heroContent = t.heroContent;
  return (
    <section id="home" className="hero">
      <div className="hero-bg-image" />
      <div className="hero-overlay" />
      <div className="hero-bg-pattern" />
      <div className="container hero-content">
        <div className="hero-badge gov-badge">
          <span className="hero-badge-dot" />
          {heroContent.badge}
        </div>
        <h1 className="hero-title">
          {heroContent.title}
          <span className="hero-title-accent">{heroContent.subtitle}</span>
        </h1>
        <p className="hero-description">{heroContent.description}</p>
        <div className="hero-actions">
          <a href="#corporate" className="btn btn-primary">
            {heroContent.primaryAction}
            <Icon name="arrow" size={18} color="#1e3a5f" />
          </a>
          <a href="#involvement" className="btn btn-outline">
            {heroContent.secondaryAction}
          </a>
        </div>

        <div className="hero-stats">
          {heroContent.stats.map((stat, i) => (
            <div key={i} className="hero-stat" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>{t.ui.scrollExplore}</span>
        <Icon name="chevron" size={20} color="rgba(255,255,255,0.6)" />
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: calc(100vh - var(--header-height) - var(--topbar-height) - 2px);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px;
        }
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('${import.meta.env.BASE_URL}inv-security.png');
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
          opacity: 0.12;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 58, 95, 0.94) 0%, rgba(42, 74, 110, 0.88) 40%, rgba(58, 90, 124, 0.82) 100%);
        }
        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(184, 150, 90, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(58, 90, 124, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(184, 150, 90, 0.04) 0%, transparent 50%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          animation: fadeInUp 0.8s ease;
        }
        .hero-badge {
          margin-bottom: 28px;
        }
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          background: var(--mkn-gold);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        .hero-title {
          font-size: 3.2rem;
          color: var(--mkn-white);
          margin-bottom: 20px;
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .hero-title-accent {
          display: block;
          font-size: 1.3rem;
          font-weight: 300;
          color: var(--mkn-gold);
          letter-spacing: 1px;
          margin-top: 8px;
        }
        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .hero-stat {
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        .hero-stat-value {
          font-family: var(--font-heading);
          font-size: 2.6rem;
          font-weight: 500;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.3px;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.3px;
          animation: fadeIn 1.5s ease 1s forwards;
          opacity: 0;
        }

        [data-theme="dark"] .hero-bg-image {
          opacity: 0.08;
        }
        [data-theme="dark"] .hero-overlay {
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.97) 0%, rgba(13, 17, 23, 0.94) 40%, rgba(18, 24, 38, 0.90) 100%);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-title-accent {
            font-size: 1.1rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .hero-stat-value {
            font-size: 1.8rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .hero-actions .btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

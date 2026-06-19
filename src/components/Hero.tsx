import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const heroContent = t.heroContent;
  return (
    <section id="home" className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">
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
            <Icon name="arrow" size={18} color="#0d2240" />
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
          min-height: calc(100vh - var(--header-height) - var(--topbar-height));
          background: linear-gradient(135deg, #0d2240 0%, #142d4c 40%, #1a3a5c 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px;
        }
        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(197, 162, 83, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(26, 58, 92, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(197, 162, 83, 0.06) 0%, transparent 50%);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            linear-gradient(180deg, transparent 0%, rgba(13, 34, 64, 0.4) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          animation: fadeInUp 0.8s ease;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(197, 162, 83, 0.15);
          border: 1px solid rgba(197, 162, 83, 0.4);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--mkn-gold-light);
          font-weight: 600;
          letter-spacing: 0.5px;
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
          font-size: 3.5rem;
          color: var(--mkn-white);
          margin-bottom: 20px;
          line-height: 1.15;
          font-weight: 800;
        }
        .hero-title-accent {
          display: block;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--mkn-gold);
          letter-spacing: 2px;
          margin-top: 8px;
        }
        .hero-description {
          font-size: 1.15rem;
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
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.5px;
          text-transform: uppercase;
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
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: fadeIn 1.5s ease 1s forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
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

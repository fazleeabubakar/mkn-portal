import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  const services = t.services;
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2>{t.ui.servicesTitle}</h2>
          <p className="subtitle">
            {t.ui.servicesSubtitle}
          </p>
          <div className="section-divider" />
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon-wrap">
                <Icon name={service.icon} size={26} color="#0d2240" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#services" className="service-action">
                {service.action}
                <Icon name="arrow" size={15} color="#c5a253" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--mkn-white);
          border: 1px solid var(--mkn-gray-light);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--mkn-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-6px);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(13, 34, 64, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .service-card:hover .service-icon-wrap {
          background: var(--mkn-navy);
        }
        .service-card:hover .service-icon-wrap svg {
          fill: var(--mkn-gold) !important;
        }
        .service-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }
        .service-desc {
          font-size: 0.88rem;
          color: var(--mkn-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--mkn-gold-dark);
          transition: gap 0.2s ease;
        }
        .service-action:hover {
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

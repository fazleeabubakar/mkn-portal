import { useState } from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

export function InvolvementHighlights() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();
  const involvementAreas = t.involvementAreas;

  return (
    <section id="involvement" className="section involvement-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.ui.involvement}</h2>
          <p className="subtitle">
            {t.ui.involvementSubtitle}
          </p>
          <div className="section-divider" />
        </div>

        {/* Tab Navigation */}
        <div className="involvement-tabs">
          {involvementAreas.map((area, i) => (
            <button
              key={area.id}
              className={`inv-tab ${activeTab === i ? 'inv-tab-active' : ''}`}
              onClick={() => setActiveTab(i)}
              style={activeTab === i ? { borderBottomColor: area.color } : {}}
            >
              <span className="inv-tab-icon" style={{
                background: activeTab === i ? area.color : 'transparent',
                color: activeTab === i ? '#fff' : area.color,
              }}>
                <Icon name={area.icon} size={18} color={activeTab === i ? '#fff' : area.color} />
              </span>
              <span className="inv-tab-label">{area.title}</span>
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="involvement-content">
          {involvementAreas.map((area, i) => (
            activeTab === i && (
              <div key={area.id} className="inv-detail fade-in-up" style={{ animationDuration: '0.4s' }}>
                <div className="inv-detail-header" style={{ backgroundImage: `linear-gradient(135deg, ${area.color}ee, ${area.color}bb), url(${import.meta.env.BASE_URL}${area.image})` }}>
                  <div className="inv-detail-header-content">
                    <div className="inv-detail-icon-wrap">
                      <Icon name={area.icon} size={32} color="#fff" />
                    </div>
                    <div className="inv-detail-titles">
                      <span className="inv-detail-tag">{area.tag}</span>
                      <h3>{area.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="inv-detail-body">
                  <p className="inv-detail-summary">{area.summary}</p>

                  <div className="inv-highlights">
                    <h4 className="inv-highlights-title">
                      <Icon name="star" size={16} color="#b8965a" />
                      {t.ui.keyAchievements}
                    </h4>
                    <div className="inv-highlights-grid">
                      {area.highlights.map((highlight, j) => (
                        <div key={j} className="inv-highlight-item">
                          <span className="inv-check" style={{ color: area.color }}>
                            <Icon name="star" size={14} color={area.color} />
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Overview Cards */}
        <div className="inv-overview-grid">
          {involvementAreas.map((area, i) => (
            <div
              key={area.id}
              className="inv-overview-card"
              onClick={() => {
                setActiveTab(i);
                document.getElementById('involvement')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="inv-overview-img-wrap">
                <img src={`${import.meta.env.BASE_URL}${area.image}`} alt={area.title} className="inv-overview-img" />
                <span className="inv-overview-tag" style={{ background: `${area.color}15`, color: area.color }}>
                  {area.tag}
                </span>
              </div>
              <div className="inv-overview-card-body">
                <div className="inv-overview-icon" style={{ background: `${area.color}15`, color: area.color }}>
                  <Icon name={area.icon} size={22} color={area.color} />
                </div>
                <h4>{area.title}</h4>
                <p>{area.summary.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .involvement-section {
          background: var(--bg-section);
        }

        /* Tabs */
        .involvement-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 32px;
          overflow-x: auto;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--border-default);
          scrollbar-width: thin;
        }
        .inv-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 10px 10px 0 0;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-gray);
          white-space: nowrap;
          transition: all 0.25s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }
        .inv-tab:hover {
          color: var(--text-heading);
          background: rgba(30, 58, 95, 0.04);
        }
        .inv-tab-active {
          color: var(--text-heading);
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }
        .inv-tab-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          border: 1px solid currentColor;
        }
        .inv-tab-label {
          line-height: 1.2;
        }

        /* Detail */
        .involvement-content {
          margin-bottom: 56px;
        }
        .inv-detail {
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .inv-detail-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 32px;
          color: var(--mkn-white);
          background-size: cover;
          background-position: center;
          min-height: 200px;
        }
        .inv-detail-header-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .inv-detail-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .inv-detail-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .inv-detail-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.2);
          padding: 3px 10px;
          border-radius: 100px;
          align-self: flex-start;
        }
        .inv-detail-titles h3 {
          color: var(--mkn-white);
          font-size: 1.5rem;
        }
        .inv-detail-body {
          padding: 32px;
        }
        .inv-detail-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .inv-highlights-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          margin-bottom: 16px;
          color: var(--text-heading);
        }
        .inv-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .inv-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          padding: 12px 16px;
          background: var(--bg-section);
          border-radius: 8px;
          border-left: 3px solid var(--mkn-gold);
        }
        .inv-check {
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Overview Cards */
        .inv-overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .inv-overview-card {
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border-default);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .inv-overview-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .inv-overview-img-wrap {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        .inv-overview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .inv-overview-card:hover .inv-overview-img {
          transform: scale(1.05);
        }
        .inv-overview-img-wrap .inv-overview-tag {
          position: absolute;
          bottom: 8px;
          right: 8px;
          backdrop-filter: blur(4px);
        }
        .inv-overview-card-body {
          padding: 24px;
        }
        .inv-overview-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .inv-overview-card-body h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .inv-overview-card-body p {
          font-size: 0.85rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin: 0;
        }
        .inv-overview-tag {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .inv-tab-label {
            display: none;
          }
          .inv-tab {
            padding: 12px;
          }
          .inv-detail-header {
            padding: 24px;
          }
          .inv-detail-titles h3 {
            font-size: 1.2rem;
          }
          .inv-detail-body {
            padding: 20px;
          }
          .inv-highlights-grid {
            grid-template-columns: 1fr;
          }
          .inv-overview-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

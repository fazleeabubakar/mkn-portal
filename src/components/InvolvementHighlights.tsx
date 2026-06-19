import { useState } from 'react';
import { Icon } from './Icon';
import { involvementAreas } from '../data/content';

export function InvolvementHighlights() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="involvement" className="section involvement-section">
      <div className="container">
        <div className="section-header">
          <h2>MKN Involvement</h2>
          <p className="subtitle">
            From disaster management to cybersecurity — discover how MKN safeguards Malaysia across six critical domains of national security.
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
                <div className="inv-detail-header" style={{ background: `linear-gradient(135deg, ${area.color}, ${area.color}dd)` }}>
                  <div className="inv-detail-icon-wrap">
                    <Icon name={area.icon} size={32} color="#fff" />
                  </div>
                  <div className="inv-detail-titles">
                    <span className="inv-detail-tag">{area.tag}</span>
                    <h3>{area.title}</h3>
                  </div>
                </div>

                <div className="inv-detail-body">
                  <p className="inv-detail-summary">{area.summary}</p>

                  <div className="inv-highlights">
                    <h4 className="inv-highlights-title">
                      <Icon name="star" size={16} color="#c5a253" />
                      Key Achievements
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
              <div className="inv-overview-icon" style={{ background: `${area.color}15`, color: area.color }}>
                <Icon name={area.icon} size={22} color={area.color} />
              </div>
              <h4>{area.title}</h4>
              <p>{area.summary.slice(0, 100)}...</p>
              <span className="inv-overview-tag" style={{ background: `${area.color}15`, color: area.color }}>
                {area.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .involvement-section {
          background: var(--mkn-cream);
        }

        /* Tabs */
        .involvement-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 32px;
          overflow-x: auto;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--mkn-gray-light);
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
          color: var(--mkn-gray);
          white-space: nowrap;
          transition: all 0.25s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }
        .inv-tab:hover {
          color: var(--mkn-navy);
          background: rgba(13, 34, 64, 0.04);
        }
        .inv-tab-active {
          color: var(--mkn-navy);
          background: var(--mkn-white);
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
          background: var(--mkn-white);
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
          color: #374151;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .inv-highlights-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          margin-bottom: 16px;
          color: var(--mkn-navy);
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
          color: #4b5563;
          line-height: 1.6;
          padding: 12px 16px;
          background: var(--mkn-cream);
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
          background: var(--mkn-white);
          border-radius: 12px;
          padding: 28px;
          border: 1px solid var(--mkn-gray-light);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .inv-overview-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .inv-overview-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .inv-overview-card h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .inv-overview-card p {
          font-size: 0.85rem;
          color: var(--mkn-gray);
          line-height: 1.6;
          margin-bottom: 12px;
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

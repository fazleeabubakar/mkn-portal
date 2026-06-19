import { Icon } from './Icon';
import { aboutInfo, visionMission, orgStructure, leadership } from '../data/content';

export function CorporateInfo() {
  return (
    <section id="corporate" className="section">
      <div className="container">
        {/* ===== About Section ===== */}
        <div className="section-header">
          <h2>Corporate Information</h2>
          <p className="subtitle">
            Learn about the Majlis Keselamatan Negara — our mandate, history, and commitment to safeguarding Malaysia's national security.
          </p>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-heading">{aboutInfo.heading}</h3>
            <p className="about-intro">{aboutInfo.intro}</p>
            {aboutInfo.body.map((para, i) => (
              <p key={i} className="about-body-text">{para}</p>
            ))}
          </div>

          <div className="about-facts">
            <div className="facts-card">
              <div className="facts-header">
                <Icon name="document" size={20} color="#c5a253" />
                <span>Key Facts</span>
              </div>
              <div className="facts-list">
                {aboutInfo.keyFacts.map((fact, i) => (
                  <div key={i} className="fact-item">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Vision & Mission ===== */}
        <div className="vm-section">
          <div className="vm-card vm-vision">
            <div className="vm-icon-wrap">
              <Icon name="star" size={28} color="#c5a253" />
            </div>
            <h3>Our Vision</h3>
            <p>{visionMission.vision}</p>
          </div>
          <div className="vm-card vm-mission">
            <div className="vm-icon-wrap">
              <Icon name="target" size={28} color="#c5a253" />
            </div>
            <h3>Our Mission</h3>
            <p>{visionMission.mission}</p>
          </div>
        </div>

        {/* ===== Core Values ===== */}
        <div className="values-section">
          <h3 className="values-heading">Core Values</h3>
          <div className="values-grid">
            {visionMission.values.map((val, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">
                  <Icon name={val.icon} size={24} color="#c5a253" />
                </div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Organisation Structure ===== */}
        <div className="org-section">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem' }}>{orgStructure.heading}</h3>
            <p className="subtitle">{orgStructure.description}</p>
          </div>
          <div className="org-tiers">
            {orgStructure.levels.map((level, i) => (
              <div key={i} className="org-tier">
                <div className="org-tier-badge" style={{
                  background: i === 0 ? 'var(--mkn-navy)' : i === 1 ? 'var(--mkn-navy-light)' : 'var(--mkn-navy-lighter)'
                }}>
                  Tier {i + 1}
                </div>
                <div className="org-tier-content">
                  <h4 className="org-tier-title">{level.title}</h4>
                  <p className="org-tier-desc">{level.desc}</p>
                  <div className="org-members">
                    {level.members.map((member, j) => (
                      <span key={j} className="org-member-tag">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
                {i < orgStructure.levels.length - 1 && (
                  <div className="org-connector">
                    <Icon name="chevron" size={20} color="#c5a253" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== Leadership ===== */}
        <div className="leadership-section">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.6rem' }}>Key Leadership</h3>
            <p className="subtitle">
              The distinguished leadership guiding Malaysia's national security agenda.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((person, i) => (
              <div key={i} className="leader-card">
                <div
                  className="leader-avatar"
                  style={{ background: person.color }}
                >
                  {person.initials}
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{person.name}</h4>
                  <p className="leader-position">{person.position}</p>
                  <span className="leader-role">{person.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        .about-heading {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--mkn-navy);
          position: relative;
          padding-left: 16px;
        }
        .about-heading::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 4px;
          background: var(--mkn-gold);
          border-radius: 2px;
        }
        .about-intro {
          font-size: 1.1rem;
          color: #374151;
          margin-bottom: 16px;
          font-weight: 500;
          line-height: 1.8;
        }
        .about-body-text {
          color: #4b5563;
          margin-bottom: 14px;
          line-height: 1.8;
        }

        /* Facts Card */
        .facts-card {
          background: var(--mkn-navy);
          border-radius: 12px;
          padding: 28px;
          position: sticky;
          top: 100px;
          box-shadow: var(--shadow-lg);
        }
        .facts-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--mkn-gold);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(197, 162, 83, 0.2);
        }
        .facts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fact-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .fact-value {
          font-size: 0.98rem;
          color: var(--mkn-white);
          font-weight: 600;
        }

        /* Vision & Mission */
        .vm-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 64px;
        }
        .vm-card {
          background: var(--mkn-cream);
          border-radius: 12px;
          padding: 36px;
          border: 1px solid var(--mkn-gray-light);
          border-top: 4px solid var(--mkn-gold);
          transition: all 0.3s ease;
        }
        .vm-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .vm-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: var(--mkn-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .vm-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
        }
        .vm-card p {
          color: #4b5563;
          line-height: 1.8;
          font-size: 0.98rem;
        }

        /* Values */
        .values-section {
          margin-bottom: 64px;
        }
        .values-heading {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 32px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .value-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 12px;
          background: var(--mkn-white);
          border: 1px solid var(--mkn-gray-light);
          transition: all 0.3s ease;
        }
        .value-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-md);
        }
        .value-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: rgba(197, 162, 83, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value-card h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .value-card p {
          font-size: 0.85rem;
          color: var(--mkn-gray);
          line-height: 1.6;
        }

        /* Org Structure */
        .org-section {
          background: var(--mkn-cream);
          padding: 56px;
          border-radius: 16px;
          margin-bottom: 64px;
        }
        .org-tiers {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .org-tier {
          display: flex;
          gap: 24px;
          position: relative;
          padding-bottom: 32px;
        }
        .org-tier-badge {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mkn-gold);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          border: 3px solid var(--mkn-gold);
          z-index: 2;
        }
        .org-tier-content {
          flex: 1;
          background: var(--mkn-white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--mkn-gray-light);
          box-shadow: var(--shadow-sm);
        }
        .org-tier-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }
        .org-tier-desc {
          font-size: 0.88rem;
          color: var(--mkn-gray);
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .org-members {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .org-member-tag {
          font-size: 0.78rem;
          padding: 5px 12px;
          background: rgba(13, 34, 64, 0.06);
          color: var(--mkn-navy);
          border-radius: 100px;
          font-weight: 500;
        }
        .org-connector {
          position: absolute;
          left: 31px;
          top: 64px;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Leadership */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .leader-card {
          background: var(--mkn-white);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          border: 1px solid var(--mkn-gray-light);
          transition: all 0.3s ease;
        }
        .leader-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .leader-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--mkn-white);
          border: 3px solid var(--mkn-gold);
        }
        .leader-name {
          font-size: 0.95rem;
          margin-bottom: 6px;
          line-height: 1.4;
        }
        .leader-position {
          font-size: 0.85rem;
          color: var(--mkn-gold-dark);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .leader-role {
          font-size: 0.78rem;
          color: var(--mkn-gray);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .facts-card {
            position: static;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .vm-section {
            grid-template-columns: 1fr;
          }
          .org-section {
            padding: 28px;
          }
          .org-tier {
            flex-direction: column;
            gap: 12px;
          }
          .org-connector {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

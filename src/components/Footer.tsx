import { Icon } from './Icon';
import { footerLinks, emergencyContacts } from '../data/content';

export function Footer() {
  return (
    <footer id="contact">
      {/* Emergency Contacts Banner */}
      <div className="emergency-banner">
        <div className="container emergency-inner">
          <div className="emergency-title">
            <Icon name="alert" size={28} color="#dc2626" />
            <div>
              <h3>Emergency Contacts</h3>
              <p>24/7 national security & disaster response hotlines</p>
            </div>
          </div>
          <div className="emergency-contacts">
            {emergencyContacts.map((contact, i) => (
              <div key={i} className="emergency-contact-item">
                <div className="emergency-contact-icon">
                  <Icon name="phone" size={16} color="#fff" />
                </div>
                <div className="emergency-contact-info">
                  <span className="emergency-contact-name">{contact.name}</span>
                  <span className="emergency-contact-phone">{contact.phone}</span>
                  <span className="emergency-contact-hours">
                    <Icon name="clock" size={10} color="#15803d" />
                    {contact.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/mkn-logo.png" alt="Majlis Keselamatan Negara - Official Portal" className="footer-logo-img" />
              <div>
                <div className="footer-logo-sub">National Security Council of Malaysia</div>
              </div>
            </div>
            <p className="footer-desc">
              Safeguarding Malaysia's sovereignty, territorial integrity, and public safety through strategic security policies, disaster management, and crisis coordination.
            </p>
            <div className="footer-address">
              <Icon name="location" size={16} color="#c5a253" />
              <span>Aras 5-9, Blok D4, Kompleks D, Pusat Pentadbiran Kerajaan Persekutuan, 62502 Putrajaya, Malaysia</span>
            </div>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Icon name="phone" size={15} color="#c5a253" />
                <span>+603-8888 4000</span>
              </div>
              <div className="footer-contact-item">
                <Icon name="email" size={15} color="#c5a253" />
                <span>pro@mkn.gov.my</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>About MKN</h4>
            <ul>
              {footerLinks.about.map((link, i) => (
                <li key={i}><a href="#corporate">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {footerLinks.services.map((link, i) => (
                <li key={i}><a href="#involvement">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              {footerLinks.resources.map((link, i) => (
                <li key={i}><a href="#services">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Government</h4>
            <ul>
              {footerLinks.government.map((link, i) => (
                <li key={i}>
                  <a href="#footer" className="footer-ext-link">
                    {link}
                    <Icon name="external" size={12} color="#6b7280" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="container footer-social">
          <div className="footer-social-left">
            <span className="footer-social-label">Follow us:</span>
            <div className="footer-social-icons">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#footer" className="footer-social-icon">
                  <Icon name={social} size={18} color="#c5a253" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-newsletter">
            <span className="footer-newsletter-label">Subscribe to MKN updates</span>
            <div className="footer-newsletter-input">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn btn-primary footer-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container copyright-inner">
          <div className="copyright-left">
            <span>© 2026 Majlis Keselamatan Negara. All Rights Reserved.</span>
          </div>
          <div className="copyright-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#disclaimer">Disclaimer</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <div className="copyright-last">
            <span>Last Updated: 19 June 2026</span>
          </div>
        </div>
      </div>

      <style>{`
        /* Emergency Banner */
        .emergency-banner {
          background: linear-gradient(135deg, #fef2f2, #fff7ed);
          border-top: 3px solid #dc2626;
          padding: 32px 0;
        }
        .emergency-inner {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          flex-wrap: wrap;
        }
        .emergency-title {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .emergency-title h3 {
          font-size: 1.1rem;
          color: #991b1b;
        }
        .emergency-title p {
          font-size: 0.82rem;
          color: var(--mkn-gray);
        }
        .emergency-contacts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          flex: 1;
        }
        .emergency-contact-item {
          display: flex;
          gap: 10px;
          background: var(--mkn-white);
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #fecaca;
          transition: all 0.2s ease;
        }
        .emergency-contact-item:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .emergency-contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .emergency-contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .emergency-contact-name {
          font-size: 0.72rem;
          color: var(--mkn-gray);
          font-weight: 600;
          line-height: 1.3;
        }
        .emergency-contact-phone {
          font-size: 1rem;
          font-weight: 800;
          color: var(--mkn-navy);
        }
        .emergency-contact-hours {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          color: #15803d;
          font-weight: 600;
        }

        /* Main Footer */
        .footer-main {
          background: var(--mkn-navy);
          padding: 56px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(197, 162, 83, 0.15);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .footer-logo-img {
          height: 56px;
          width: auto;
        }
        .footer-logo-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--mkn-white);
          letter-spacing: 0.3px;
        }
        .footer-logo-sub {
          font-size: 0.72rem;
          color: var(--mkn-gold);
        }
        .footer-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .footer-address {
          display: flex;
          gap: 8px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .footer-contact-info {
          display: flex;
          gap: 20px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-col h4 {
          color: var(--mkn-gold);
          font-size: 0.92rem;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col a {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.55);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .footer-col a:hover {
          color: var(--mkn-gold);
          padding-left: 4px;
        }
        .footer-ext-link svg {
          opacity: 0.5;
        }

        /* Social & Newsletter */
        .footer-social {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-social-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-social-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-social-icons {
          display: flex;
          gap: 8px;
        }
        .footer-social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(197, 162, 83, 0.1);
          border: 1px solid rgba(197, 162, 83, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-social-icon:hover {
          background: var(--mkn-gold);
          transform: translateY(-2px);
        }
        .footer-social-icon:hover svg {
          fill: var(--mkn-navy) !important;
        }
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-newsletter-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-newsletter-input {
          display: flex;
          gap: 8px;
        }
        .footer-newsletter-input input {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid rgba(197, 162, 83, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: var(--mkn-white);
          font-size: 0.85rem;
          min-width: 260px;
          outline: none;
          transition: border-color 0.2s;
        }
        .footer-newsletter-input input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .footer-newsletter-input input:focus {
          border-color: var(--mkn-gold);
        }
        .footer-subscribe-btn {
          padding: 10px 20px;
          font-size: 0.82rem;
        }

        /* Copyright */
        .footer-copyright {
          background: #061a33;
          padding: 16px 0;
          border-top: 1px solid rgba(197, 162, 83, 0.1);
        }
        .copyright-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .copyright-left span {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.4);
        }
        .copyright-links {
          display: flex;
          gap: 16px;
        }
        .copyright-links a {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          transition: color 0.2s;
        }
        .copyright-links a:hover {
          color: var(--mkn-gold);
        }
        .copyright-last span {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .emergency-contacts {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .emergency-inner {
            flex-direction: column;
          }
          .footer-social {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-newsletter-input input {
            min-width: 180px;
          }
          .copyright-inner {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .emergency-contacts {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

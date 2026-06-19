import { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { statistics } from '../data/content';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, start }: { stat: typeof statistics[0]; start: boolean }) {
  const count = useCountUp(stat.value, 1800, start);

  const formatNumber = (num: number) => {
    if (stat.value >= 1000) {
      return Math.round(num).toLocaleString();
    }
    if (stat.value < 10) {
      return num.toFixed(1);
    }
    return Math.round(num).toString();
  };

  return (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon name={stat.icon} size={24} color="#c5a253" />
      </div>
      <div className="stat-value">
        {formatNumber(count)}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="section stats-section" ref={sectionRef}>
      <div className="stats-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <h2 style={{ color: 'var(--mkn-white)' }}>Impact in Numbers</h2>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Measuring our commitment to national security through tangible results and outcomes.
          </p>
          <div className="section-divider" />
        </div>

        <div className="stats-grid">
          {statistics.map((stat, i) => (
            <StatCard key={i} stat={stat} start={visible} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          background: linear-gradient(135deg, #0d2240 0%, #142d4c 50%, #0d2240 100%);
          position: relative;
          overflow: hidden;
        }
        .stats-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 15% 20%, rgba(197, 162, 83, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 70%, rgba(26, 58, 92, 0.5) 0%, transparent 40%);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(197, 162, 83, 0.2);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(197, 162, 83, 0.08);
          border-color: rgba(197, 162, 83, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 12px;
          background: rgba(197, 162, 83, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-suffix {
          font-size: 1.2rem;
          margin-left: 2px;
        }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          letter-spacing: 0.3px;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}

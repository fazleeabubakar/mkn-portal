import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../i18n/LanguageContext';

interface CrimeItem {
  jenis: string;
  kes: number;
  selesai: number;
}

interface DistrictData {
  daerah: string;
  negeri: string;
  jenayah: CrimeItem[];
  bulan: string;
}

export function CrimeData() {
  const { t } = useLanguage();
  const [data, setData] = useState<DistrictData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedDistrict, setExpandedDistrict] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data_jenayah.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then((json: DistrictData[]) => {
        setData(json);
        if (json.length > 0) setExpandedDistrict(json[0].daerah);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const calcTotal = (items: CrimeItem[]) =>
    items.reduce((sum, item) => sum + item.kes, 0);
  const calcResolved = (items: CrimeItem[]) =>
    items.reduce((sum, item) => sum + item.selesai, 0);
  const calcRate = (resolved: number, total: number) =>
    total > 0 ? Math.round((resolved / total) * 100) : 0;

  const grandTotal = data.reduce((s, d) => s + calcTotal(d.jenayah), 0);
  const grandResolved = data.reduce((s, d) => s + calcResolved(d.jenayah), 0);

  return (
    <section id="crime-data" className="section">
      <div className="container">
        <div className="section-header">
          <h2>{t.ui.crimeDataTitle}</h2>
          <p className="subtitle">{t.ui.crimeDataSubtitle}</p>
          <div className="section-divider" />
        </div>

        {loading && (
          <div className="crime-loading">
            <Icon name="document" size={32} color="var(--icon-default)" />
            <p>{t.ui.crimeDataLoading}</p>
          </div>
        )}

        {error && (
          <div className="crime-error">
            <Icon name="alert" size={32} color="#dc2626" />
            <p>{t.ui.crimeDataError}</p>
          </div>
        )}

        {!loading && !error && data.length === 0 && (
          <div className="crime-empty">
            <Icon name="document" size={32} color="var(--icon-default)" />
            <p>{t.ui.crimeDataEmpty}</p>
          </div>
        )}

        {!loading && !error && data.length > 0 && (
          <>
            {/* Summary Cards */}
            <div className="crime-summary-grid">
              <div className="crime-summary-card">
                <span className="crime-summary-value">{data.length}</span>
                <span className="crime-summary-label">{t.ui.crimeDataDistricts}</span>
              </div>
              <div className="crime-summary-card">
                <span className="crime-summary-value">{grandTotal.toLocaleString()}</span>
                <span className="crime-summary-label">{t.ui.crimeDataTotalCases}</span>
              </div>
              <div className="crime-summary-card">
                <span className="crime-summary-value">{grandResolved.toLocaleString()}</span>
                <span className="crime-summary-label">{t.ui.crimeDataResolvedCases}</span>
              </div>
              <div className="crime-summary-card">
                <span className="crime-summary-value">{calcRate(grandResolved, grandTotal)}%</span>
                <span className="crime-summary-label">{t.ui.crimeDataResolutionRate}</span>
              </div>
            </div>

            {/* District Tables */}
            <div className="crime-districts">
              {data.map((district) => {
                const total = calcTotal(district.jenayah);
                const resolved = calcResolved(district.jenayah);
                const rate = calcRate(resolved, total);
                const isExpanded = expandedDistrict === district.daerah;

                return (
                  <div key={district.daerah} className="crime-district-card">
                    <button
                      className="crime-district-header"
                      onClick={() => setExpandedDistrict(isExpanded ? null : district.daerah)}
                    >
                      <div className="crime-district-info">
                        <span className="crime-district-name">{district.daerah}</span>
                        <span className="crime-district-state">{district.negeri} · {district.bulan}</span>
                      </div>
                      <div className="crime-district-stats">
                        <span className="crime-district-badge">{total} {t.ui.crimeDataCases}</span>
                        <span className="crime-district-rate" style={{ color: rate >= 75 ? 'var(--color-success)' : rate >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                          {rate}%
                        </span>
                        <Icon name="chevron" size={20} color="var(--icon-default)" />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="crime-table-wrap fade-in">
                        <table className="crime-table">
                          <thead>
                            <tr>
                              <th>{t.ui.crimeDataType}</th>
                              <th className="crime-num">{t.ui.crimeDataTotal}</th>
                              <th className="crime-num">{t.ui.crimeDataResolved}</th>
                              <th className="crime-num">{t.ui.crimeDataPending}</th>
                              <th className="crime-num">{t.ui.crimeDataRate}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {district.jenayah.map((item, i) => {
                              const pending = item.kes - item.selesai;
                              const itemRate = calcRate(item.selesai, item.kes);
                              return (
                                <tr key={i}>
                                  <td className="crime-type-cell">
                                    <span className="crime-type-dot" style={{ background: itemRate >= 75 ? 'var(--color-success)' : itemRate >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }} />
                                    {item.jenis}
                                  </td>
                                  <td className="crime-num">{item.kes}</td>
                                  <td className="crime-num">{item.selesai}</td>
                                  <td className="crime-num">{pending}</td>
                                  <td className="crime-num">
                                    <span className="crime-rate-pill" style={{
                                      background: itemRate >= 75 ? 'rgba(21, 128, 61, 0.12)' : itemRate >= 50 ? 'rgba(180, 83, 9, 0.12)' : 'rgba(220, 38, 38, 0.12)',
                                      color: itemRate >= 75 ? 'var(--color-success)' : itemRate >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'
                                    }}>
                                      {itemRate}%
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td className="crime-total-cell">{t.ui.crimeDataTotal}</td>
                              <td className="crime-num crime-total-cell">{total}</td>
                              <td className="crime-num crime-total-cell">{resolved}</td>
                              <td className="crime-num crime-total-cell">{total - resolved}</td>
                              <td className="crime-num crime-total-cell">{rate}%</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <style>{`
        .crime-loading,
        .crime-error,
        .crime-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 48px;
          text-align: center;
        }
        .crime-loading p,
        .crime-empty p {
          color: var(--text-gray);
          font-size: 0.95rem;
        }
        .crime-error p {
          color: var(--color-danger);
          font-size: 0.95rem;
        }

        /* Summary Cards */
        .crime-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .crime-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          border-top: 4px solid var(--mkn-gold);
          transition: all 0.3s ease;
        }
        .crime-summary-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }
        .crime-summary-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .crime-summary-label {
          font-size: 0.78rem;
          color: var(--text-gray);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* District Cards */
        .crime-districts {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crime-district-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .crime-district-card:hover {
          border-color: var(--mkn-gold);
        }
        .crime-district-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }
        .crime-district-header:hover {
          background: var(--tag-bg);
        }
        .crime-district-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .crime-district-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .crime-district-state {
          font-size: 0.78rem;
          color: var(--text-gray);
        }
        .crime-district-stats {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .crime-district-badge {
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 12px;
          background: var(--tag-bg);
          color: var(--text-heading);
          border-radius: 100px;
        }
        .crime-district-rate {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
        }
        .crime-district-header svg {
          transition: transform 0.3s ease;
        }

        /* Table */
        .crime-table-wrap {
          overflow-x: auto;
          border-top: 1px solid var(--border-default);
        }
        .crime-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .crime-table thead {
          background: var(--bg-section);
        }
        .crime-table th {
          padding: 14px 20px;
          text-align: left;
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 2px solid var(--border-default);
          white-space: nowrap;
        }
        .crime-table td {
          padding: 12px 20px;
          border-bottom: 1px solid var(--border-default);
          color: var(--text-body);
        }
        .crime-table tbody tr:hover {
          background: var(--tag-bg);
        }
        .crime-num {
          text-align: center;
          font-variant-numeric: tabular-nums;
          font-weight: 500;
        }
        .crime-type-cell {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }
        .crime-type-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .crime-rate-pill {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .crime-table tfoot {
          background: var(--bg-section);
        }
        .crime-total-cell {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-heading);
          border-top: 2px solid var(--mkn-gold);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .crime-summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .crime-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .crime-summary-value {
            font-size: 1.6rem;
          }
          .crime-district-header {
            padding: 16px;
          }
          .crime-district-stats {
            gap: 8px;
          }
          .crime-district-badge {
            display: none;
          }
          .crime-table th,
          .crime-table td {
            padding: 10px 12px;
            font-size: 0.82rem;
          }
        }
        @media (max-width: 600px) {
          .crime-summary-grid {
            grid-template-columns: 1fr;
          }
          .crime-district-rate {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}

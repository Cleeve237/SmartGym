const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul"];
const REVENUE = [120, 180, 210, 190, 250, 310, 385];
const BOOKINGS_DATA = [45, 62, 78, 70, 95, 120, 145];

export default function RevenueAnalyticsWidget() {
  const maxR = Math.max(...REVENUE);

  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-graph-up" /> Analytics revenus
        </div>
      </div>
      <div className="adm-widget-body">
        <div className="adm-chart">
          {REVENUE.map((v, i) => (
            <div
              key={i}
              className={`adm-chart-bar ${i === REVENUE.length - 1 ? "adm-chart-bar--active" : ""}`}
              style={{ height: `${(v / maxR) * 100}%` }}
              title={`${MONTHS[i]}: ${v}K FCFA`}
            />
          ))}
        </div>
        <div className="adm-chart-labels">
          {MONTHS.map((m) => <div key={m} className="adm-chart-label">{m}</div>)}
        </div>
        <div className="adm-chart-legend">
          <span><span className="adm-chart-legend-dot" style={{ background: "var(--adm-accent-light)" }} /> Revenus (K FCFA)</span>
          <span><span className="adm-chart-legend-dot" style={{ background: "var(--color-success)" }} /> Réservations</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "var(--font-size-lg)", color: "var(--color-dark)" }}>385K</div>
            Ce mois
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "var(--font-size-lg)", color: "var(--color-dark)" }}>145</div>
            Réservations
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "var(--font-size-lg)", color: "var(--color-success)" }}>+15%</div>
            Croissance
          </div>
        </div>
      </div>
    </div>
  );
}

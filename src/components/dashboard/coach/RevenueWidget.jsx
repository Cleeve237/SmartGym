import RevenueChart from "./RevenueChart";

export default function RevenueWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-graph-up" /> Revenus
        </div>
        <a href="/coach/revenue" className="cd-widget-link">Détails <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="cd-widget-body">
        <RevenueChart />
        <div className="cd-revenue-rows">
          <div className="cd-revenue-row">
            <span className="cd-revenue-label">Aujourd&apos;hui</span>
            <span className="cd-revenue-value">25 000 FCFA</span>
          </div>
          <div className="cd-revenue-row">
            <span className="cd-revenue-label">Cette semaine</span>
            <span className="cd-revenue-value">145 000 FCFA</span>
          </div>
          <div className="cd-revenue-row">
            <span className="cd-revenue-label">Ce mois</span>
            <span className="cd-revenue-value" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
              385 000 FCFA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

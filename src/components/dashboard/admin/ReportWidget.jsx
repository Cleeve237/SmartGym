const REPORTS = [
  { id: "rp1", icon: "bi-flag", iconBg: "var(--color-danger-light)", iconColor: "var(--color-danger)", title: "Comportement inapproprié", desc: "2 signalements contre un coach", badge: "En attente", badgeType: "warning" },
  { id: "rp2", icon: "bi-credit-card", iconBg: "var(--color-warning-light)", iconColor: "var(--color-warning)", title: "Litige paiement", desc: "1 demande de remboursement", badge: "Urgent", badgeType: "danger" },
  { id: "rp3", icon: "bi-exclamation-triangle", iconBg: "var(--color-accent-light)", iconColor: "var(--color-accent)", title: "Coach inactif", desc: "3 coaches sans réservation depuis 30j", badge: "Info", badgeType: "info" },
];

export default function ReportWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-flag" /> Signalements
        </div>
        <span className="adm-badge adm-badge--danger">{REPORTS.length}</span>
      </div>
      <div className="adm-widget-body--flush">
        {REPORTS.length === 0 ? (
          <div className="adm-empty">
            <div className="adm-empty-icon"><i className="bi bi-flag" /></div>
            <div className="adm-empty-title">Aucun signalement</div>
            <div className="adm-empty-text">Tout va bien !</div>
          </div>
        ) : (
          REPORTS.map((r) => (
            <div key={r.id} className="adm-report">
              <div className="adm-report-icon" style={{ background: r.iconBg, color: r.iconColor }}>
                <i className={`bi ${r.icon}`} />
              </div>
              <div className="adm-report-info">
                <div className="adm-report-title">{r.title}</div>
                <div className="adm-report-desc">{r.desc}</div>
              </div>
              <span className={`adm-badge adm-badge--${r.badgeType}`}>{r.badge}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

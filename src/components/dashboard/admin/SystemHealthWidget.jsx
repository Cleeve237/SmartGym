const HEALTH = [
  { label: "Serveur principal", status: "ok", detail: "99.9% uptime" },
  { label: "Base de données", status: "ok", detail: "Répond en 12ms" },
  { label: "Paiements (MTN)", status: "ok", detail: "Opérationnel" },
  { label: "Paiements (Orange)", status: "warn", detail: "Latence élevée" },
  { label: "Notifications SMS", status: "ok", detail: "Opérationnel" },
  { label: "API Express", status: "ok", detail: "Répond en 45ms" },
];

export default function SystemHealthWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-heart-pulse" /> État du système
        </div>
        <span className="adm-badge adm-badge--success">Tout OK</span>
      </div>
      <div className="adm-widget-body--flush">
        {HEALTH.map((h) => (
          <div key={h.label} className="adm-health-row">
            <span className="adm-health-label">
              <span className={`adm-health-dot adm-health-dot--${h.status}`} />
              {h.label}
            </span>
            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>{h.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

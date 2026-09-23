export default function ProfilePerformanceWidget() {
  const metrics = [
    { value: "1.2K", label: "Visites profil" },
    { value: "86", label: "Favoris" },
    { value: "12", label: "Demandes reçues" },
    { value: "67%", label: "Taux conversion" },
  ];

  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-bar-chart-line" /> Performance profil
        </div>
      </div>
      <div className="cd-widget-body">
        <div className="cd-perf-grid">
          {metrics.map((m) => (
            <div key={m.label} className="cd-perf-item">
              <div className="cd-perf-value">{m.value}</div>
              <div className="cd-perf-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressWidget() {
  const weeklyPct = 75;

  const metrics = [
    { label: 'Poids', value: '78 kg', icon: 'bi-speedometer', color: 'var(--color-primary)' },
    { label: 'Calories', value: '1 850 kcal', icon: 'bi-fire', color: 'var(--color-warning)' },
    { label: 'Seances', value: '3 / 4', icon: 'bi-trophy', color: 'var(--color-info)' },
    { label: 'Progression', value: '75%', icon: 'bi-graph-up', color: 'var(--color-success)' },
  ];

  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-graph-up" />
          Progression
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-progress">
          <div className="dash-progress-header">
            <span className="dash-progress-label">Objectif hebdomadaire</span>
            <span className="dash-progress-pct">{weeklyPct}%</span>
          </div>
          <div className="dash-progress-bar" role="progressbar" aria-valuenow={weeklyPct} aria-valuemin={0} aria-valuemax={100}>
            <div className="dash-progress-fill" style={{ width: `${weeklyPct}%` }} />
          </div>
          <div className="dash-progress-message">
            <i className="bi bi-lightning-charge-fill" />
            <span>Excellent ! Vous etes en bonne voie cette semaine.</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
          {metrics.map((m) => (
            <div key={m.label} className="dash-health-item">
              <i className={`bi ${m.icon} dash-health-item-icon`} style={{ color: m.color }} />
              <div className="dash-health-item-value">{m.value}</div>
              <div className="dash-health-item-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressWidget;

function HealthSummaryWidget() {
  const items = [
    { icon: 'bi-speedometer2', value: '23.5', label: 'IMC', color: 'var(--color-primary)' },
    { icon: 'bi-weight', value: '78 kg', label: 'Poids actuel', color: 'var(--color-info)' },
    { icon: 'bi-bullseye', value: '75 kg', label: 'Objectif', color: 'var(--color-success)' },
    { icon: 'bi-calendar2-check', value: '3 restantes', label: 'Seances', color: 'var(--color-warning)' },
  ];

  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-heart-pulse" />
          Sante
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-health">
          {items.map((item) => (
            <div key={item.label} className="dash-health-item">
              <i className={`bi ${item.icon} dash-health-item-icon`} style={{ color: item.color }} />
              <div className="dash-health-item-value">{item.value}</div>
              <div className="dash-health-item-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthSummaryWidget;

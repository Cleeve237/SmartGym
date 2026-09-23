const statsData = [
  { value: '500+', label: 'Coachs certifi\u00e9s', icon: 'bi-person-workspace', iconBg: 'rgba(22, 163, 74, 0.15)' },
  { value: '3 000+', label: 'Clients actifs', icon: 'bi-people-fill', iconBg: 'rgba(59, 130, 246, 0.15)' },
  { value: '1 200+', label: 'R\u00e9alisations', icon: 'bi-calendar-check-fill', iconBg: 'rgba(249, 115, 22, 0.15)' },
  { value: '15+', label: 'Villes couvertes', icon: 'bi-geo-alt-fill', iconBg: 'rgba(139, 92, 246, 0.15)' },
];

function ImpactNumbers() {
  return (
    <section className="ab-impact" aria-label="Chiffres cl\u00e9s">
      <div className="container ab-impact-inner">
        <div className="ab-section-header">
          <div className="ab-impact-badge">
            <i className="bi bi-bar-chart-fill" />
            Chiffres cl\u00e9s
          </div>
          <h2 className="ab-impact-title">
            Notre impact en chiffres
          </h2>
        </div>

        <div className="row g-4">
          {statsData.map((s) => (
            <div key={s.label} className="col-6 col-lg-3">
              <div className="ab-impact-card">
                <div className="ab-impact-icon" style={{ backgroundColor: s.iconBg }}>
                  <i className={`bi ${s.icon}`} style={{ color: 'var(--color-white)', fontSize: '1.3rem' }} aria-hidden="true" />
                </div>
                <div className="ab-impact-value">{s.value}</div>
                <div className="ab-impact-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactNumbers;

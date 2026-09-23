const partnersData = [
  { icon: 'bi-building', label: 'SmartGym Gym' },
  { icon: 'bi-heart-pulse', label: 'Wellness Hub' },
  { icon: 'bi-trophy', label: 'Sport Plus' },
  { icon: 'bi-lightning-charge', label: 'Energy Fit' },
  { icon: 'bi-emoji-smile', label: 'Happy Body' },
  { icon: 'bi-activity', label: 'Active Life' },
];

function PartnersSection() {
  return (
    <section className="ab-partners" aria-label="Nos partenaires">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-handshake" />
            Partenaires
          </div>
          <h2 className="ab-section-title">
            Nos partenaires
          </h2>
          <p className="ab-section-subtitle">
            Des organisations qui partagent notre vision du sport accessible.
          </p>
        </div>

        <div className="ab-partners-track">
          {partnersData.map((p) => (
            <div key={p.label} className="ab-partner-logo" aria-label={p.label}>
              <i className={`bi ${p.icon}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

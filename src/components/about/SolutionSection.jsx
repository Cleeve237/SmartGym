const stepsData = [
  { icon: 'bi-search', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', title: 'Recherche', desc: 'Trouvez un coach pr\u00e8s de chez vous' },
  { icon: 'bi-person-check', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: 'Choix d\'un coach', desc: 'Comparez les profils et avis' },
  { icon: 'bi-calendar-event', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: 'R\u00e9servation', desc: 'R\u00e9servez en quelques clics' },
  { icon: 'bi-shield-lock', iconBg: 'var(--color-success-light)', iconColor: 'var(--color-success)', title: 'Paiement s\u00e9curis\u00e9', desc: 'Mobile Money ou carte bancaire' },
  { icon: 'bi-graph-up-arrow', iconBg: '#F3E8FF', iconColor: '#8B5CF6', title: 'Suivi sportif', desc: 'Visualisez vos progr\u00e8s' },
];

function SolutionSection() {
  return (
    <section className="ab-solution" aria-label="Notre solution">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-lightbulb-fill" />
            La solution
          </div>
          <h2 className="ab-section-title">
            Notre solution
          </h2>
          <p className="ab-section-subtitle">
            Un parcours simple et fluide, de la recherche au suivi de vos progr&egrave;s.
          </p>
        </div>

        <div className="ab-solution-flow">
          {stepsData.map((step, i) => (
            <div key={step.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div className="ab-solution-step">
                <span className="ab-solution-step-number">0{i + 1}</span>
                <div className="ab-solution-step-icon" style={{ backgroundColor: step.iconBg }}>
                  <i className={`bi ${step.icon}`} style={{ color: step.iconColor, fontSize: '1.25rem' }} aria-hidden="true" />
                </div>
                <div className="ab-solution-step-content">
                  <h3 className="ab-solution-step-title">{step.title}</h3>
                  <p className="ab-solution-step-desc">{step.desc}</p>
                </div>
              </div>
              {i < stepsData.length - 1 && (
                <div className="ab-solution-arrow">
                  <i className="bi bi-arrow-down" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;

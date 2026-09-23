const stepsData = [
  {
    number: '01',
    icon: 'bi-bullseye',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    title: 'Choisissez votre objectif',
    description: 'D\u00e9finissez ce que vous souhaitez atteindre : perte de poids, musculation, cardio ou bien-\u00eatre.',
  },
  {
    number: '02',
    icon: 'bi-person-heart',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    title: 'Trouvez un coach',
    description: 'Parcourez les profils de nos coachs certifi\u00e9s et choisissez celui qui correspond &agrave; vos besoins.',
  },
  {
    number: '03',
    icon: 'bi-calendar-check',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    title: 'R\u00e9servez votre programme',
    description: 'S\u00e9lectionnez votre programme, choisissez vos cr\u00e9neaux et r\u00e9servez en quelques clics.',
  },
  {
    number: '04',
    icon: 'bi-trophy',
    iconBg: 'var(--color-success-light)',
    iconColor: 'var(--color-success)',
    title: 'Commencez votre transformation',
    description: 'Suivez les cours, suivez vos progr\u00e8s et atteignez vos objectifs grace &agrave; un suivi personnalis\u00e9.',
  },
];

function HowItWorks() {
  return (
    <section className="pl-how-it-works" aria-label="Comment \u00e7a marche">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-lightning-charge-fill" />
            Simple et rapide
          </div>
          <h2 className="pl-section-title">
            Votre programme en 4 &eacute;tapes
          </h2>
          <p className="pl-section-subtitle">
            Un parcours simple pour d\u00e9marrer votre transformation avec SmartGym.
          </p>
        </div>

        <div className="position-relative">
          <div className="pl-step-connector" />
          <div className="row g-4">
            {stepsData.map((step) => (
              <div key={step.number} className="col-12 col-md-6 col-lg-3">
                <div className="pl-step-card">
                  <div className="pl-step-number">{step.number}</div>
                  <div className="pl-step-icon" style={{ backgroundColor: step.iconBg }}>
                    <i className={`bi ${step.icon}`} style={{ color: step.iconColor, fontSize: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <h3 className="pl-step-title">{step.title}</h3>
                  <p className="pl-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

const benefitsData = [
  {
    icon: 'bi-patch-check',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    title: 'Coachs certifi\u00e9s',
    description: 'Tous nos programmes sont con\u00e7us par des professionnels qualifi\u00e9s et certifi\u00e9s.',
  },
  {
    icon: 'bi-sliders',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    title: 'Programmes personnalis\u00e9s',
    description: 'Chaque programme est adapt\u00e9 &agrave; votre niveau et vos objectifs sp\u00e9cifiques.',
  },
  {
    icon: 'bi-calendar-check',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    title: 'R\u00e9servation simple',
    description: 'R\u00e9servez votre programme en quelques clics, o&ugrave; que vous soyez.',
  },
  {
    icon: 'bi-shield-lock',
    iconBg: 'var(--color-success-light)',
    iconColor: 'var(--color-success)',
    title: 'Paiement s\u00e9curis\u00e9',
    description: 'Transactions 100% s\u00e9curis\u00e9es via Mobile Money et cartes bancaires.',
  },
  {
    icon: 'bi-graph-up-arrow',
    iconBg: 'var(--color-warning-light)',
    iconColor: 'var(--color-warning)',
    title: 'Suivi des progr\u00e8s',
    description: 'Visualisez votre &eacute;volution et restez motiv\u00e9 tout au long du programme.',
  },
  {
    icon: 'bi-headset',
    iconBg: '#F3E8FF',
    iconColor: '#8B5CF6',
    title: 'Assistance d\u00e9di\u00e9e',
    description: 'Notre &eacute;quipe est disponible pour vous accompagner &agrave; chaque &eacute;tape.',
  },
];

function ProgramsBenefits() {
  return (
    <section className="pl-benefits" aria-label="B\u00e9n\u00e9fices des programmes">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-star-fill" />
            B\u00e9n\u00e9fices
          </div>
          <h2 className="pl-section-title">
            Pourquoi choisir nos programmes&nbsp;?
          </h2>
          <p className="pl-section-subtitle">
            Tout ce dont vous avez besoin pour r\u00e9ussir votre transformation, rassembl\u00e9 en un seul endroit.
          </p>
        </div>

        <div className="row g-4">
          {benefitsData.map((b) => (
            <div key={b.title} className="col-12 col-sm-6 col-lg-4">
              <div className="pl-benefit-card">
                <div className="pl-benefit-icon" style={{ backgroundColor: b.iconBg }}>
                  <i className={`bi ${b.icon}`} style={{ color: b.iconColor, fontSize: '1.4rem' }} aria-hidden="true" />
                </div>
                <h3 className="pl-benefit-title">{b.title}</h3>
                <p className="pl-benefit-description">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsBenefits;

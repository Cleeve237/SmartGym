const whyData = [
  { icon: 'bi-patch-check', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', title: 'Coachs v\u00e9rifi\u00e9s', text: 'Chaque coach est minutieusement s\u00e9lectionn\u00e9 et certifi\u00e9.' },
  { icon: 'bi-shield-lock', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: 'Paiement s\u00e9curis\u00e9', text: 'Transactions prot\u00e9g\u00e9es via Mobile Money et cartes bancaires.' },
  { icon: 'bi-sliders', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: 'Programmes adapt\u00e9s', text: 'Des programmes sur mesure pour chaque objectif et chaque niveau.' },
  { icon: 'bi-headset', iconBg: 'var(--color-success-light)', iconColor: 'var(--color-success)', title: 'Support client', text: 'Une \u00e9quipe d\u00e9di\u00e9e pour r\u00e9pondre &agrave; toutes vos questions.' },
  { icon: 'bi-phone', iconBg: 'var(--color-warning-light)', iconColor: 'var(--color-warning)', title: 'Interface simple', text: 'Une application intuitive, con&ccedil;ue pour tous les utilisateurs.' },
  { icon: 'bi-graph-up-arrow', iconBg: '#F3E8FF', iconColor: '#8B5CF6', title: 'Suivi personnalis\u00e9', text: 'Visualisez vos progr\u00e8s et restez motiv\u00e9 tout au long du parcours.' },
];

function WhyChooseUs() {
  return (
    <section className="ab-why" aria-label="Pourquoi SmartGym">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-trophy-fill" />
            Avantages
          </div>
          <h2 className="ab-section-title">
            Pourquoi choisir SmartGym&nbsp;?
          </h2>
          <p className="ab-section-subtitle">
            Tout ce dont vous avez besoin pour r\u00e9ussir, rassembl\u00e9 en une seule plateforme.
          </p>
        </div>

        <div className="row g-4">
          {whyData.map((w) => (
            <div key={w.title} className="col-12 col-sm-6 col-lg-4">
              <div className="ab-why-card">
                <div className="ab-why-icon" style={{ backgroundColor: w.iconBg }}>
                  <i className={`bi ${w.icon}`} style={{ color: w.iconColor, fontSize: '1.2rem' }} aria-hidden="true" />
                </div>
                <h3 className="ab-why-title">{w.title}</h3>
                <p className="ab-why-text">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

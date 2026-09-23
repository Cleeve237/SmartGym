const valuesData = [
  { icon: 'bi-award', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', title: 'Professionnalisme', description: 'Nous exigeons le plus haut niveau d&apos;exigence de la part de nos coachs et dans nos services.' },
  { icon: 'bi-shield-check', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: 'Confiance', description: 'Chaque coach est v\u00e9rifi\u00e9, chaque paiement est s\u00e9curis\u00e9, chaque donn\u00e9e est prot\u00e9g\u00e9e.' },
  { icon: 'bi-universal-access', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: 'Accessibilit\u00e9', description: 'Le sport ne devrait &ecirc;tre un privil&egrave;ge. Notre plateforme est con&ccedil;ue pour tous.' },
  { icon: 'bi-lightbulb', iconBg: 'var(--color-warning-light)', iconColor: 'var(--color-warning)', title: 'Innovation', description: 'Nous cherchons constamment &agrave; am\u00e9liorer l&apos;exp\u00e9rience utilisateur avec de nouvelles fonctionnalit\u00e9s.' },
  { icon: 'bi-people', iconBg: 'var(--color-success-light)', iconColor: 'var(--color-success)', title: 'Communaut\u00e9', description: 'Nous cultivons un esprit d&apos;entraide et de partage entre athl&egrave;tes et coachs.' },
  { icon: 'bi-heart-pulse', iconBg: '#F3E8FF', iconColor: '#8B5CF6', title: 'Bien-\u00eatre', description: 'Notre objectif ultime est la sant\u00e9 et le bien-\u00eatre de chaque utilisateur.' },
];

function ValuesSection() {
  return (
    <section className="ab-values" aria-label="Nos valeurs">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-gem" />
            Nos valeurs
          </div>
          <h2 className="ab-section-title">
            Ce qui nous anime
          </h2>
          <p className="ab-section-subtitle">
            Six piliers qui guident chaque d\u00e9cision chez SmartGym.
          </p>
        </div>

        <div className="row g-4">
          {valuesData.map((v) => (
            <div key={v.title} className="col-12 col-sm-6 col-lg-4">
              <div className="ab-value-card">
                <div className="ab-value-icon" style={{ backgroundColor: v.iconBg }}>
                  <i className={`bi ${v.icon}`} style={{ color: v.iconColor, fontSize: '1.4rem' }} aria-hidden="true" />
                </div>
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-description">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;

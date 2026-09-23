const problemsData = [
  {
    icon: 'bi-search',
    title: 'Trouver un coach fiable',
    description: 'Peu de sources fiables pour identifier un coach qualifi\u00e9, pr\u00e8s de chez soi et disponible.',
  },
  {
    icon: 'bi-calendar-x',
    title: 'Organisation compliqu\u00e9e',
    description: 'Les r\u00e9servations se font par SMS ou appel, sans organisation ni tra\u00e7abilit\u00e9.',
  },
  {
    icon: 'bi-eye-slash',
    title: 'Peu de visibilit\u00e9 pour les coachs',
    description: 'Les coachs peinent &agrave; attirer de nouveaux clients sans outil de promotion.',
  },
  {
    icon: 'bi-graph-down-arrow',
    title: 'Manque de suivi sportif',
    description: 'Aucun moyen de visualiser ses progr\u00e8s ni de suivre son \u00e9volution sur le long terme.',
  },
];

function ProblemSection() {
  return (
    <section className="ab-problem" aria-label="Le probl\u00e8me">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-exclamation-triangle-fill" />
            Le d\u00e9fi
          </div>
          <h2 className="ab-section-title">
            Le probl&egrave;me que nous r\u00e9solvons
          </h2>
          <p className="ab-section-subtitle">
            Nous avons identifi\u00e9 les obstacles qui emp&ecirc;chent les Camerounais
            de s&apos;entra&icirc;ner efficacement.
          </p>
        </div>

        <div className="row g-4">
          {problemsData.map((p) => (
            <div key={p.title} className="col-12 col-sm-6 col-lg-3">
              <div className="ab-problem-card">
                <div className="ab-problem-icon">
                  <i className={`bi ${p.icon}`} aria-hidden="true" />
                </div>
                <h3 className="ab-problem-title">{p.title}</h3>
                <p className="ab-problem-description">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;

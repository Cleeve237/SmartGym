const timelineData = [
  { year: '2025', title: 'Id\u00e9e du projet', text: 'Le constat est fait&thinsp;: il manque une plateforme pour connecter athl\u00e8tes et coachs au Cameroun.' },
  { year: '2025', title: 'Conception & design', text: 'Les premiers maquettes et l&apos;architecture technique sont d\u00e9finies par l&apos;\u00e9quipe fondatrice.' },
  { year: '2026', title: 'D\u00e9veloppement SmartGym', text: 'La plateforme est construite avec les technologies modernes&nbsp;: React, Node.js et les meilleures pratiques.' },
  { year: '2026', title: 'Lancement de la plateforme', text: 'SmartGym est officiellement lanc\u00e9 &agrave; Yaound\u00e9 avec les premiers coachs et utilisateurs.' },
  { year: 'Futur', title: 'Expansion nationale', text: 'L&apos;objectif est de couvrir toutes les grandes villes du Cameroun puis de s&apos;\u00e9tendre en Afrique centrale.' },
];

function TimelineSection() {
  return (
    <section className="ab-timeline" aria-label="Notre parcours">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-clock-history" />
            Parcours
          </div>
          <h2 className="ab-section-title">
            Notre chronologie
          </h2>
          <p className="ab-section-subtitle">
            Les \u00e9tapes cl\u00e9s qui ont façonn\u00e9 SmartGym.
          </p>
        </div>

        <div className="ab-timeline-container">
          <div className="ab-timeline-line" aria-hidden="true" />
          {timelineData.map((item, i) => (
            <div key={i} className="ab-timeline-item">
              <div className="ab-timeline-dot" aria-hidden="true">
                <i className="bi bi-circle-fill" />
              </div>
              <span className="ab-timeline-year">{item.year}</span>
              <h3 className="ab-timeline-title">{item.title}</h3>
              <p className="ab-timeline-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;

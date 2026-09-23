const popularData = [
  { icon: 'bi-person-plus', question: 'Comment cr\u00e9er un compte SmartGym ?', link: '#fq-cat-compte' },
  { icon: 'bi-calendar-check', question: 'Comment r\u00e9server une s\u00e9ance ?', link: '#fq-cat-reservations' },
  { icon: 'bi-credit-card', question: 'Quels moyens de paiement accept\u00e9s ?', link: '#fq-cat-paiements' },
  { icon: 'bi-person-workspace', question: 'Comment devenir coach ?', link: '#fq-cat-coachs' },
  { icon: 'bi-shield-lock', question: 'Mes donn\u00e9es sont-elles prot\u00e9g\u00e9es ?', link: '#fq-cat-securite' },
  { icon: 'bi-headset', question: 'Comment contacter le support ?', link: '#fq-cat-support' },
];

function PopularQuestions() {
  return (
    <section className="fq-popular" aria-label="Questions populaires">
      <div className="container">
        <div className="fq-section-header">
          <div className="fq-section-badge">
            <i className="bi bi-fire" />
            Populaires
          </div>
          <h2 className="fq-section-title">
            Les questions les plus pos\u00e9es
          </h2>
          <p className="fq-section-subtitle">
            Les r\u00e9ponses que nos utilisateurs consultent le plus souvent.
          </p>
        </div>

        <div className="row g-4">
          {popularData.map((p) => (
            <div key={p.question} className="col-12 col-sm-6 col-lg-4">
              <div className="fq-popular-card">
                <div className="fq-popular-icon">
                  <i className={`bi ${p.icon}`} aria-hidden="true" />
                </div>
                <p className="fq-popular-question">{p.question}</p>
                <a href={p.link} className="fq-popular-link">
                  Voir la r\u00e9ponse
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularQuestions;

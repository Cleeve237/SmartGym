import { Link } from 'react-router-dom';

const testimonialsData = [
  {
    name: 'Clarisse Noubissi',
    city: 'Yaound\u00e9',
    program: 'Perte de poids',
    text: 'SmartGym m&apos;a permis de trouver un coach adapt\u00e9 &agrave; mes objectifs. En 3 mois, j&apos;ai r\u00e9alis\u00e9 une transformation incroyable.',
    rating: 5,
    color: 'var(--color-primary)',
  },
  {
    name: 'Franck Fotso',
    city: 'Douala',
    program: 'Musculation',
    text: 'Le suivi est excellent et le paiement mobile est tr\u00e8s pratique. Je recommande vivement la plateforme &agrave; tous les sportifs.',
    rating: 5,
    color: 'var(--color-info)',
  },
  {
    name: 'Amina Bello',
    city: 'Bamenda',
    program: 'Yoga',
    text: 'Le coach SmartGym m&apos;a mise a l&apos;aise d\u00e8s le premier jour. Le sport fait maintenant partie de ma vie quotidienne.',
    rating: 5,
    color: '#8B5CF6',
  },
];

function TestimonialsPreview() {
  return (
    <section className="ab-testimonials" aria-label="T\u00e9moignages">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-chat-heart" />
            T\u00e9moignages
          </div>
          <h2 className="ab-section-title">
            Ce que disent nos utilisateurs
          </h2>
          <p className="ab-section-subtitle">
            Des r\u00e9sultats concrets partag\u00e9s par ceux qui ont transform\u00e9 leur vie.
          </p>
        </div>

        <div className="row g-4">
          {testimonialsData.map((t) => (
            <div key={t.name} className="col-12 col-md-4">
              <div className="ab-testimonial-card">
                <div className="ab-testimonial-quote">&ldquo;</div>
                <div className="ab-testimonial-stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className={`bi ${i < t.rating ? 'bi-star-fill' : 'bi-star'}`} />
                  ))}
                </div>
                <p className="ab-testimonial-text">{t.text}</p>
                <div className="ab-testimonial-author">
                  <div className="ab-testimonial-avatar" style={{ backgroundColor: t.color }}>
                    <i className="bi bi-person-fill" />
                  </div>
                  <div>
                    <div className="ab-testimonial-name">{t.name}</div>
                    <div className="ab-testimonial-info">{t.city} &middot; {t.program}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            to="/coaches"
            className="btn btn-outline-primary"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            Voir plus de t\u00e9moignages
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPreview;

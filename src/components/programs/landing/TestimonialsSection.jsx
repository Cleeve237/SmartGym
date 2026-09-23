const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Djomo',
    city: 'Yaound\u00e9',
    program: 'Perte de Poids Express',
    text: 'Gr\u00e2ce &agrave; ce programme, j\'ai perdu 8 kg en 6 semaines. Mon coach m\'a motiv\u00e9e &agrave; chaque s\u00e9ance. Je recommande vivement !',
    rating: 5,
    color: 'var(--color-primary)',
  },
  {
    id: 2,
    name: 'Paul Tchinda',
    city: 'Bafoussam',
    program: 'Musculation Fondamentale',
    text: 'Un programme tr\u00e8s bien structur\u00e9. J\'ai gagn\u00e9 6 kg de muscle en 8 semaines. La qualit\u00e9 d\'accompagnement est exceptionnelle.',
    rating: 5,
    color: 'var(--color-info)',
  },
  {
    id: 3,
    name: 'Marie Kamga',
    city: 'Douala',
    program: 'Yoga & Flexibilit\u00e9',
    text: 'Ce programme a chang\u00e9 ma vie. Je dors mieux, je suis moins stress\u00e9e et ma flexibilit\u00e9 s\'est consid\u00e9rablement am\u00e9lior\u00e9e.',
    rating: 5,
    color: '#8B5CF6',
  },
  {
    id: 4,
    name: 'David Njoku',
    city: 'Yaound\u00e9',
    program: 'CrossFit Challenge',
    text: 'Le meilleur programme que j\'ai jamais suivi. Intense, motivant et les r\u00e9sultats parlent d\'eux-m\u00eames.',
    rating: 4,
    color: 'var(--color-accent)',
  },
  {
    id: 5,
    name: 'Fatima Bello',
    city: 'Maroua',
    program: 'Nutrition & Bien-\u00eatre',
    text: 'J\'ai enfin compris comment manger sainement. Les conseils nutritionnels sont pratiques et faciles &agrave; appliquer.',
    rating: 5,
    color: 'var(--color-warning)',
  },
];

function TestimonialsSection() {
  return (
    <section className="pl-testimonials" aria-label="T\u00e9moignages">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-chat-heart" />
            T\u00e9moignages
          </div>
          <h2 className="pl-section-title">
            Ce que disent nos athl&egrave;tes
          </h2>
          <p className="pl-section-subtitle">
            Des r\u00e9sultats concrets, partag\u00e9s par ceux qui ont transform\u00e9 leur vie avec SmartGym.
          </p>
        </div>

        <div className="row g-4">
          {testimonialsData.map((t) => (
            <div key={t.id} className="col-12 col-md-6 col-lg-4">
              <div className="pl-testimonial-card">
                <div className="pl-testimonial-quote">&ldquo;</div>
                <div className="pl-testimonial-stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className={`bi ${i < t.rating ? 'bi-star-fill' : 'bi-star'}`} />
                  ))}
                </div>
                <p className="pl-testimonial-text">{t.text}</p>
                <div className="pl-testimonial-author">
                  <div className="pl-testimonial-avatar" style={{ backgroundColor: t.color }}>
                    <i className="bi bi-person-fill" />
                  </div>
                  <div>
                    <div className="pl-testimonial-name">{t.name}</div>
                    <div className="pl-testimonial-info">{t.city} &middot; {t.program}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

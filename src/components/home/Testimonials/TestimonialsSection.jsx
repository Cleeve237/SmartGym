import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: 'Clarisse Noubissi',
    city: 'Yaounde',
    goal: 'Perte de poids',
    message:
      "Grace a SmartGym, j'ai trouve un coach adapte a mes objectifs et j'ai enfin reussi a rester reguliere. Ma transformation a ete incroyable en 3 mois !",
    rating: 5,
    photo: null,
    avatarClass: 'testimonial-avatar-1',
  },
  {
    id: 2,
    name: 'Franck Fotso',
    city: 'Douala',
    goal: 'Prise de masse',
    message:
      'Le systeme de reservation est simple et mon coach suit parfaitement mon evolution. Je recommande a tous ceux qui veulent progresser serieusement.',
    rating: 5,
    photo: null,
    avatarClass: 'testimonial-avatar-2',
  },
  {
    id: 3,
    name: 'Amina Bello',
    city: 'Bamenda',
    goal: 'Bien-etre',
    message:
      "J'avais peur de commencer le sport, mais mon coach SmartGym m'a mise a l'aise des le premier jour. Aujourd'hui, le sport fait partie de ma vie.",
    rating: 5,
    photo: null,
    avatarClass: 'testimonial-avatar-3',
  },
  {
    id: 4,
    name: 'Paul Tchinda',
    city: 'Bafoussam',
    goal: 'Musculation',
    message:
      "Enfin une plateforme qui fonctionne au Cameroun ! J'ai trouve un coach disponible pres de chez moi, et le paiement mobile est tres pratique.",
    rating: 4,
    photo: null,
    avatarClass: 'testimonial-avatar-4',
  },
  {
    id: 5,
    name: 'Sarah Djomo',
    city: 'Yaounde',
    goal: 'Cardio',
    message:
      "SmartGym m'a permise de retrouver motivation et regularite. Mon coach est a l'ecoute et s'adapte a mon emploi du temps charge.",
    rating: 5,
    photo: null,
    avatarClass: 'testimonial-avatar-5',
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-label="Temoignages clients">
      <div className="container">

        {/* En-tete */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <i className="bi bi-chat-heart" />
            Temoignages
          </div>
          <h2 className="testimonials-title">
            Ce que nos clients disent de SmartGym
          </h2>
          <p className="testimonials-subtitle">
            Decouvrez les experiences de personnes accompagnees par nos coachs.
          </p>
        </div>

        {/* Carousel Bootstrap */}
        <div
          id="testimonialsCarousel"
          className="carousel slide testimonials-carousel"
          data-bs-ride="false"
          data-bs-interval="false"
        >
          <div className="testimonials-indicators">
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide-to="0"
              className="testimonials-indicator active"
              aria-label="Page 1"
            />
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide-to="1"
              className="testimonials-indicator"
              aria-label="Page 2"
            />
          </div>

          <div className="carousel-inner">

            {/* Slide 1 — 3 cartes desktop */}
            <div className="carousel-item active">
              <div className="testimonials-items">
                {testimonialsData.slice(0, 3).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    name={testimonial.name}
                    city={testimonial.city}
                    goal={testimonial.goal}
                    message={testimonial.message}
                    rating={testimonial.rating}
                    photo={testimonial.photo}
                    avatarClass={testimonial.avatarClass}
                  />
                ))}
              </div>
            </div>

            {/* Slide 2 — 2 cartes desktop */}
            <div className="carousel-item">
              <div className="testimonials-items">
                {testimonialsData.slice(3, 5).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    name={testimonial.name}
                    city={testimonial.city}
                    goal={testimonial.goal}
                    message={testimonial.message}
                    rating={testimonial.rating}
                    photo={testimonial.photo}
                    avatarClass={testimonial.avatarClass}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Controls */}
          <div className="testimonials-controls">
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev"
              className="testimonials-control-btn"
              aria-label="Precedent"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="next"
              className="testimonials-control-btn"
              aria-label="Suivant"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;

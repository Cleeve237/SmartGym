import './Hero.css';
import HeroButtons from './HeroButtons';
import HeroSearch from './HeroSearch';
import HeroStatsCard from './HeroStatsCard';

const trustItems = [
  { icon: 'bi-patch-check-fill', text: 'Coachs certifies' },
  { icon: 'bi-shield-lock-fill', text: 'Paiement securise' },
  { icon: 'bi-lightning-charge-fill', text: 'Reservation rapide' },
];

function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero SmartGym">
      <div className="container hero-inner">
        <div className="row align-items-center min-vh-100 py-5">

          {/* ══ Colonne gauche 55% ══ */}
          <div className="col-lg-6 py-lg-5">

            {/* Badge */}
            <div className="hero-badge mb-4">
              <i className="bi bi-trophy-fill" />
              <span>Plateforme N&deg;1 au Cameroun</span>
            </div>

            {/* Titre */}
            <h1 className="hero-title mb-4">
              Trouvez le coach sportif{' '}
              <span className="hero-title-accent">parfait</span>{' '}
              pres de chez vous.
            </h1>

            {/* Paragraphe */}
            <p className="hero-subtitle mb-5">
              Connectez-vous avec des coachs certifies, reservez vos seances
              en quelques clics et atteignez vos objectifs sportifs.
            </p>

            {/* Boutons */}
            <HeroButtons />

            {/* Trust Line */}
            <div className="hero-trust mb-5">
              {trustItems.map((item) => (
                <div key={item.text} className="hero-trust-item">
                  <span className="hero-trust-icon">
                    <i className={`bi ${item.icon}`} />
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Formulaire de recherche */}
            <HeroSearch />
          </div>

          {/* ══ Colonne droite 45% ══ */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <i className="bi bi-person-standing-dress hero-image-silhouette" />

                {/* Carte flottante — Note */}
                <HeroStatsCard
                  icon="bi-star-fill"
                  iconBg="var(--color-warning-light)"
                  iconColor="var(--color-warning)"
                  value="4.9/5"
                  label="Plus de 120 avis"
                  position="rating"
                />

                {/* Carte flottante — Ville */}
                <HeroStatsCard
                  icon="bi-geo-alt-fill"
                  iconBg="var(--color-info-light)"
                  iconColor="var(--color-info)"
                  value="Yaounde"
                  label="25 coachs disponibles"
                  position="location"
                />

                {/* Carte flottante — Seances */}
                <HeroStatsCard
                  icon="bi-fire"
                  iconBg="var(--color-accent-lighter)"
                  iconColor="var(--color-accent)"
                  value="+500 seances"
                  label="Cette semaine"
                  position="sessions"
                />
              </div>

              <div className="hero-dots" />
            </div>

            {/* Cartes mobile (visibles uniquement en mobile) */}
            <div className="hero-float-cards-mobile d-lg-none">
              <HeroStatsCard
                icon="bi-star-fill"
                iconBg="var(--color-warning-light)"
                iconColor="var(--color-warning)"
                value="4.9/5"
                label="Plus de 120 avis"
                position="mobile"
              />
              <HeroStatsCard
                icon="bi-geo-alt-fill"
                iconBg="var(--color-info-light)"
                iconColor="var(--color-info)"
                value="Yaounde"
                label="25 coachs disponibles"
                position="mobile"
              />
              <HeroStatsCard
                icon="bi-fire"
                iconBg="var(--color-accent-lighter)"
                iconColor="var(--color-accent)"
                value="+500 seances"
                label="Cette semaine"
                position="mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

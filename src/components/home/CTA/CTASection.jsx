import './CTA.css';
import CTAContent from './CTAContent';

function CTASection() {
  return (
    <section className="cta-section" aria-label="Commencer avec SmartGym">
      <div className="container">
        <div className="cta-card">

          {/* Carte statistiques flottante */}
          <div className="cta-floating cta-floating--top">
            <div className="cta-floating-stat">
              <div className="cta-floating-stat-icon cta-floating-stat-icon--green">
                <i className="bi bi-trophy" />
              </div>
              <div className="cta-floating-stat-text">
                <span className="cta-floating-stat-value">5000+</span>
                <span className="cta-floating-stat-label">Seances realisees</span>
              </div>
            </div>
            <div className="cta-floating-stat">
              <div className="cta-floating-stat-icon cta-floating-stat-icon--blue">
                <i className="bi bi-person-check" />
              </div>
              <div className="cta-floating-stat-text">
                <span className="cta-floating-stat-value">250+</span>
                <span className="cta-floating-stat-label">Coachs disponibles</span>
              </div>
            </div>
          </div>

          {/* Decorations */}
          <div className="cta-blob cta-blob--1" aria-hidden="true" />
          <div className="cta-blob cta-blob--2" aria-hidden="true" />
          <div className="cta-blob cta-blob--3" aria-hidden="true" />
          <div className="cta-blob cta-blob--4" aria-hidden="true" />

          <i className="bi bi-dumbbell cta-icon-decor cta-icon-decor--1" aria-hidden="true" />
          <i className="bi bi-heart-pulse cta-icon-decor cta-icon-decor--2" aria-hidden="true" />
          <i className="bi bi-lightning cta-icon-decor cta-icon-decor--3" aria-hidden="true" />
          <i className="bi bi-trophy cta-icon-decor cta-icon-decor--4" aria-hidden="true" />
          <i className="bi bi-activity cta-icon-decor cta-icon-decor--5" aria-hidden="true" />

          {/* Contenu */}
          <CTAContent />
        </div>
      </div>
    </section>
  );
}

export default CTASection;

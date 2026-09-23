import { Link } from 'react-router-dom';

const trustItems = [
  { icon: 'bi-patch-check-fill', text: 'Coachs certifies' },
  { icon: 'bi-shield-lock-fill', text: 'Paiement securise' },
  { icon: 'bi-lightning-charge-fill', text: 'Reservation rapide' },
];

const floatCards = [
  { icon: 'bi-fire', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: '500+', sub: 'Programmes actifs', pos: '1' },
  { icon: 'bi-star-fill', iconBg: 'var(--color-warning-light)', iconColor: 'var(--color-warning)', title: '4.9/5', sub: 'Note moyenne', pos: '2' },
  { icon: 'bi-people-fill', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: '12K+', sub: 'Utilisateurs', pos: '3' },
];

function ProgramsHero() {
  return (
    <section className="pl-hero" aria-label="Programmes SmartGym">
      <div className="container pl-hero-inner">
        <div className="row align-items-center py-5">

          {/* Colonne gauche */}
          <div className="col-lg-6 py-lg-5">
            <div className="pl-hero-badge mb-4">
              <i className="bi bi-trophy-fill" />
              <span>Programmes premium</span>
            </div>

            <h1 className="pl-hero-title mb-4">
              Transformez votre forme physique avec{' '}
              <span className="pl-hero-title-accent">SmartGym</span>
            </h1>

            <p className="pl-hero-subtitle mb-5">
              D&eacute;couvrez des programmes con&ccedil;us par des coachs qualifi&eacute;s pour atteindre
              vos objectifs, &agrave; votre rythme.
            </p>

            <div className="pl-hero-buttons mb-5">
              <Link
                to="/programs/catalogue"
                className="btn btn-primary btn-lg px-5 py-3 me-2"
                style={{ fontWeight: 'var(--font-weight-semibold)' }}
              >
                <i className="bi bi-grid me-2" />
                D&eacute;couvrir les programmes
              </Link>
              <Link
                to="/coaches"
                className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-white)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                Trouver un coach
                <i className="bi bi-arrow-right" />
              </Link>
            </div>

            <div className="pl-hero-trust">
              {trustItems.map((item) => (
                <div key={item.text} className="pl-hero-trust-item">
                  <span className="pl-hero-trust-icon">
                    <i className={`bi ${item.icon}`} />
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — visuel placeholder */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="pl-hero-visual">
              <div className="pl-hero-visual-box">
                <i className="bi bi-activity" />

                {floatCards.map((c) => (
                  <div key={c.pos} className={`pl-hero-float-card pl-hero-float-card--${c.pos}`}>
                    <div className="pl-hero-float-icon" style={{ backgroundColor: c.iconBg }}>
                      <i className={`bi ${c.icon}`} style={{ color: c.iconColor, fontSize: '0.95rem' }} />
                    </div>
                    <div className="pl-hero-float-text">
                      <strong>{c.title}</strong>
                      <span>{c.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsHero;

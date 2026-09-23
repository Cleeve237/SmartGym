import { Link } from 'react-router-dom';

const floatCards = [
  { icon: 'bi-people-fill', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: '500+', sub: 'Coachs certifi\u00e9s', pos: '1' },
  { icon: 'bi-graph-up', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: '3 000+', sub: 'Clients actifs', pos: '2' },
  { icon: 'bi-geo-alt-fill', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', title: '15+', sub: 'Villes couvertes', pos: '3' },
];

function AboutHero() {
  return (
    <section className="ab-hero" aria-label="A propos de SmartGym">
      <div className="container ab-hero-inner">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 py-lg-5">
            <div className="ab-hero-badge mb-4">
              <i className="bi bi-heart-fill" />
              <span>Notre histoire</span>
            </div>

            <h1 className="ab-hero-title mb-4">
              &Agrave; propos de{' '}
              <span className="ab-hero-title-accent">SmartGym</span>
            </h1>

            <p className="ab-hero-subtitle mb-5">
              Notre mission est de rendre le coaching sportif accessible &agrave; tous,
              partout au Cameroun.
            </p>

            <div className="ab-hero-buttons mb-5">
              <Link
                to="/coaches"
                className="btn btn-primary btn-lg px-5 py-3 me-2"
                style={{ fontWeight: 'var(--font-weight-semibold)' }}
              >
                <i className="bi bi-search me-2" />
                Trouver un coach
              </Link>
              <Link
                to="/programs"
                className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-white)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                D&eacute;couvrir nos programmes
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="ab-hero-visual">
              <div className="ab-hero-visual-box">
                <i className="bi bi-people-fill" />
                {floatCards.map((c) => (
                  <div key={c.pos} className={`ab-hero-float ab-hero-float--${c.pos}`}>
                    <div className="ab-hero-float-icon" style={{ backgroundColor: c.iconBg }}>
                      <i className={`bi ${c.icon}`} style={{ color: c.iconColor, fontSize: '0.9rem' }} />
                    </div>
                    <div className="ab-hero-float-text">
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

export default AboutHero;

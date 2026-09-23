import { Link } from 'react-router-dom';

function AboutCTA() {
  return (
    <section className="ab-cta" aria-label="Rejoignez SmartGym">
      <div className="container">
        <div className="ab-cta-card">
          <h2 className="ab-cta-title">
            Rejoignez la communaut&eacute; SmartGym d&egrave;s aujourd&apos;hui
          </h2>
          <p className="ab-cta-subtitle">
            Que vous soyez athl&egrave;te ou coach, SmartGym est la plateforme
            faite pour vous accompagner vers vos objectifs.
          </p>
          <div className="ab-cta-buttons">
            <Link
              to="/coaches"
              className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-primary)',
                fontWeight: 'var(--font-weight-semibold)',
              }}
            >
              <i className="bi bi-search" />
              Trouver un coach
            </Link>
            <Link
              to="/register"
              className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-white)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Cr\u00e9er un compte
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;

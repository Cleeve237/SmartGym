import { Link } from 'react-router-dom';

function ProgramsCTA() {
  return (
    <section className="pl-cta" aria-label="Votre transformation">
      <div className="container">
        <div className="pl-cta-card">
          <div className="pl-cta-title">
            Votre transformation commence aujourd&apos;hui
          </div>
          <p className="pl-cta-subtitle">
            Rejoignez des milliers d&apos;utilisateurs qui ont d&eacute;j&agrave; chang&eacute; leur vie gr&acirc;ce &agrave; SmartGym.
          </p>
          <div className="pl-cta-buttons">
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
              to="/programs/catalogue"
              className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-white)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Voir les programmes
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <div className="pl-cta-stats">
            <div className="pl-cta-stat">
              <div className="pl-cta-stat-value">12 000+</div>
              <div className="pl-cta-stat-label">Utilisateurs actifs</div>
            </div>
            <div className="pl-cta-stat">
              <div className="pl-cta-stat-value">250+</div>
              <div className="pl-cta-stat-label">Coachs certifi&eacute;s</div>
            </div>
            <div className="pl-cta-stat">
              <div className="pl-cta-stat-value">4.9/5</div>
              <div className="pl-cta-stat-label">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsCTA;

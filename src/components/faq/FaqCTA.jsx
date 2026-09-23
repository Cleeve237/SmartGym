import { Link } from 'react-router-dom';

function FaqCTA() {
  return (
    <section className="fq-cta" aria-label="Commencer avec SmartGym">
      <div className="container">
        <div className="fq-cta-card">
          <h2 className="fq-cta-title">
            Commencez votre aventure sportive avec SmartGym
          </h2>
          <p className="fq-cta-subtitle">
            Rejoignez des milliers d&apos;utilisateurs qui ont d&eacute;j&agrave; transform&eacute; leur vie.
          </p>
          <div className="fq-cta-buttons">
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

export default FaqCTA;

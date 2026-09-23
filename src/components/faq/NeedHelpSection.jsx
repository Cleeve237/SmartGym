import { Link } from 'react-router-dom';

function NeedHelpSection() {
  return (
    <section className="fq-help" aria-label="Besoin d&apos;aide">
      <div className="container">
        <div className="fq-section-header">
          <div className="fq-section-badge">
            <i className="bi bi-life-preserver" />
            Assistance
          </div>
          <h2 className="fq-section-title">
            Vous ne trouvez pas votre r\u00e9ponse ?
          </h2>
          <p className="fq-section-subtitle">
            Notre \u00e9quipe est l&agrave; pour vous accompagner personnellement.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="fq-help-card">
              <div className="fq-help-icon">
                <i className="bi bi-headset" />
              </div>
              <h3 className="fq-help-title">Nous sommes l&agrave; pour vous</h3>
              <p className="fq-help-text">
                Si vous n&apos;avez pas trouv\u00e9 la r\u00e9ponse &agrave; votre question,
                n&apos;h\u00e9sitez pas &agrave; contacter directement notre \u00e9quipe de support.
              </p>
              <div className="fq-help-buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary px-4 py-2"
                  style={{ fontWeight: 'var(--font-weight-semibold)' }}
                >
                  <i className="bi bi-envelope me-2" />
                  Contacter le support
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-primary px-4 py-2"
                  style={{ fontWeight: 'var(--font-weight-semibold)' }}
                >
                  Voir la page Contact
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeedHelpSection;

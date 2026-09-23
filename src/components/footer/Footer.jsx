function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-activity fs-4" style={{ color: 'var(--color-primary)' }} />
              <span className="fw-bold fs-5">SmartGym</span>
            </div>
            <p className="text-white-50 mb-4" style={{ maxWidth: '320px', lineHeight: '1.7' }}>
              La plateforme de reference pour trouver votre coach sportif
              au Cameroun. Transformez votre corps, atteignez vos objectifs.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 fs-5" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="Twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="YouTube">
                <i className="bi bi-youtube" />
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="TikTok">
                <i className="bi bi-tiktok" />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-semibold mb-3 text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.8rem' }}>
              Navigation
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="/coachs" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Coachs
                </a>
              </li>
              <li className="mb-2">
                <a href="/programmes" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Programmes
                </a>
              </li>
              <li className="mb-2">
                <a href="/a-propos" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  A propos
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-semibold mb-3 text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.8rem' }}>
              Liens utiles
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/cgu" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Conditions generales
                </a>
              </li>
              <li className="mb-2">
                <a href="/politique-confidentialite" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Politique de confidentialite
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/devenir-coach" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  Devenir coach
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-semibold mb-3 text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.8rem' }}>
              Contact
            </h6>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt mt-1" style={{ color: 'var(--color-primary)' }} />
                <span className="text-white-50" style={{ fontSize: '0.9rem' }}>
                  Douala, Cameroun
                </span>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <i className="bi bi-envelope mt-1" style={{ color: 'var(--color-primary)' }} />
                <a href="mailto:contact@smartgym.cm" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  contact@smartgym.cm
                </a>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <i className="bi bi-phone mt-1" style={{ color: 'var(--color-primary)' }} />
                <a href="tel:+237600000000" className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem' }}>
                  +237 600 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mb-4" />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <small className="text-white-50">
            &copy; {currentYear} SmartGym. Tous droits reserves.
          </small>
          <small className="text-white-50">
            Propulsé avec <i className="bi bi-heart-fill" style={{ color: 'var(--color-danger)' }} /> au Cameroun
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

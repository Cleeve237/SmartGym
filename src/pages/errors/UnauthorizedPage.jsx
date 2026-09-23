import { Link } from 'react-router-dom';

function UnauthorizedPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <i
              className="bi bi-shield-lock"
              style={{
                fontSize: '6rem',
                color: 'var(--color-warning)',
                lineHeight: 1,
              }}
            />
          </div>

          <h1 className="display-1 fw-bold mb-0" style={{ color: 'var(--color-secondary)' }}>
            401
          </h1>

          <h2 className="mb-3">Non autorise</h2>

          <p className="text-muted mb-4" style={{ maxWidth: '420px', margin: '0 auto 1.5rem' }}>
            Vous devez etre connecte pour acceder a cette page.
          </p>

          <Link to="/login" className="btn btn-primary btn-lg">
            <i className="bi bi-box-arrow-in-right me-2" />
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UnauthorizedPage;

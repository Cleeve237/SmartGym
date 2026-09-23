import { Link } from 'react-router-dom';

function ForbiddenPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <i
              className="bi bi-shield-x"
              style={{
                fontSize: '6rem',
                color: 'var(--color-danger)',
                lineHeight: 1,
              }}
            />
          </div>

          <h1 className="display-1 fw-bold mb-0" style={{ color: 'var(--color-secondary)' }}>
            403
          </h1>

          <h2 className="mb-3">Acces interdit</h2>

          <p className="text-muted mb-4" style={{ maxWidth: '420px', margin: '0 auto 1.5rem' }}>
            Vous n&apos;avez pas les droits necessaires pour acceder a cette page.
          </p>

          <Link to="/" className="btn btn-primary btn-lg">
            <i className="bi bi-house me-2" />
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForbiddenPage;

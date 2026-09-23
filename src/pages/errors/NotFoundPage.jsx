import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <i
              className="bi bi-exclamation-triangle"
              style={{
                fontSize: '6rem',
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}
            />
          </div>

          <h1 className="display-1 fw-bold mb-0" style={{ color: 'var(--color-secondary)' }}>
            404
          </h1>

          <h2 className="mb-3">Page introuvable</h2>

          <p className="text-muted mb-4" style={{ maxWidth: '420px', margin: '0 auto 1.5rem' }}>
            La page que vous recherchez n&apos;existe pas ou a ete deplacee.
            Veuillez verifier l&apos;adresse ou revenir a l&apos;accueil.
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

export default NotFoundPage;

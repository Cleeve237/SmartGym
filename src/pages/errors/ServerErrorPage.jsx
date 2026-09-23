import { Link } from 'react-router-dom';

function ServerErrorPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <i
              className="bi bi-server"
              style={{
                fontSize: '6rem',
                color: 'var(--color-gray-400)',
                lineHeight: 1,
              }}
            />
          </div>

          <h1 className="display-1 fw-bold mb-0" style={{ color: 'var(--color-secondary)' }}>
            500
          </h1>

          <h2 className="mb-3">Erreur interne du serveur</h2>

          <p className="text-muted mb-4" style={{ maxWidth: '420px', margin: '0 auto 1.5rem' }}>
            Une erreur inattendue s&apos;est produite. Nos equipes ont ete notifiees.
            Veuillez reessayer plus tard.
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

export default ServerErrorPage;

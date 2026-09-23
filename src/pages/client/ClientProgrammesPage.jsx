import { Link } from 'react-router-dom';

function ClientProgrammesPage() {
  return (
    <div className="container py-5">
      <h1>Programmes</h1>
      <p className="text-muted">
        Explorez les programmes d&apos;entrainement disponibles.
      </p>
      <Link to="/client" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default ClientProgrammesPage;

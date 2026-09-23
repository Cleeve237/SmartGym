import { Link } from 'react-router-dom';

function AdminProgrammesPage() {
  return (
    <div className="container py-5">
      <h1>Gestion des programmes</h1>
      <p className="text-muted">
        Gérez les programmes d&apos;entrainement de la plateforme.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminProgrammesPage;

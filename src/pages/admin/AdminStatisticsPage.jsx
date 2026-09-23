import { Link } from 'react-router-dom';

function AdminStatisticsPage() {
  return (
    <div className="container py-5">
      <h1>Statistiques</h1>
      <p className="text-muted">
        Analysez les performances et statistiques de la plateforme.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminStatisticsPage;

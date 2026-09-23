import { Link } from 'react-router-dom';

function AdminPaymentsPage() {
  return (
    <div className="container py-5">
      <h1>Paiements</h1>
      <p className="text-muted">
        Suivez les transactions et paiements de la plateforme.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminPaymentsPage;

import { Link } from 'react-router-dom';

function AdminBookingsPage() {
  return (
    <div className="container py-5">
      <h1>Réservations</h1>
      <p className="text-muted">
        Consultez et gérez l&apos;ensemble des réservations.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminBookingsPage;

import { Link } from 'react-router-dom';

function CoachBookingsPage() {
  return (
    <div className="container py-5">
      <h1>Mes réservations</h1>
      <p className="text-muted">
        Consultez et gérez les réservations de vos clients.
      </p>
      <Link to="/coach" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default CoachBookingsPage;

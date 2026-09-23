import { Link } from 'react-router-dom';

function ClientBookingsPage() {
  return (
    <div className="container py-5">
      <h1>Mes reservations</h1>
      <p className="text-muted">
        Consultez et gérez vos reservations de séances.
      </p>
      <Link to="/client" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default ClientBookingsPage;

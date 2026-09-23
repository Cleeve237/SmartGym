import { Link } from 'react-router-dom';

function ClientBookingDetailPage() {
  return (
    <div className="container py-5">
      <h1>Detail de la reservation</h1>
      <p className="text-muted">
        Consultez les informations de cette reservation.
      </p>
      <Link to="/client/bookings" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour aux reservations
      </Link>
    </div>
  );
}

export default ClientBookingDetailPage;

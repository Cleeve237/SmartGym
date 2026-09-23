import { Link } from 'react-router-dom';

function ClientNotificationsPage() {
  return (
    <div className="container py-5">
      <h1>Notifications</h1>
      <p className="text-muted">
        Consultez vos notifications et alertes.
      </p>
      <Link to="/client" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default ClientNotificationsPage;

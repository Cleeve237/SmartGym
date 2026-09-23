import { Link } from 'react-router-dom';

function ClientHistoryPage() {
  return (
    <div className="container py-5">
      <h1>Mon historique</h1>
      <p className="text-muted">
        Retrouvez l&apos;ensemble de vos activites passees.
      </p>
      <Link to="/client" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default ClientHistoryPage;

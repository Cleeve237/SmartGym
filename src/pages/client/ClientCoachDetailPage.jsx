import { Link } from 'react-router-dom';

function ClientCoachDetailPage() {
  return (
    <div className="container py-5">
      <h1>Profil du coach</h1>
      <p className="text-muted">
        Consultez les informations detaillees du coach.
      </p>
      <Link to="/client/coaches" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour aux coachs
      </Link>
    </div>
  );
}

export default ClientCoachDetailPage;

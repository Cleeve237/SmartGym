import { Link } from 'react-router-dom';

function ClientEditProfilePage() {
  return (
    <div className="container py-5">
      <h1>Modifier mon profil</h1>
      <p className="text-muted">
        Mettez a jour vos informations personnelles.
      </p>
      <Link to="/client/profile" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au profil
      </Link>
    </div>
  );
}

export default ClientEditProfilePage;

import { Link } from 'react-router-dom';

function ClientFavoritesPage() {
  return (
    <div className="container py-5">
      <h1>Mes favoris</h1>
      <p className="text-muted">
        Retrouvez les coachs et programmes que vous avez sauvegardes.
      </p>
      <Link to="/client" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default ClientFavoritesPage;

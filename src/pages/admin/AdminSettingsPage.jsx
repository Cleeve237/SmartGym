import { Link } from 'react-router-dom';

function AdminSettingsPage() {
  return (
    <div className="container py-5">
      <h1>Paramètres</h1>
      <p className="text-muted">
        Configurez les paramètres de la plateforme SmartGym.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminSettingsPage;

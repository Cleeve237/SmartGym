import { Link } from 'react-router-dom';

function CoachSettingsPage() {
  return (
    <div className="container py-5">
      <h1>Paramètres</h1>
      <p className="text-muted">
        Configurez les paramètres de votre espace coach.
      </p>
      <Link to="/coach" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default CoachSettingsPage;

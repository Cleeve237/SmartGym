import { Link } from 'react-router-dom';

function CoachRevenuePage() {
  return (
    <div className="container py-5">
      <h1>Revenus</h1>
      <p className="text-muted">
        Suivez vos revenus et statistiques financières.
      </p>
      <Link to="/coach" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default CoachRevenuePage;

import { Link } from 'react-router-dom';

function CoachProgrammesPage() {
  return (
    <div className="container py-5">
      <h1>Mes programmes</h1>
      <p className="text-muted">
        Gerez vos programmes d&apos;entrainement.
      </p>
      <Link to="/coach" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default CoachProgrammesPage;

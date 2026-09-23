import { Link } from 'react-router-dom';

function CoachProgrammeCreatePage() {
  return (
    <div className="container py-5">
      <h1>Creer un programme</h1>
      <p className="text-muted">
        Créez un nouveau programme d&apos;entrainement.
      </p>
      <Link to="/coach/programmes" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour aux programmes
      </Link>
    </div>
  );
}

export default CoachProgrammeCreatePage;

import { Link } from 'react-router-dom';

function CoachProgrammeEditPage() {
  return (
    <div className="container py-5">
      <h1>Modifier le programme</h1>
      <p className="text-muted">
        Modifiez les informations de ce programme.
      </p>
      <Link to="/coach/programmes" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour aux programmes
      </Link>
    </div>
  );
}

export default CoachProgrammeEditPage;

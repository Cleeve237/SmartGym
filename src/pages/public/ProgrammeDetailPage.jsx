import { Link } from 'react-router-dom';

function ProgrammeDetailPage() {
  return (
    <div className="container py-5">
      <h1>Detail du programme</h1>
      <p className="text-muted">
        Decouvrez les details de ce programme d&apos;entrainement.
      </p>
      <Link to="/programmes" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour aux programmes
      </Link>
    </div>
  );
}

export default ProgrammeDetailPage;

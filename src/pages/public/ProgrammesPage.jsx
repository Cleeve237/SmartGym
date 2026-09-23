import { Link } from 'react-router-dom';

function ProgrammesPage() {
  return (
    <div className="container py-5">
      <h1>Programmes</h1>
      <p className="text-muted">
        Explorez nos programmes d&apos;entrainement adaptes a vos objectifs.
      </p>
      <Link to="/" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour a l&apos;accueil
      </Link>
    </div>
  );
}

export default ProgrammesPage;

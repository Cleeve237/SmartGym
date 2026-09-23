import { Link } from 'react-router-dom';

function ProgramCTA() {
  return (
    <section className="pg-cta">
      <h2 className="pg-cta-title">Vous ne trouvez pas ce que vous cherchez ?</h2>
      <p className="pg-cta-text">
        Contactez un de nos coachs professionnels pour un programme sur mesure adapte a vos objectifs.
      </p>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Link to="/coaches" className="btn btn-light btn-lg">
          <i className="bi bi-people me-2" />
          Trouver un coach
        </Link>
        <Link to="/contact" className="btn btn-outline-light btn-lg">
          <i className="bi bi-envelope me-2" />
          Nous contacter
        </Link>
      </div>
    </section>
  );
}

export default ProgramCTA;

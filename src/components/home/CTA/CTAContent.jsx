import { Link } from 'react-router-dom';

function CTAContent() {
  return (
    <div className="cta-content">
      <div className="cta-badge">
        <i className="bi bi-rocket-takeoff" />
        Rejoignez SmartGym
      </div>

      <h2 className="cta-title">
        Pret a commencer votre transformation ?
      </h2>

      <p className="cta-subtitle">
        Trouvez des maintenant le coach qui vous accompagnera vers vos objectifs.
      </p>

      <div className="cta-buttons">
        <Link to="/coaches" className="cta-btn cta-btn--primary">
          Trouver un coach
          <i className="bi bi-arrow-right" />
        </Link>
        <Link to="/register" className="cta-btn cta-btn--secondary">
          Creer un compte
          <i className="bi bi-person-plus" />
        </Link>
      </div>
    </div>
  );
}

export default CTAContent;

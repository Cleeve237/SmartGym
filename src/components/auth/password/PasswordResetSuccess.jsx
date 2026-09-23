import { Link } from 'react-router-dom';

function PasswordResetSuccess() {
  return (
    <div className="pwd-reset-success-page">
      <div className="pwd-reset-success-card">
        <Link to="/" className="pwd-reset-success-logo">
          <span className="pwd-reset-success-logo-icon">
            <i className="bi bi-lightning-charge-fill" />
          </span>
          <span className="pwd-reset-success-logo-text">SmartGym</span>
        </Link>

        <div className="pwd-reset-success-icon">
          <i className="bi bi-check-lg" />
        </div>

        <h1 className="pwd-reset-success-title">
          Votre mot de passe a ete reinitialise
        </h1>

        <p className="pwd-reset-success-text">
          Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
        </p>

        <div className="pwd-reset-success-actions">
          <Link to="/login" className="pwd-reset-success-btn pwd-reset-success-btn--primary">
            Se connecter
            <i className="bi bi-arrow-right" />
          </Link>
          <Link to="/" className="pwd-reset-success-btn pwd-reset-success-btn--secondary">
            <i className="bi bi-house" />
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSuccess;

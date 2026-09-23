import { Link } from 'react-router-dom';

function RegisterHeader() {
  return (
    <div className="register-header">
      <Link to="/" className="register-logo">
        <span className="register-logo-icon">
          <i className="bi bi-lightning-charge-fill" />
        </span>
        <span className="register-logo-text">SmartGym</span>
      </Link>
      <h1 className="register-title">Creer votre compte</h1>
      <p className="register-subtitle">
        Rejoignez SmartGym et trouvez le coach qui vous accompagnera vers vos objectifs.
      </p>
    </div>
  );
}

export default RegisterHeader;

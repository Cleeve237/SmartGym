import { Link } from 'react-router-dom';

function LoginHeader() {
  return (
    <div className="login-header">
      <Link to="/" className="login-logo">
        <span className="login-logo-icon">
          <i className="bi bi-lightning-charge-fill" />
        </span>
        <span className="login-logo-text">SmartGym</span>
      </Link>
      <h1 className="login-title">Bienvenue !</h1>
      <p className="login-subtitle">
        Connectez-vous pour retrouver votre coach et poursuivre vos objectifs.
      </p>
    </div>
  );
}

export default LoginHeader;

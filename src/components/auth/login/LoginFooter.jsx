import { Link } from 'react-router-dom';

function LoginFooter() {
  return (
    <footer className="login-footer">
      <p className="login-footer-text">
        Pas encore de compte ?{' '}
        <Link to="/register" className="login-footer-link">
          Creer un compte
        </Link>
      </p>
      <Link to="/" className="login-home-link">
        <i className="bi bi-arrow-left" />
        Retour a l&apos;accueil
      </Link>
    </footer>
  );
}

export default LoginFooter;

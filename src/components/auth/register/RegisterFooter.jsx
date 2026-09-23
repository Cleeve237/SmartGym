import { Link } from 'react-router-dom';

function RegisterFooter() {
  return (
    <footer className="register-footer">
      <p className="register-footer-text">
        Vous avez deja un compte ?{' '}
        <Link to="/login" className="register-footer-link">
          Se connecter
        </Link>
      </p>
      <Link to="/" className="register-home-link">
        <i className="bi bi-arrow-left" />
        Retour a l&apos;accueil
      </Link>
    </footer>
  );
}

export default RegisterFooter;

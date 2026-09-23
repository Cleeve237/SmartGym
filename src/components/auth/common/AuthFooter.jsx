import { Link } from 'react-router-dom';

function AuthFooter({ text, linkText, linkTo, showBackToHome = true }) {
  return (
    <footer className="auth-footer">
      {text && linkText && linkTo && (
        <p className="auth-footer-text">
          {text}{' '}
          <Link to={linkTo} className="auth-footer-link">
            {linkText}
          </Link>
        </p>
      )}
      {showBackToHome && (
        <Link to="/" className="auth-home-link">
          <i className="bi bi-arrow-left" />
          Retour &agrave; l&apos;accueil
        </Link>
      )}
    </footer>
  );
}

export default AuthFooter;

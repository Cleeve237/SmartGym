import { Link } from 'react-router-dom';

function AuthHeader({ title, subtitle, showLogo = true }) {
  return (
    <div className="auth-header">
      {showLogo && (
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">
            <i className="bi bi-lightning-charge-fill" />
          </span>
          <span className="auth-logo-text">SmartGym</span>
        </Link>
      )}
      {title && <h1 className="auth-title">{title}</h1>}
      {subtitle && <p className="auth-subtitle">{subtitle}</p>}
    </div>
  );
}

export default AuthHeader;

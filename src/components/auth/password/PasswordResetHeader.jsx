import { Link } from 'react-router-dom';

function PasswordResetHeader({ title, subtitle }) {
  return (
    <div className="pwd-reset-header">
      <Link to="/" className="pwd-reset-logo">
        <span className="pwd-reset-logo-icon">
          <i className="bi bi-lightning-charge-fill" />
        </span>
        <span className="pwd-reset-logo-text">SmartGym</span>
      </Link>
      <h1 className="pwd-reset-title">{title}</h1>
      <p className="pwd-reset-subtitle">{subtitle}</p>
    </div>
  );
}

export default PasswordResetHeader;

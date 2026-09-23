import './Auth.css';

function SuccessCard({ icon = 'bi-check-lg', title, text, actions }) {
  return (
    <div className="auth-success-card auth-card auth-card--centered">
      <div className="auth-success-icon">
        <i className={icon} />
      </div>
      <h1 className="auth-success-title">{title}</h1>
      <p className="auth-success-text">{text}</p>
      {actions && <div className="auth-success-actions">{actions}</div>}
    </div>
  );
}

export default SuccessCard;

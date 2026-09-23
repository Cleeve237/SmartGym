function ErrorAlert({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="auth-alert auth-alert--error" role="alert">
      <i className="bi bi-exclamation-circle auth-alert-icon" />
      <span>{message}</span>
      {onDismiss && (
        <button
          type="button"
          className="auth-alert-dismiss"
          onClick={onDismiss}
          aria-label="Fermer"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '0 0 0 0.5rem',
            fontSize: '1rem',
          }}
        >
          <i className="bi bi-x" />
        </button>
      )}
    </div>
  );
}

export default ErrorAlert;

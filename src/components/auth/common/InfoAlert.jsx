function InfoAlert({ message, variant = 'info' }) {
  if (!message) return null;

  const icons = {
    info: 'bi-info-circle',
    success: 'bi-check-circle',
    warning: 'bi-exclamation-triangle',
    error: 'bi-exclamation-circle',
  };

  return (
    <div className={`auth-alert auth-alert--${variant}`} role="status">
      <i className={`${icons[variant] || icons.info} auth-alert-icon`} />
      <span>{message}</span>
    </div>
  );
}

export default InfoAlert;

import './Alert.css';

const ICONS = {
  primary: 'bi-info-circle-fill',
  success: 'bi-check-circle-fill',
  danger: 'bi-exclamation-triangle-fill',
  warning: 'bi-exclamation-circle-fill',
  info: 'bi-info-circle-fill',
  dark: 'bi-info-circle-fill',
};

export default function Alert({
  children, title, variant = 'primary', icon, dismissible, onClose, className = '', ...props
}) {
  const cls = [
    'ds-alert', `ds-alert--${variant}`,
    dismissible ? 'ds-alert--dismissible' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} role="alert" {...props}>
      {icon !== false && (
        <span className="ds-alert-icon">
          <i className={`bi ${icon || ICONS[variant] || ICONS.primary}`} />
        </span>
      )}
      <div className="ds-alert-content">
        {title && <div className="ds-alert-title">{title}</div>}
        {children}
      </div>
      {dismissible && (
        <button className="ds-alert-close ds-alert-dismiss" onClick={onClose} aria-label="Fermer">
          <i className="bi bi-x" />
        </button>
      )}
    </div>
  );
}

import './EmptyState.css';

export default function EmptyState({
  icon = 'bi-inbox', title = 'Aucune donnée', description, action, className = '', ...props
}) {
  return (
    <div className={`ds-empty ${className}`} {...props}>
      <div className="ds-empty-icon">
        <i className={`bi ${icon}`} />
      </div>
      <h4 className="ds-empty-title">{title}</h4>
      {description && <p className="ds-empty-desc">{description}</p>}
      {action && <div className="ds-empty-action">{action}</div>}
    </div>
  );
}

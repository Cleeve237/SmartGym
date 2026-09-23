import './Badge.css';

export default function Badge({
  children, variant = 'primary', size = 'md', dot, removable, onRemove, className = '', ...props
}) {
  const cls = [
    'ds-badge',
    `ds-badge--${variant}`,
    size === 'sm' ? 'ds-badge--sm' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={cls} {...props}>
      {dot && <span className="ds-badge-dot" />}
      {children}
      {removable && (
        <button type="button" className="ds-badge-remove" onClick={onRemove} aria-label="Supprimer">
          <i className="bi bi-x" />
        </button>
      )}
    </span>
  );
}

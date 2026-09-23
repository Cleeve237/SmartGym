import './Card.css';

export default function Card({
  children, header, footer, variant = 'default', className = '',
  bodyClassName = '', onClick, ...props
}) {
  const cls = [
    'ds-card',
    variant === 'hover' ? 'ds-card--hover' : '',
    variant === 'elevated' ? 'ds-card--elevated' : '',
    variant === 'clickable' ? 'ds-card--clickable' : '',
    variant === 'compact' ? 'ds-card--compact' : '',
    variant === 'no-border' ? 'ds-card--no-border' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(e); } : undefined} {...props}>
      {header && <div className="ds-card-header">{header}</div>}
      <div className={`ds-card-body ${bodyClassName}`}>{children}</div>
      {footer && <div className="ds-card-footer">{footer}</div>}
    </div>
  );
}

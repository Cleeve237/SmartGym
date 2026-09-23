import './LoadingSpinner.css';

export default function LoadingSpinner({
  size = 'md', label, overlay, inline, variant = 'primary', className = '', ...props
}) {
  const cls = [
    'ds-spinner',
    size !== 'md' ? `ds-spinner--${size}` : '',
    variant === 'white' ? 'ds-spinner--white' : '',
    className,
  ].filter(Boolean).join(' ');

  const spinner = <div className={cls} role="status" aria-label={label || 'Chargement'} {...props}><span className="ds-sr-only">{label || 'Chargement en cours...'}</span></div>;

  if (overlay) {
    return (
      <div className="ds-spinner-overlay">
        <div className="ds-spinner-wrapper">
          {spinner}
          {label && <span className="ds-spinner-label">{label}</span>}
        </div>
      </div>
    );
  }

  if (inline) {
    return <span className="ds-spinner-inline">{spinner}</span>;
  }

  return (
    <div className="ds-spinner-wrapper">
      {spinner}
      {label && <span className="ds-spinner-label">{label}</span>}
    </div>
  );
}

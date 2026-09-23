import './Button.css';

export default function Button({
  children, variant = 'primary', size = 'md', fullWidth, loading, disabled,
  leftIcon, rightIcon, className = '', type = 'button', ...props
}) {
  const cls = [
    'ds-btn',
    `ds-btn--${variant}`,
    size && size !== 'md' ? `ds-btn--${size}` : '',
    fullWidth ? 'ds-btn--full' : '',
    loading ? 'ds-btn--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={cls} disabled={disabled || loading} aria-disabled={disabled || loading} aria-busy={loading} {...props}>
      {loading && <span className="ds-btn-spinner" aria-hidden="true" />}
      {!loading && leftIcon && <i className={`bi bi-${leftIcon}`} />}
      {children}
      {!loading && rightIcon && <i className={`bi bi-${rightIcon}`} />}
    </button>
  );
}

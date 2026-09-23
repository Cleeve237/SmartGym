function LoadingButton({
  children,
  isLoading = false,
  loadingText = 'Chargement...',
  disabled = false,
  type = 'submit',
  variant = 'primary',
  className = '',
  onClick,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`auth-loading-btn auth-loading-btn--${variant} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading && <span className="auth-loading-spinner" />}
      {isLoading ? loadingText : children}
    </button>
  );
}

export default LoadingButton;

function Button({
  children,
  variant = 'primary',
  size = '',
  outline = false,
  icon = '',
  iconPosition = 'left',
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const sizeClass = size ? `btn-${size}` : '';
  const widthClass = fullWidth ? 'w-100' : '';
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const classes = `btn ${variantClass} ${sizeClass} ${widthClass} btn-icon ${className}`.trim();

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {icon && iconPosition === 'left' && <i className={`bi ${icon}`} />}
      {children}
      {icon && iconPosition === 'right' && <i className={`bi ${icon}`} />}
    </button>
  );
}

export default Button;

function Input({
  label,
  error,
  helpText,
  icon,
  className = '',
  id,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <div className="position-relative">
        {icon && (
          <i
            className={`bi ${icon} position-absolute top-50 start-0 translate-middle-y ms-3 text-muted`}
          />
        )}
        <input
          id={inputId}
          className={`form-control ${icon ? 'ps-5' : ''} ${error ? 'is-invalid' : ''}`}
          {...rest}
        />
      </div>
      {error && <div className="invalid-feedback d-block">{error}</div>}
      {helpText && !error && (
        <div className="form-text">{helpText}</div>
      )}
    </div>
  );
}

export default Input;

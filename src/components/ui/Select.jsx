function Select({
  label,
  error,
  helpText,
  options = [],
  placeholder = '',
  className = '',
  id,
  ...rest
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="form-label">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`form-select ${error ? 'is-invalid' : ''}`}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback d-block">{error}</div>}
      {helpText && !error && (
        <div className="form-text">{helpText}</div>
      )}
    </div>
  );
}

export default Select;

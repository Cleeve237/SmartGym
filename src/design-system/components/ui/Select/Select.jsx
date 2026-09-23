import './Select.css';

export default function Select({
  label, error, helperText, options = [], placeholder = '', size = 'md',
  disabled, className = '', id, value, onChange, ...props
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const cls = [
    'ds-select',
    error ? 'ds-input--error' : '',
    disabled ? 'ds-input--disabled' : '',
    size !== 'md' ? `ds-input--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="ds-input-wrapper">
      {label && <label className="ds-input-label" htmlFor={selectId}>{label}</label>}
      <div className={cls}>
        <select
          id={selectId}
          className="ds-select-field"
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="ds-select-arrow"><i className="bi bi-chevron-down" /></span>
      </div>
      {error && <div className="ds-input-error" role="alert">{error}</div>}
      {helperText && !error && <div className="ds-input-helper">{helperText}</div>}
    </div>
  );
}

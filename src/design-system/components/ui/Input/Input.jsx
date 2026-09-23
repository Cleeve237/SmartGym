import { useState } from 'react';
import './Input.css';

export default function Input({
  label, error, helperText, leftIcon, rightIcon, clearable, size = 'md',
  disabled, className = '', id, type = 'text', onChange, value: controlledValue, ...props
}) {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const handleChange = (e) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    onChange?.({ target: { value: '' } });
  };

  const cls = [
    'ds-input',
    error ? 'ds-input--error' : '',
    disabled ? 'ds-input--disabled' : '',
    size !== 'md' ? `ds-input--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="ds-input-wrapper">
      {label && <label className="ds-input-label" htmlFor={inputId}>{label}</label>}
      <div className={cls}>
        {leftIcon && <span className="ds-input-icon"><i className={`bi bi-${leftIcon}`} /></span>}
        <input
          id={inputId}
          type={type}
          className="ds-input-field"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {clearable && value && !disabled && (
          <button type="button" className="ds-input-clear" onClick={handleClear} tabIndex={-1} aria-label="Effacer">
            <i className="bi bi-x-lg" />
          </button>
        )}
        {rightIcon && !clearable && <span className="ds-input-icon"><i className={`bi bi-${rightIcon}`} /></span>}
      </div>
      {error && <div className="ds-input-error" id={`${inputId}-error`} role="alert">{error}</div>}
      {helperText && !error && <div className="ds-input-helper" id={`${inputId}-helper`}>{helperText}</div>}
    </div>
  );
}

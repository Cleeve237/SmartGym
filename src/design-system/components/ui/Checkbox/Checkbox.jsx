import { useId } from 'react';
import './Checkbox.css';

export default function Checkbox({
  label, description, error, size = 'md', disabled, checked, onChange,
  className = '', id, ...props
}) {
  const genId = useId();
  const checkId = id || genId;

  const cls = [
    'ds-check-group',
    size !== 'md' ? `ds-check-${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <input
        id={checkId}
        type="checkbox"
        className={`ds-check-input ${error ? 'ds-check-input--error' : ''}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${checkId}-error` : undefined}
        {...props}
      />
      <div>
        {label && <label htmlFor={checkId} className="ds-check-label">{label}</label>}
        {description && <div className="ds-check-desc">{description}</div>}
        {error && <div className="ds-input-error" id={`${checkId}-error`} role="alert">{error}</div>}
      </div>
    </div>
  );
}

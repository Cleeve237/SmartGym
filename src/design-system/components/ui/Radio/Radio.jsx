import { useId } from 'react';
import './Radio.css';

export default function Radio({
  label, description, size = 'md', disabled, checked, onChange,
  className = '', id, value, name, ...props
}) {
  const genId = useId();
  const radioId = id || genId;

  const cls = [
    'ds-radio-group',
    size !== 'md' ? `ds-check-${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <input
        id={radioId}
        type="radio"
        className="ds-radio-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        name={name}
        {...props}
      />
      <div>
        {label && <label htmlFor={radioId} className="ds-radio-label">{label}</label>}
        {description && <div className="ds-check-desc">{description}</div>}
      </div>
    </div>
  );
}

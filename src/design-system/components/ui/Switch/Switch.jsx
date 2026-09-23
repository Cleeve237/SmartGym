import { useId } from 'react';
import './Switch.css';

export default function Switch({
  label, size = 'md', disabled, checked, onChange, className = '', id, ...props
}) {
  const genId = useId();
  const switchId = id || genId;

  const cls = ['ds-switch', size !== 'md' ? `ds-switch--${size}` : '', className].filter(Boolean).join(' ');

  return (
    <label className={cls} htmlFor={switchId}>
      <input
        id={switchId}
        type="checkbox"
        className="ds-switch-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        role="switch"
        {...props}
      />
      <span className="ds-switch-track">
        <span className="ds-switch-thumb" />
      </span>
      {label && <span className="ds-switch-label">{label}</span>}
    </label>
  );
}

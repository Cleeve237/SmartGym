import { useState, forwardRef } from 'react';
import PasswordStrength from './PasswordStrength';
import { PASSWORD_RULES } from '../../../utils/auth/passwordRules';

const PasswordInput = forwardRef(function PasswordInput(
  {
    id,
    label = 'Mot de passe',
    placeholder = 'Minimum 8 caract\u00e8res',
    error,
    showStrength = true,
    showChecklist = true,
    autoComplete = 'new-password',
    value = '',
    onChange,
    ...rest
  },
  ref
) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="auth-field">
      <label htmlFor={id} className="auth-field-label">
        {label}
      </label>
      <div className="auth-field-input-wrapper">
        <input
          id={id}
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={`auth-field-input${error ? ' auth-field-input--error' : ''} auth-field-input--with-toggle`}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onCopy={(e) => e.preventDefault()}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        <button
          type="button"
          className="auth-password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          tabIndex={-1}
        >
          <i className={`bi ${visible ? 'bi-eye-slash' : 'bi-eye'}`} />
        </button>
      </div>
      {error && (
        <span className="auth-field-error" id={`${id}-error`} role="alert">
          <i className="bi bi-exclamation-circle" />
          {error}
        </span>
      )}
      {showStrength && <PasswordStrength password={value} />}
      {showChecklist && value && (
        <div className="auth-checklist" aria-label="Exigences du mot de passe">
          <span className="auth-checklist-title">Le mot de passe doit contenir :</span>
          {PASSWORD_RULES.map((rule) => {
            const met = value.length > 0 && rule.test(value);
            return (
              <div
                key={rule.id}
                className={`auth-checklist-item${met ? ' auth-checklist-item--met' : ''}`}
              >
                <span className="auth-checklist-icon">
                  <i className={met ? 'bi bi-check-lg' : 'bi bi-circle'} />
                </span>
                {rule.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default PasswordInput;

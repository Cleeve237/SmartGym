import { useState } from 'react';

function PasswordField({ id, label, error, ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="login-field">
      <label htmlFor={id} className="login-field-label">{label}</label>
      <div className="login-field-input-wrapper">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className={`login-field-input${error ? ' login-field-input--error' : ''}`}
          autoComplete="current-password"
          {...rest}
        />
        <button
          type="button"
          className="login-password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          tabIndex={-1}
        >
          <i className={`bi ${visible ? 'bi-eye-slash' : 'bi-eye'}`} />
        </button>
      </div>
      {error && (
        <span className="login-field-error">
          <i className="bi bi-exclamation-circle" />
          {error}
        </span>
      )}
    </div>
  );
}

export default PasswordField;

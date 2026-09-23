import { useState } from 'react';

function PasswordField({ id, label, error, ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="cr-field">
      <label htmlFor={id} className="cr-field-label">{label}</label>
      <div className="cr-password-wrapper">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className={`cr-field-input${error ? ' cr-field-input--error' : ''}`}
          {...rest}
        />
        <button
          type="button"
          className="cr-password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          tabIndex={-1}
        >
          <i className={`bi ${visible ? 'bi-eye-slash' : 'bi-eye'}`} />
        </button>
      </div>
      {error && (
        <span className="cr-field-error">
          <i className="bi bi-exclamation-circle" />
          {error}
        </span>
      )}
    </div>
  );
}

export default PasswordField;

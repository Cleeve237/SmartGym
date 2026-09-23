function TermsCheckbox({ checked, onChange, error }) {
  return (
    <div>
      <label className={`register-terms${error ? ' register-terms--error' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="register-terms-label">
          J&apos;accepte les{' '}
          <a href="/conditions" target="_blank" rel="noopener noreferrer">
            Conditions d&apos;utilisation
          </a>{' '}
          et la{' '}
          <a href="/confidentialite" target="_blank" rel="noopener noreferrer">
            Politique de confidentialite
          </a>
        </span>
      </label>
      {error && (
        <span className="register-terms-error">
          <i className="bi bi-exclamation-circle" />
          {error}
        </span>
      )}
    </div>
  );
}

export default TermsCheckbox;

function PasswordResetIllustration() {
  return (
    <aside className="pwd-reset-illustration" aria-hidden="true">
      <div className="pwd-reset-blob pwd-reset-blob--1" />
      <div className="pwd-reset-blob pwd-reset-blob--2" />

      <div className="pwd-reset-floating-cards">
        <div className="pwd-reset-floating-card">
          <div className="pwd-reset-floating-card-icon pwd-reset-floating-card-icon--lock">
            <i className="bi bi-shield-lock-fill" />
          </div>
          <div>
            <div className="pwd-reset-floating-card-value">AES-256</div>
            <div className="pwd-reset-floating-card-label">Chiffrement</div>
          </div>
        </div>
        <div className="pwd-reset-floating-card">
          <div className="pwd-reset-floating-card-icon pwd-reset-floating-card-icon--shield">
            <i className="bi bi-shield-check" />
          </div>
          <div>
            <div className="pwd-reset-floating-card-value">100%</div>
            <div className="pwd-reset-floating-card-label">Securise</div>
          </div>
        </div>
        <div className="pwd-reset-floating-card">
          <div className="pwd-reset-floating-card-icon pwd-reset-floating-card-icon--key">
            <i className="bi bi-key-fill" />
          </div>
          <div>
            <div className="pwd-reset-floating-card-value">2FA</div>
            <div className="pwd-reset-floating-card-label">Protection</div>
          </div>
        </div>
      </div>

      <div className="pwd-reset-illustration-content">
        <div className="pwd-reset-illustration-icon">
          <i className="bi bi-shield-lock" />
        </div>
        <h2 className="pwd-reset-illustration-title">SmartGym</h2>
        <p className="pwd-reset-illustration-text">
          Votre compte est protege. Recuperez l&apos;acces a votre espace en toute securite.
        </p>
      </div>
    </aside>
  );
}

export default PasswordResetIllustration;

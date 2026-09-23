function RegisterIllustration() {
  return (
    <aside className="register-illustration" aria-hidden="true">
      <div className="register-blob register-blob--1" />
      <div className="register-blob register-blob--2" />

      <div className="register-floating-cards">
        <div className="register-floating-card">
          <div className="register-floating-card-icon register-floating-card-icon--check">
            <i className="bi bi-check-circle-fill" />
          </div>
          <div>
            <div className="register-floating-card-value">Coachs certifies</div>
            <div className="register-floating-card-label">Profils verifies</div>
          </div>
        </div>
        <div className="register-floating-card">
          <div className="register-floating-card-icon register-floating-card-icon--bolt">
            <i className="bi bi-lightning-charge-fill" />
          </div>
          <div>
            <div className="register-floating-card-value">Reservation rapide</div>
            <div className="register-floating-card-label">Quelques clics</div>
          </div>
        </div>
        <div className="register-floating-card">
          <div className="register-floating-card-icon register-floating-card-icon--shield">
            <i className="bi bi-shield-lock-fill" />
          </div>
          <div>
            <div className="register-floating-card-value">Paiement securise</div>
            <div className="register-floating-card-label">Transactions protegees</div>
          </div>
        </div>
      </div>

      <div className="register-illustration-content">
        <div className="register-illustration-icon">
          <i className="bi bi-trophy" />
        </div>
        <h2 className="register-illustration-title">SmartGym</h2>
        <p className="register-illustration-text">
          La plateforme qui connecte les sportifs camerounais avec les meilleurs coachs certifies.
        </p>
      </div>
    </aside>
  );
}

export default RegisterIllustration;

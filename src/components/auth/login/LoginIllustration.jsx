function LoginIllustration() {
  return (
    <aside className="login-illustration" aria-hidden="true">
      {/* Blobs decoratifs */}
      <div className="login-blob login-blob--1" />
      <div className="login-blob login-blob--2" />

      {/* Cartes flottantes */}
      <div className="login-floating-cards">
        <div className="login-floating-card">
          <div className="login-floating-card-icon login-floating-card-icon--star">
            <i className="bi bi-star-fill" />
          </div>
          <div>
            <div className="login-floating-card-value">4.9</div>
            <div className="login-floating-card-label">Note moyenne</div>
          </div>
        </div>
        <div className="login-floating-card">
          <div className="login-floating-card-icon login-floating-card-icon--coach">
            <i className="bi bi-people-fill" />
          </div>
          <div>
            <div className="login-floating-card-value">250+</div>
            <div className="login-floating-card-label">Coachs verifies</div>
          </div>
        </div>
        <div className="login-floating-card">
          <div className="login-floating-card-icon login-floating-card-icon--city">
            <i className="bi bi-geo-alt-fill" />
          </div>
          <div>
            <div className="login-floating-card-value">15 villes</div>
            <div className="login-floating-card-label">Au Cameroun</div>
          </div>
        </div>
      </div>

      {/* Contenu centre */}
      <div className="login-illustration-content">
        <div className="login-illustration-icon">
          <i className="bi bi-trophy" />
        </div>
        <h2 className="login-illustration-title">SmartGym</h2>
        <p className="login-illustration-text">
          La plateforme qui connecte les sportifs camerounais avec les meilleurs coachs certifies.
        </p>
      </div>
    </aside>
  );
}

export default LoginIllustration;

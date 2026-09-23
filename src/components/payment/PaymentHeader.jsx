export default function PaymentHeader() {
  return (
    <div className="pay-header">
      <div className="pay-header-icon">
        <i className="bi bi-shield-lock" />
      </div>
      <div className="pay-header-info">
        <h1 className="pay-header-title">Paiement sécurisé</h1>
        <p className="pay-header-subtitle">Finalisez votre réservation en toute sécurité.</p>
      </div>
      <span className="pay-badge">
        <i className="bi bi-shield-check" /> Paiement sécurisé
      </span>
    </div>
  );
}

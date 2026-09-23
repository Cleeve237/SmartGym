export default function PaymentSummary({ subtotal, fee, total }) {
  return (
    <div className="pay-summary">
      <div className="pay-summary-row">
        <span>Sous-total</span>
        <span>{subtotal?.toLocaleString()} FCFA</span>
      </div>
      <div className="pay-summary-row">
        <span>Frais de service</span>
        <span>{fee?.toLocaleString()} FCFA</span>
      </div>
      <div className="pay-summary-total">
        <span>Total à payer</span>
        <span className="pay-summary-amount">{total?.toLocaleString()} FCFA</span>
      </div>
    </div>
  );
}

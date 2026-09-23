const MOBILE_MONEY = [
  { icon: 'bi-phone', label: 'MTN Mobile Money' },
  { icon: 'bi-phone', label: 'Orange Money' },
  { icon: 'bi-credit-card', label: 'Carte Bancaire' },
];

function PaymentPreview() {
  return (
    <div>
      <p style={{fontSize:'.8rem',fontWeight:600,color:'var(--color-gray-500)',marginBottom:'.5rem'}}>Paiement</p>
      {MOBILE_MONEY.map((m) => (
        <div key={m.label} className="pd-payment-option">
          <div className="pd-payment-icon"><i className={`bi ${m.icon}`} /></div>
          <span className="pd-payment-label">{m.label}</span>
          <span className="pd-payment-badge">Bientôt disponible</span>
        </div>
      ))}
    </div>
  );
}
export default PaymentPreview;

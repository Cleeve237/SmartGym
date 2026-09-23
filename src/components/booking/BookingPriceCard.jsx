export default function BookingPriceCard({ program }) {
  if (!program) return null;

  const fee = Math.round(program.price * 0.05);
  const total = program.price + fee;

  return (
    <div className="bk-price-card">
      <div className="bk-price-title">
        <i className="bi bi-receipt" /> Récapitulatif
      </div>
      <div className="bk-price-row">
        <span>{program.name}</span>
        <span className="bk-price-amount">{program.price?.toLocaleString()} FCFA</span>
      </div>
      <div className="bk-price-row">
        <span>Frais de service (5%)</span>
        <span className="bk-price-amount">{fee.toLocaleString()} FCFA</span>
      </div>
      <div className="bk-price-row bk-price-row--total">
        <span>Total</span>
        <span className="bk-price-amount">{total.toLocaleString()} FCFA</span>
      </div>
    </div>
  );
}

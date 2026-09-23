export default function TransactionReceipt({ transaction }) {
  return (
    <div className="pay-receipt">
      <div className="pay-receipt-header">
        <div className="pay-receipt-icon">
          <i className="bi bi-check-lg" />
        </div>
        <div className="pay-receipt-title">Paiement réussi</div>
        <div className="pay-receipt-subtitle">Votre transaction a été traitée avec succès.</div>
      </div>
      <div className="pay-receipt-body">
        <div className="pay-receipt-rows">
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-upc" /> N° Transaction
            </span>
            <span className="pay-receipt-value pay-receipt-ref">
              {transaction.ref || "—"}
            </span>
          </div>
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-cash-stack" /> Montant
            </span>
            <span className="pay-receipt-value pay-receipt-amount">
              {transaction.amount?.toLocaleString()} FCFA
            </span>
          </div>
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-calendar3" /> Date
            </span>
            <span className="pay-receipt-value">{transaction.date || "—"}</span>
          </div>
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-person" /> Coach
            </span>
            <span className="pay-receipt-value">{transaction.coachName || "—"}</span>
          </div>
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-tag" /> Réservation
            </span>
            <span className="pay-receipt-value">{transaction.bookingRef || "—"}</span>
          </div>
          <div className="pay-receipt-row">
            <span className="pay-receipt-label">
              <i className="bi bi-wallet2" /> Méthode
            </span>
            <span className="pay-receipt-value">{transaction.method || "—"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import PaymentStatusBadge from "./PaymentStatusBadge";

const METHOD_ICONS = {
  "MTN MoMo": "bi-phone",
  "Orange Money": "bi-phone",
  "Carte bancaire": "bi-credit-card",
  "Paiement manuel": "bi-wallet2",
};

export default function PaymentHistoryCard({ payment }) {
  const fmtDate = new Date(payment.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const iconClass = `pay-history-icon pay-history-icon--${payment.status}`;
  const iconName = METHOD_ICONS[payment.method] || "bi-credit-card";

  return (
    <div className="pay-history-card">
      <div className={iconClass}>
        <i className={`bi ${iconName}`} />
      </div>
      <div className="pay-history-info">
        <div className="pay-history-top">
          <span className="pay-history-method">{payment.method}</span>
          <PaymentStatusBadge status={payment.status} />
        </div>
        <div className="pay-history-details">
          <span>
            <i className="bi bi-calendar3" /> {fmtDate}
          </span>
          <span>
            <i className="bi bi-hash" /> {payment.ref}
          </span>
        </div>
      </div>
      <div className="pay-history-amount">{payment.amount?.toLocaleString()} FCFA</div>
    </div>
  );
}

const STATUS_MAP = {
  success: { label: "Réussi", icon: "bi-check-circle-fill" },
  pending: { label: "En attente", icon: "bi-hourglass-split" },
  failed: { label: "Échoué", icon: "bi-x-circle-fill" },
  refunded: { label: "Remboursé", icon: "bi-arrow-counterclockwise" },
};

export default function PaymentStatusBadge({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP.pending;
  return (
    <span className={`pay-status pay-status--${status}`}>
      <i className={`bi ${s.icon}`} /> {s.label}
    </span>
  );
}

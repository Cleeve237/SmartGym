const STATUS_MAP = {
  pending: { label: "En attente", icon: "bi-hourglass-split" },
  confirmed: { label: "Confirmée", icon: "bi-check-circle-fill" },
  completed: { label: "Terminée", icon: "bi-check-all" },
  cancelled: { label: "Annulée", icon: "bi-x-circle-fill" },
};

export default function BookingStatusBadge({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP.pending;
  return (
    <span className={`bk-status bk-status--${status}`}>
      <i className={`bi ${s.icon}`} /> {s.label}
    </span>
  );
}

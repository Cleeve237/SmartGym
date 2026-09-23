const STATUS_MAP = {
  available: { label: 'Disponible', className: 'cd-cal-badge--available' },
  booked: { label: 'Reserve', className: 'cd-cal-badge--booked' },
  blocked: { label: 'Bloque', className: 'cd-cal-badge--blocked' },
  completed: { label: 'Termine', className: 'cd-cal-badge--completed' },
  pending: { label: 'En attente', className: 'cd-cal-badge--pending' },
  cancelled: { label: 'Annule', className: 'cd-cal-badge--cancelled' },
};

function AvailabilityStatusBadge({ status }) {
  const config = STATUS_MAP[status] || STATUS_MAP.available;

  return (
    <span className={`cd-cal-badge ${config.className}`}>
      <span className="cd-cal-filter-dot" style={{ width: 6, height: 6, background: 'currentColor', borderRadius: '50%' }} />
      {config.label}
    </span>
  );
}

export default AvailabilityStatusBadge;

import AvailabilityStatusBadge from './AvailabilityStatusBadge';

function AvailabilityCard({ availability, onDelete }) {
  const iconMap = {
    available: { icon: 'bi-check-circle', className: 'cd-cal-avail-icon--available' },
    unavailable: { icon: 'bi-x-circle', className: 'cd-cal-avail-icon--unavailable' },
    break: { icon: 'bi-cup', className: 'cd-cal-avail-icon--break' },
  };

  const config = iconMap[availability.type] || iconMap.available;

  return (
    <div className={`cd-cal-avail-card cd-cal-avail-card--${availability.type}`}>
      <div className={`cd-cal-avail-icon ${config.className}`}>
        <i className={`bi ${config.icon}`} />
      </div>
      <div className="cd-cal-avail-info">
        <div className="cd-cal-avail-title">{availability.title}</div>
        <div className="cd-cal-avail-detail">
          {availability.date} &middot; {availability.time} &middot; {availability.duration}
          {availability.location && <> &middot; {availability.location}</>}
        </div>
      </div>
      <AvailabilityStatusBadge status={availability.status || availability.type} />
      <div className="cd-cal-avail-actions">
        {onDelete && (
          <button
            className="cd-cal-blocked-remove"
            onClick={() => onDelete(availability)}
            aria-label="Supprimer"
          >
            <i className="bi bi-trash" />
          </button>
        )}
      </div>
    </div>
  );
}

export default AvailabilityCard;

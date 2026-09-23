function AvailabilityBadge({ available }) {
  return (
    <span className={`mp-badge mp-badge--${available ? 'available' : 'unavailable'}`}>
      <i className={`bi ${available ? 'bi-clock-fill' : 'bi-clock'}`} />
      {available ? 'Disponible' : 'Indisponible'}
    </span>
  );
}

export default AvailabilityBadge;

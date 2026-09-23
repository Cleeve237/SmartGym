function LocationBadge({ city, distance }) {
  return (
    <span className="mp-card-location">
      <i className="bi bi-geo-alt" />
      {city}
      {distance && <span style={{ color: 'var(--color-gray-400)' }}> &middot; {distance}</span>}
    </span>
  );
}

export default LocationBadge;

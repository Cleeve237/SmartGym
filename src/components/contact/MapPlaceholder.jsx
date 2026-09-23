function MapPlaceholder() {
  return (
    <div className="ct-map-placeholder" role="img" aria-label="Carte de localisation SmartGym">
      <i className="bi bi-map" />
      <span>Carte Google Maps / OpenStreetMap</span>
      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-400)' }}>
        Int\u00e9gration future
      </span>
    </div>
  );
}

export default MapPlaceholder;

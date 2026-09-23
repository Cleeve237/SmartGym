export default function CoachMap({ city, district }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-geo-alt-fill" />
        <h2>Localisation</h2>
      </div>
      <div className="cp-map">
        <div className="text-center">
          <i className="bi bi-map-fill" style={{ fontSize: 32 }} />
          <p className="mt-2 fw-semibold" style={{ fontSize: '.85rem', color: 'var(--color-gray-600)' }}>{district}, {city}</p>
        </div>
      </div>
    </div>
  );
}

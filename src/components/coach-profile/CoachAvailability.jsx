export default function CoachAvailability({ availability }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-calendar-week-fill" />
        <h2>Disponibilités</h2>
      </div>
      <div className="cp-avail-grid">
        {availability.map((d, i) => (
          <div key={i} className="cp-avail-day">
            <div className="cp-avail-day-name">{d.day.slice(0, 3)}</div>
            {d.slots.length > 0
              ? d.slots.map((s, j) => (
                  <span key={j} className="cp-avail-slot">{s}</span>
                ))
              : <div className="cp-avail-empty">—</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CoachAvailability({ availability }) {
  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-calendar3" />
        Disponibilites
      </h2>
      <div className="cd-availability-grid">
        {availability.map((day) => (
          <div key={day.name} className="cd-availability-day">
            <div className="cd-availability-day-name">{day.name}</div>
            <div className="cd-availability-slots">
              {day.slots.length > 0 ? (
                day.slots.map((slot) => (
                  <span key={slot} className="cd-availability-slot">
                    <i className="bi bi-clock-fill" aria-hidden="true" />
                    {slot}
                  </span>
                ))
              ) : (
                <span className="cd-availability-empty">Indisponible</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachAvailability;

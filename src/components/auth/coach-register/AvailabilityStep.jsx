const DAYS = [
  { id: 'lundi', label: 'Lundi' },
  { id: 'mardi', label: 'Mardi' },
  { id: 'mercredi', label: 'Mercredi' },
  { id: 'jeudi', label: 'Jeudi' },
  { id: 'vendredi', label: 'Vendredi' },
  { id: 'samedi', label: 'Samedi' },
  { id: 'dimanche', label: 'Dimanche' },
];

const SLOTS = [
  '07:00', '08:00', '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
];

function AvailabilityStep({ data, errors, onChange }) {
  const availability = data.availability || {};

  const toggleSlot = (day, slot) => {
    const current = availability[day] || [];
    const next = current.includes(slot)
      ? current.filter((s) => s !== slot)
      : [...current, slot];
    onChange('availability', { ...availability, [day]: next });
  };

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Vos disponibilites</h2>
        <p className="cr-step-subtitle">
          Indiquez vos creneaux de disponibilite. Les clients pourront reserver sur ces creneaux.
        </p>
      </div>

      <div className="cr-availability-grid">
        {DAYS.map((day) => (
          <div key={day.id} className="cr-day-row">
            <span className="cr-day-label">{day.label}</span>
            <div className="cr-day-slots">
              {SLOTS.map((slot) => {
                const isSelected = (availability[day.id] || []).includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    className={`cr-slot${isSelected ? ' cr-slot--selected' : ''}`}
                    onClick={() => toggleSlot(day.id, slot)}
                    aria-pressed={isSelected}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {errors.availability && (
        <span className="cr-field-error" style={{ marginTop: '0.5rem' }}>
          <i className="bi bi-exclamation-circle" />
          {errors.availability}
        </span>
      )}
    </div>
  );
}

export default AvailabilityStep;

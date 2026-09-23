import ProfileSection from '../ProfileSection';

const DAYS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

function CoachAvailability({ availability = [] }) {
  return (
    <ProfileSection title="Disponibilites" icon="bi-calendar3">
      {availability.length > 0 ? (
        <div className="prf-availability-grid">
          {DAYS_FR.map((day) => {
            const slot = availability.find((a) => a.day === day);
            const isActive = slot && slot.active;

            return (
              <div
                className={`prf-availability-slot ${isActive ? 'prf-availability-slot--active' : 'prf-availability-slot--inactive'}`}
                key={day}
              >
                <div className="prf-availability-day">{day.substring(0, 3)}</div>
                <div className="prf-availability-time">
                  {isActive ? slot.time : '—'}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="prf-info-value--empty mb-0">
          Aucune disponibilite renseignee
        </p>
      )}
    </ProfileSection>
  );
}

export default CoachAvailability;

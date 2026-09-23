import ProfileSection from '../ProfileSection';

function SportPreferences({ sports = [], availability = [] }) {
  return (
    <ProfileSection title="Preferences sportives" icon="bi-heart">
      <div className="mb-3">
        <span className="prf-info-label d-block mb-2">Sports preferes</span>
        {sports.length > 0 ? (
          <div className="prf-tags">
            {sports.map((sport) => (
              <span className="prf-tag prf-tag--primary" key={sport}>
                {sport}
              </span>
            ))}
          </div>
        ) : (
          <p className="prf-info-value--empty mb-0">
            Aucun sport selectionne
          </p>
        )}
      </div>

      {availability.length > 0 && (
        <div>
          <span className="prf-info-label d-block mb-2">Disponibilites</span>
          <div className="prf-tags">
            {availability.map((slot) => (
              <span className="prf-tag prf-tag--info" key={slot}>
                {slot}
              </span>
            ))}
          </div>
        </div>
      )}
    </ProfileSection>
  );
}

export default SportPreferences;

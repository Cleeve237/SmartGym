import ProfileSection from '../ProfileSection';

function CoachSpecialties({ specialties = [] }) {
  return (
    <ProfileSection title="Specialites" icon="bi-stars">
      {specialties.length > 0 ? (
        <div className="prf-tags">
          {specialties.map((s) => (
            <span className="prf-tag prf-tag--accent" key={s}>
              <i className="bi bi-check-circle-fill me-1" style={{ fontSize: '0.7em' }} />
              {s}
            </span>
          ))}
        </div>
      ) : (
        <p className="prf-info-value--empty mb-0">
          Aucune specialite renseignee
        </p>
      )}
    </ProfileSection>
  );
}

export default CoachSpecialties;

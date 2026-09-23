import ProfileSection from '../ProfileSection';

function CoachExperience({ experience = 0, specializations = [], languages = [] }) {
  return (
    <ProfileSection title="Parcours" icon="bi-compass">
      <div className="prf-info-grid">
        <div className="prf-info-item">
          <span className="prf-info-label">Annees d&apos;experience</span>
          <span className="prf-info-value">
            {experience > 0 ? `${experience} ans` : 'Non renseigne'}
          </span>
        </div>
        <div className="prf-info-item">
          <span className="prf-info-label">Langues</span>
          <span className="prf-info-value">
            {languages.length > 0 ? languages.join(', ') : 'Non renseigne'}
          </span>
        </div>
      </div>

      {specializations.length > 0 && (
        <div className="mt-3">
          <span className="prf-info-label d-block mb-2">Domaines de specialisation</span>
          <div className="prf-tags">
            {specializations.map((s) => (
              <span className="prf-tag prf-tag--info" key={s}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </ProfileSection>
  );
}

export default CoachExperience;

import ProfileSection from '../ProfileSection';

function CoachPresentation({ bio, experience, languages = [] }) {
  return (
    <ProfileSection title="Presentation" icon="bi-person-lines-fill">
      <div className="mb-3">
        <span className="prf-info-label d-block mb-1">Biographie</span>
        <p className="mb-0" style={{ color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-relaxed)' }}>
          {bio || 'Aucune biographie renseignee.'}
        </p>
      </div>

      {experience > 0 && (
        <div className="mb-3">
          <span className="prf-info-label d-block mb-1">Experience</span>
          <span className="prf-info-value">
            {experience} {experience > 1 ? 'ans' : 'an'} d&apos;experience
          </span>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <span className="prf-info-label d-block mb-2">Langues</span>
          <div className="prf-tags">
            {languages.map((lang) => (
              <span className="prf-tag" key={lang}>{lang}</span>
            ))}
          </div>
        </div>
      )}
    </ProfileSection>
  );
}

export default CoachPresentation;

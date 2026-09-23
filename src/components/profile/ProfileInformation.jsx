import ProfileSection from './ProfileSection';

function ProfileInformation({ user, fields = [] }) {
  const defaultFields = [
    { label: 'Nom', value: user?.lastName, icon: 'bi-person' },
    { label: 'Prenom', value: user?.firstName, icon: 'bi-person' },
    { label: 'Email', value: user?.email, icon: 'bi-envelope' },
    { label: 'Telephone', value: user?.phone, icon: 'bi-telephone' },
    { label: 'Ville', value: user?.city, icon: 'bi-geo-alt' },
    { label: 'Membre depuis', value: user?.createdAt, icon: 'bi-calendar' },
  ];

  const items = fields.length > 0 ? fields : defaultFields;

  return (
    <ProfileSection title="Informations personnelles" icon="bi-person-circle">
      <div className="prf-info-grid">
        {items.map((field) => (
          <div className="prf-info-item" key={field.label}>
            <span className="prf-info-label">
              <i className={`bi ${field.icon} me-1`} />
              {field.label}
            </span>
            <span
              className={`prf-info-value ${!field.value ? 'prf-info-value--empty' : ''}`}
            >
              {field.value || 'Non renseigne'}
            </span>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}

export default ProfileInformation;

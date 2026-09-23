import ProfileSection from '../ProfileSection';

function CoachCertificates({ certificates = [] }) {
  return (
    <ProfileSection title="Certifications" icon="bi-award">
      {certificates.length > 0 ? (
        <ul className="prf-cert-list">
          {certificates.map((cert, idx) => (
            <li className="prf-cert-item" key={cert.name || idx}>
              <div className="prf-cert-icon">
                <i className="bi bi-patch-check-fill" />
              </div>
              <div className="prf-cert-info">
                <div className="prf-cert-name">{cert.name}</div>
                <div className="prf-cert-issuer">{cert.issuer}</div>
              </div>
              {cert.year && <span className="prf-cert-year">{cert.year}</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="prf-info-value--empty mb-0">
          Aucune certification renseignee
        </p>
      )}
    </ProfileSection>
  );
}

export default CoachCertificates;

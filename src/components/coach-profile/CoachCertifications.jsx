import CoachCertCard from './CoachCertCard';

export default function CoachCertifications({ certifications }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-patch-check-fill" />
        <h2>Certifications</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
        {certifications.map((cert, i) => (
          <CoachCertCard key={i} cert={cert} />
        ))}
      </div>
    </div>
  );
}

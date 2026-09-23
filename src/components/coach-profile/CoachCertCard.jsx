export default function CoachCertCard({ cert }) {
  return (
    <div className="cp-cert">
      <div className="cp-cert-icon"><i className="bi bi-award-fill" style={{ fontSize: 18 }} /></div>
      <div className="cp-cert-info">
        <div className="cp-cert-name">{cert.name}</div>
        <div className="cp-cert-org">{cert.org} · {cert.year}</div>
      </div>
    </div>
  );
}

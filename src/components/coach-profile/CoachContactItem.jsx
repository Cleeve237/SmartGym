export default function CoachContactItem({ icon, label, value }) {
  return (
    <div className="cp-contact-item">
      <i className={`bi bi-${icon}`} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
      <span style={{ fontSize: '.85rem' }}>
        <span className="text-muted">{label}: </span>
        <strong>{value}</strong>
      </span>
    </div>
  );
}

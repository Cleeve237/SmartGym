export default function CoachGridItem({ icon, label }) {
  return (
    <div className="cp-grid-item">
      <div className="cp-grid-icon"><i className={`bi bi-${icon}`} style={{ fontSize: 16 }} /></div>
      <span>{label}</span>
    </div>
  );
}

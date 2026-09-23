export default function CoachStat({ value, label, icon }) {
  return (
    <div className="cp-stat">
      {icon && <div className="mb-1" style={{ fontSize: '1.25rem' }}>{icon}</div>}
      <div className="cp-stat-value">{value}</div>
      <div className="cp-stat-label">{label}</div>
    </div>
  );
}

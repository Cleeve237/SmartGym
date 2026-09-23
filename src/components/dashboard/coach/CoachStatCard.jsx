export default function CoachStatCard({ icon, iconColor, label, value, change, changeDir }) {
  return (
    <div className="cd-stat">
      <div className={`cd-stat-icon cd-stat-icon--${iconColor}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div className="cd-stat-info">
        <div className="cd-stat-label">{label}</div>
        <div className="cd-stat-value">{value}</div>
        {change && (
          <div className={`cd-stat-change cd-stat-change--${changeDir}`}>
            <i className={`bi bi-arrow-${changeDir === "up" ? "up" : "down"}`} />
            {change}
          </div>
        )}
      </div>
    </div>
  );
}

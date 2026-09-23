export default function AdminStatCard({ icon, iconColor, label, value, change, changeDir }) {
  return (
    <div className="adm-stat">
      <div className={`adm-stat-icon adm-stat-icon--${iconColor}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div className="adm-stat-info">
        <div className="adm-stat-label">{label}</div>
        <div className="adm-stat-value">{value}</div>
        {change && (
          <div className={`adm-stat-change adm-stat-change--${changeDir}`}>
            <i className={`bi bi-arrow-${changeDir === "up" ? "up" : "down"}`} />
            {change}
          </div>
        )}
      </div>
    </div>
  );
}

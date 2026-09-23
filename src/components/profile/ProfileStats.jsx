function ProfileStats({ stats = [] }) {
  if (stats.length === 0) return null;

  return (
    <div className="prf-stats-grid">
      {stats.map((stat) => (
        <div className="prf-stat-card" key={stat.label}>
          <div className="prf-stat-icon">
            <i className={`bi ${stat.icon}`} />
          </div>
          <div className="prf-stat-value">{stat.value}</div>
          <div className="prf-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileStats;

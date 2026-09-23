function StatCard({ icon, iconColor, value, label, trend, trendDirection }) {
  return (
    <div className="dash-stat">
      <div className={`dash-stat-icon dash-stat-icon--${iconColor}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <div className="dash-stat-value">{value}</div>
        <div className="dash-stat-meta">
          <span className="dash-stat-label">{label}</span>
          {trend && (
            <span className={`dash-stat-trend dash-stat-trend--${trendDirection}`}>
              <i className={`bi bi-arrow-${trendDirection === 'up' ? 'up' : 'down'}`} />
              {trend}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatCard;

function StatsCard({ icon, iconBg, iconColor, value, label, description }) {
  return (
    <div className="stats-card h-100">
      <div
        className="stats-card-icon"
        style={{ backgroundColor: iconBg }}
      >
        <i
          className={`bi ${icon}`}
          style={{ color: iconColor, fontSize: '1.5rem' }}
          aria-hidden="true"
        />
      </div>
      <div className="stats-card-value">{value}</div>
      <div className="stats-card-label">{label}</div>
      <p className="stats-card-description">{description}</p>
    </div>
  );
}

export default StatsCard;

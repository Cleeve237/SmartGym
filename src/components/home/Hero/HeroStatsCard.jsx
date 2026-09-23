function HeroStatsCard({ icon, iconBg, iconColor, value, label, position }) {
  const positionClass = `hero-float-card--${position}`;

  return (
    <div className={`hero-float-card ${positionClass}`}>
      <div
        className="hero-float-card-icon"
        style={{ backgroundColor: iconBg }}
      >
        <i className={`bi ${icon}`} style={{ color: iconColor, fontSize: '1rem' }} />
      </div>
      <div>
        <div className="hero-float-card-value">{value}</div>
        <div className="hero-float-card-label">{label}</div>
      </div>
    </div>
  );
}

export default HeroStatsCard;

function StepCard({ number, icon, iconBg, iconColor, title, description }) {
  return (
    <div className="hiw-step-card">
      <div className="hiw-step-number">{number}</div>
      <div
        className="hiw-step-icon"
        style={{ backgroundColor: iconBg }}
      >
        <i
          className={`bi ${icon}`}
          style={{ color: iconColor, fontSize: '1.75rem' }}
          aria-hidden="true"
        />
      </div>
      <h3 className="hiw-step-title">{title}</h3>
      <p className="hiw-step-description">{description}</p>
    </div>
  );
}

export default StepCard;

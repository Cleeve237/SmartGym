function BenefitCard({ icon, iconBg, iconColor, title, description, reassurance }) {
  return (
    <div className="benefit-card">
      <div
        className="benefit-card-icon"
        style={{ backgroundColor: iconBg }}
      >
        <i
          className={`bi ${icon}`}
          style={{ color: iconColor, fontSize: '1.25rem' }}
          aria-hidden="true"
        />
      </div>
      <div className="benefit-card-content">
        <h3 className="benefit-card-title">{title}</h3>
        <p className="benefit-card-description">{description}</p>
        {reassurance && (
          <span className="benefit-card-reassurance">
            <i className="bi bi-check2" />
            {reassurance}
          </span>
        )}
      </div>
    </div>
  );
}

export default BenefitCard;

function DisciplineCard({ name, description, icon, color }) {
  return (
    <div className="discipline-card">
      <div
        className="discipline-card-icon"
        style={{ backgroundColor: `${color}12` }}
      >
        <i
          className={`bi ${icon}`}
          style={{ color, fontSize: '1.625rem' }}
          aria-hidden="true"
        />
      </div>
      <h3 className="discipline-card-name">{name}</h3>
      <p className="discipline-card-description">{description}</p>
      <span className="discipline-card-link">
        Decouvrir
        <i className="bi bi-arrow-right" />
      </span>
    </div>
  );
}

export default DisciplineCard;

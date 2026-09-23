function ProgramCardPreview({ program }) {
  return (
    <div className="pl-program-card">
      <div className="pl-program-image" style={{ background: program.gradient }}>
        <i className={`bi ${program.icon}`} />
        <span className="pl-program-level">{program.level}</span>
        <span className="pl-program-rating">
          <i className="bi bi-star-fill" />
          {program.rating}
        </span>
      </div>
      <div className="pl-program-body">
        <h3 className="pl-program-name">{program.name}</h3>
        <p className="pl-program-coach">
          <i className="bi bi-person-circle me-1" />
          {program.coach}
        </p>
        <div className="pl-program-meta">
          <span className="pl-program-meta-item">
            <i className="bi bi-clock" />
            {program.duration}
          </span>
          <span className="pl-program-meta-item">
            <i className="bi bi-bar-chart" />
            {program.level}
          </span>
          <span className="pl-program-meta-item">
            <i className="bi bi-calendar-week" />
            {program.sessions}
          </span>
        </div>
        <div className="pl-program-price">
          {program.price} <span>FCFA</span>
        </div>
        <div className="pl-program-actions">
          <a href="#" className="btn btn-sm btn-outline-primary">
            D&eacute;tails
          </a>
          <a href="#" className="btn btn-sm btn-primary">
            R&eacute;server
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProgramCardPreview;

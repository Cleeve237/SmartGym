function CoachPrograms({ programs }) {
  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-clipboard2-pulse" />
        Programmes proposes
      </h2>
      <div className="cd-programs-grid">
        {programs.map((program) => (
          <article key={program.id} className="cd-program-card">
            <div className="cd-program-header">
              <h3 className="cd-program-name">{program.name}</h3>
              <span className="cd-program-price">{program.price}</span>
            </div>
            <p className="cd-program-desc">{program.description}</p>
            <div className="cd-program-meta">
              <span className="cd-program-meta-item">
                <i className="bi bi-clock" />
                {program.duration}
              </span>
              <span className="cd-program-meta-item">
                <i className="bi bi-calendar-check" />
                {program.frequency}
              </span>
            </div>
            <button type="button" className="cd-program-btn">
              Voir le programme
              <i className="bi bi-arrow-right" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CoachPrograms;

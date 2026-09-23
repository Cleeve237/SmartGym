function ProgramObjectives({ objectives }) {
  if (!objectives?.length) return null;

  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-bullseye" />
          Objectifs
        </h2>
      </div>
      <div className="pg-section-body">
        <ul className="pg-objectives-list">
          {objectives.map((obj, i) => (
            <li key={i} className="pg-objectives-item">
              <div className="pg-objectives-icon">
                <i className="bi bi-check-lg" />
              </div>
              <span className="pg-objectives-text">{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgramObjectives;

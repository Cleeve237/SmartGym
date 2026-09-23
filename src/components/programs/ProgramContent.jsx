function ProgramContent({ weeks }) {
  if (!weeks?.length) return null;

  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-list-check" />
          Contenu du programme
        </h2>
      </div>
      <div className="pg-section-body">
        <ul className="pg-content-list">
          {weeks.map((week, i) => (
            <li key={i} className="pg-content-item">
              <div className="pg-content-number">{i + 1}</div>
              <div className="pg-content-info">
                <div className="pg-content-name">{week.title}</div>
                <div className="pg-content-desc">{week.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgramContent;

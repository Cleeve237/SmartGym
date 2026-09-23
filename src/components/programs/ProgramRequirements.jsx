function ProgramRequirements({ requirements }) {
  if (!requirements?.length) return null;

  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-clipboard-check" />
          Prerequis
        </h2>
      </div>
      <div className="pg-section-body">
        <ul className="pg-list">
          {requirements.map((req, i) => (
            <li key={i} className="pg-list-item">
              <i className="bi bi-check-circle-fill" />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgramRequirements;

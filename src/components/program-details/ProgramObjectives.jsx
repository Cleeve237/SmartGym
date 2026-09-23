function ProgramObjectives({ objectives }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-bullseye" /><h2>Objectifs</h2>
      </div>
      <div className="pd-grid">
        {objectives.map((o, i) => (
          <div key={i} className="pd-grid-item">
            <div className="pd-grid-icon"><i className="bi bi-check-lg" /></div>
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProgramObjectives;

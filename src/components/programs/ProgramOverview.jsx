function ProgramOverview({ program }) {
  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-info-circle" />
          Apercu
        </h2>
      </div>
      <div className="pg-section-body">
        <p>{program.description}</p>
      </div>
    </div>
  );
}

export default ProgramOverview;

function ProgramDescription({ description }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-info-circle" /><h2>Description</h2>
      </div>
      <p className="pd-desc">{description}</p>
    </div>
  );
}
export default ProgramDescription;

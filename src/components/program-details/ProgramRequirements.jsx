function ProgramRequirements({ requirements }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-clipboard-check" /><h2>Pré-requis</h2>
      </div>
      <ul className="pd-req-list">
        {requirements.map((r, i) => (
          <li key={i} className="pd-req-item">
            <span className="pd-req-icon"><i className="bi bi-check-circle-fill" /></span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProgramRequirements;

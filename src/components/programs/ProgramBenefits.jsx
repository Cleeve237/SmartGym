function ProgramBenefits({ benefits }) {
  if (!benefits?.length) return null;

  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-award" />
          Avantages
        </h2>
      </div>
      <div className="pg-section-body">
        <ul className="pg-list">
          {benefits.map((b, i) => (
            <li key={i} className="pg-list-item">
              <i className="bi bi-stars" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgramBenefits;

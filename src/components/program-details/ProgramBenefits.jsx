function ProgramBenefits({ benefits }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-gift" /><h2>Bénéfices</h2>
      </div>
      <div className="pd-grid">
        {benefits.map((b, i) => (
          <div key={i} className="pd-grid-item">
            <div className="pd-grid-icon"><i className="bi bi-star-fill" /></div>
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProgramBenefits;

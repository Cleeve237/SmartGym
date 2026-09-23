function CoachSpecialties({ specialties }) {
  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-lightning-charge" />
        Specialites
      </h2>
      <div className="cd-specialties-list">
        {specialties.map((specialty) => (
          <span key={specialty} className="cd-specialty-tag">
            <i className="bi bi-check2" aria-hidden="true" />
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CoachSpecialties;

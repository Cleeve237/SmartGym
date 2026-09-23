function CoachBiography({ biography }) {
  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-person-lines-fill" />
        A propos du coach
      </h2>
      <p className="cd-bio-text">{biography}</p>
    </div>
  );
}

export default CoachBiography;

export default function CoachBiography({ bio }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-person-lines-fill" />
        <h2>À propos</h2>
      </div>
      <div className="cp-bio">{bio}</div>
    </div>
  );
}

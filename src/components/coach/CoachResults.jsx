import CoachCard from '../home/PopularCoaches/CoachCard';

function CoachResults({ coaches }) {
  if (!coaches || coaches.length === 0) {
    return (
      <div className="coaches-empty">
        <div className="coaches-empty-icon">
          <i className="bi bi-search" />
        </div>
        <h3 className="coaches-empty-title">Aucun coach trouve</h3>
        <p className="coaches-empty-text">
          Essayez de modifier vos criteres de recherche ou d&apos;elargir vos filtres.
        </p>
      </div>
    );
  }

  return (
    <div className="coaches-results-grid">
      {coaches.map((coach) => (
        <CoachCard key={coach.id} coach={coach} />
      ))}
    </div>
  );
}

export default CoachResults;

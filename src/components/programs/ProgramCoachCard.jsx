import { Link } from 'react-router-dom';

function ProgramCoachCard({ program }) {
  const initials = program.coachName
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="pg-coach-card">
      <div className="pg-coach-avatar">{initials}</div>
      <div className="pg-coach-info">
        <div className="pg-coach-name">{program.coachName}</div>
        <div className="pg-coach-city">
          <i className="bi bi-geo-alt me-1" />
          {program.coachCity}
        </div>
        <div className="pg-coach-rating">
          <i className="bi bi-star-fill" />
          <span>{program.coachRating?.toFixed(1) || '5.0'}</span>
          <small>({program.coachReviewCount || 0})</small>
        </div>
      </div>
      <Link
        to={`/coaches/${program.coachId}`}
        className="btn btn-sm btn-outline-primary"
      >
        Voir profil
      </Link>
    </div>
  );
}

export default ProgramCoachCard;

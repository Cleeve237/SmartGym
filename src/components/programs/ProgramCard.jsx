import { Link } from 'react-router-dom';
import DifficultyBadge from './DifficultyBadge';
import DurationBadge from './DurationBadge';

function ProgramCard({ program }) {
  const initials = program.coachName
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="pg-card">
      <div className="pg-card-image">
        {program.image ? (
          <img src={program.image} alt={program.title} />
        ) : (
          <div className="pg-card-image-placeholder">
            <i className="bi bi-trophy" />
          </div>
        )}
        <div className="pg-card-badges">
          <DifficultyBadge level={program.difficulty} />
          <DurationBadge weeks={program.weeks} />
        </div>
      </div>

      <div className="pg-card-body">
        <span className="pg-card-category">{program.category}</span>
        <h3 className="pg-card-title">{program.title}</h3>

        <div className="pg-card-coach">
          <div className="pg-card-coach-avatar">{initials}</div>
          <span>{program.coachName}</span>
        </div>

        <div className="pg-card-meta">
          <span className="pg-card-meta-item">
            <i className="bi bi-calendar3" />
            {program.weeks} sem.
          </span>
          <span className="pg-card-meta-item">
            <i className="bi bi-clock" />
            {program.sessionsPerWeek}x/sem.
          </span>
          <div className="pg-card-rating">
            <i className="bi bi-star-fill" />
            <span>{program.rating?.toFixed(1) || '—'}</span>
            <small>({program.reviewCount || 0})</small>
          </div>
        </div>
      </div>

      <div className="pg-card-footer">
        <div className="pg-card-price">
          {program.price?.toLocaleString()} <small>FCFA</small>
        </div>
        <div className="pg-card-actions">
          <Link
            to={`/programs/${program.id}`}
            className="btn btn-sm btn-primary"
          >
            Voir
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;

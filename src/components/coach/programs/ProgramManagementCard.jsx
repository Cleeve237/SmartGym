import { Link } from 'react-router-dom';
import ProgramStatusBadge from './ProgramStatusBadge';
import ProgramActionsDropdown from './ProgramActionsDropdown';

function ProgramManagementCard({ program, onDelete, onDuplicate, onTogglePublish }) {
  return (
    <div className="cd-pgm-card">
      <div className="cd-pgm-card-image">
        {program.image ? (
          <img src={program.image} alt={program.title} />
        ) : (
          <i className="bi bi-trophy" aria-hidden="true" />
        )}
        <div className="cd-pgm-card-badges">
          <ProgramStatusBadge status={program.status} />
        </div>
        <div className="cd-pgm-card-actions-top">
          <ProgramActionsDropdown
            onView={() => {}}
            onEdit={() => {}}
            onDuplicate={() => onDuplicate?.(program)}
            onPublish={() => onTogglePublish?.(program, true)}
            onUnpublish={() => onTogglePublish?.(program, false)}
            onDelete={() => onDelete?.(program)}
            isPublished={program.status === 'active'}
          />
        </div>
      </div>

      <div className="cd-pgm-card-body">
        <span className="cd-pgm-card-category">{program.category}</span>
        <h3 className="cd-pgm-card-title">
          <Link to={`/coach/programs/${program.id}`} className="text-decoration-none text-inherit" style={{ color: 'inherit' }}>
            {program.title}
          </Link>
        </h3>
        <p className="cd-pgm-card-desc">{program.description}</p>
        <div className="cd-pgm-card-meta">
          <span className="cd-pgm-card-meta-item">
            <i className="bi bi-calendar3" /> {program.weeks} sem.
          </span>
          <span className="cd-pgm-card-meta-item">
            <i className="bi bi-people" /> {program.bookings || 0}
          </span>
          <span className="cd-pgm-card-meta-item">
            <i className="bi bi-star-fill" style={{ color: 'var(--color-warning)' }} /> {program.rating?.toFixed(1) || '—'}
          </span>
        </div>
      </div>

      <div className="cd-pgm-card-footer">
        <span className="cd-pgm-card-price">
          {program.price?.toLocaleString()} <small>FCFA</small>
        </span>
        <div className="d-flex gap-1">
          <Link to={`/coach/programs/${program.id}`} className="btn btn-sm btn-outline-primary">
            Voir
          </Link>
          <Link to={`/coach/programs/${program.id}/edit`} className="btn btn-sm btn-primary">
            Modifier
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramManagementCard;

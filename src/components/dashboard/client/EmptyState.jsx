import { Link } from 'react-router-dom';

function EmptyState({ icon = 'bi-inbox', title = 'Aucune donnee', description = '', action, actionTo }) {
  return (
    <div className="dash-empty">
      <div className="dash-empty-icon">
        <i className={`bi ${icon}`} />
      </div>
      <div className="dash-empty-title">{title}</div>
      {description && <p className="dash-empty-text">{description}</p>}
      {actionTo && (
        <Link to={actionTo} className="dash-fav-coach-btn">
          {action || 'Voir plus'}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;

import { Link } from 'react-router-dom';
import DifficultyBadge from './DifficultyBadge';
import CategoryBadge from './CategoryBadge';

function FeaturedProgramCard({ program }) {
  return (
    <div className="pg-featured">
      <div className="pg-featured-image">
        {program.image ? (
          <img
            src={program.image}
            alt={program.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div className="pg-featured-image-placeholder">
            <i className="bi bi-trophy" />
          </div>
        )}
      </div>

      <div className="pg-featured-body">
        <span className="pg-featured-label">
          <i className="bi bi-star-fill me-1" />
          Programme en vedette
        </span>
        <h2 className="pg-featured-title">{program.title}</h2>
        <p className="pg-featured-desc">{program.description}</p>

        <div className="pg-detail-badges mb-2">
          <CategoryBadge category={program.category} />
          <DifficultyBadge level={program.difficulty} />
          <DurationBadge weeks={program.weeks} />
        </div>

        <div className="pg-featured-meta">
          <span className="pg-featured-meta-item">
            <i className="bi bi-person" />
            {program.coachName}
          </span>
          <span className="pg-featured-meta-item">
            <i className="bi bi-people" />
            {program.enrolledCount || 0} inscrits
          </span>
          <span className="pg-featured-meta-item">
            <i className="bi bi-star-fill" style={{ color: 'var(--color-warning)' }} />
            {program.rating?.toFixed(1)} ({program.reviewCount || 0})
          </span>
        </div>

        <Link
          to={`/programs/${program.id}`}
          className="btn btn-primary"
        >
          Decouvrir ce programme
          <i className="bi bi-arrow-right ms-2" />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProgramCard;

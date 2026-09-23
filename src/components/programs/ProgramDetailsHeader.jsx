import DifficultyBadge from './DifficultyBadge';
import CategoryBadge from './CategoryBadge';
import DurationBadge from './DurationBadge';

function ProgramDetailsHeader({ program }) {
  const coachInitials = program.coachName
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="pg-detail-header">
      <div className="container">
        <div className="pg-detail-grid">
          <div>
            <div className="pg-detail-image">
              {program.image ? (
                <img src={program.image} alt={program.title} />
              ) : (
                <i className="bi bi-trophy" />
              )}
            </div>
          </div>

          <div>
            <div className="pg-detail-badges">
              <CategoryBadge category={program.category} />
              <DifficultyBadge level={program.difficulty} />
              <DurationBadge weeks={program.weeks} />
            </div>

            <h1 className="pg-detail-title">{program.title}</h1>

            <div className="pg-detail-coach">
              <div className="pg-detail-coach-avatar">{coachInitials}</div>
              <div className="pg-detail-coach-info">
                <div className="pg-detail-coach-name">{program.coachName}</div>
                <div className="pg-detail-coach-city">
                  <i className="bi bi-geo-alt me-1" />
                  {program.coachCity}
                </div>
              </div>
            </div>

            <div className="pg-detail-rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <i
                  key={s}
                  className={`bi ${
                    s <= Math.round(program.rating || 0)
                      ? 'bi-star-fill'
                      : 'bi-star'
                  }`}
                  style={{ color: 'var(--color-warning)', fontSize: '1rem' }}
                />
              ))}
              <span className="ms-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {program.rating?.toFixed(1)} ({program.reviewCount || 0} avis)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramDetailsHeader;

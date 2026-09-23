import CoachBadge from '../../home/PopularCoaches/CoachBadge';
import CoachRating from '../../home/PopularCoaches/CoachRating';

function CoachHeader({ coach }) {
  const { name, photo, speciality, city, rating, reviewsCount, sessionsCount, yearsExperience, verified } = coach;

  return (
    <header className="cd-header">
      <div className="cd-header-layout">
        {/* Photo */}
        <div className="cd-header-photo">
          {photo ? (
            <img src={photo} alt={`Photo de ${name}`} />
          ) : (
            <div className="cd-header-photo-placeholder">
              <i className="bi bi-person-fill" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="cd-header-content">
          <div className="cd-header-top">
            <div>
              <h1 className="cd-header-name">{name}</h1>
              <div className="cd-header-meta">
                <span className="cd-header-location">
                  <i className="bi bi-geo-alt-fill" />
                  {city}
                </span>
                <span className="cd-header-specialty">{speciality}</span>
                {verified && <CoachBadge />}
              </div>
            </div>
            <div className="cd-header-actions">
              <button type="button" className="cd-header-action" aria-label="Ajouter aux favoris">
                <i className="bi bi-heart" />
              </button>
              <button type="button" className="cd-header-action" aria-label="Partager le profil">
                <i className="bi bi-share" />
              </button>
            </div>
          </div>

          <div className="cd-header-rating-row">
            <CoachRating rating={rating} reviewsCount={reviewsCount} />
          </div>

          <div className="cd-header-stats">
            <div className="cd-header-stat">
              <div className="cd-header-stat-value">{sessionsCount}+</div>
              <div className="cd-header-stat-label">Seances realisees</div>
            </div>
            <div className="cd-header-stat">
              <div className="cd-header-stat-value">{reviewsCount}</div>
              <div className="cd-header-stat-label">Avis clients</div>
            </div>
            <div className="cd-header-stat">
              <div className="cd-header-stat-value">{yearsExperience} ans</div>
              <div className="cd-header-stat-label">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CoachHeader;

import { Link } from 'react-router-dom';
import CoachBadge from './CoachBadge';
import AvailabilityBadge from './AvailabilityBadge';
import LocationBadge from './LocationBadge';
import PriceBadge from './PriceBadge';
import RatingDisplay from './RatingDisplay';

function AdvancedCoachCard({ coach }) {
  const {
    id,
    name,
    photo,
    city,
    distance,
    specialties = [],
    experience,
    rating,
    reviewsCount,
    price,
    sessionDuration,
    available,
    verified,
    premium,
    isNew,
  } = coach;

  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="mp-card">
      {/* Image */}
      <div className="mp-card-image">
        {photo ? (
          <img src={photo} alt={`Photo de ${name}`} loading="lazy" />
        ) : (
          <div className="mp-card-image-placeholder">
            <i className="bi bi-person-fill" />
          </div>
        )}

        <div className="mp-card-badges">
          {verified && <CoachBadge type="verified" />}
          {premium && <CoachBadge type="premium" />}
          {isNew && <CoachBadge type="new" />}
        </div>

        <div className="mp-card-availability">
          <AvailabilityBadge available={available} />
        </div>
      </div>

      {/* Body */}
      <div className="mp-card-body">
        <h3 className="mp-card-name">{name}</h3>

        <LocationBadge city={city} distance={distance} />

        {specialties.length > 0 && (
          <div className="mp-card-specialties">
            {specialties.slice(0, 3).map((s) => (
              <span className="mp-card-specialty-tag" key={s}>{s}</span>
            ))}
            {specialties.length > 3 && (
              <span className="mp-card-specialty-tag">+{specialties.length - 3}</span>
            )}
          </div>
        )}

        <div className="mp-card-meta">
          <RatingDisplay rating={rating} reviewsCount={reviewsCount} />
          {experience > 0 && (
            <span className="mp-card-meta-item">
              <i className="bi bi-clock-history" />
              {experience} {experience > 1 ? 'ans' : 'an'}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mp-card-footer">
        <PriceBadge price={price} duration={sessionDuration} />
        <div className="mp-card-actions">
          <Link
            to={`/coaches/${id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Voir
          </Link>
          <Link
            to={`/booking/${id}`}
            className="btn btn-primary btn-sm"
          >
            Reserver
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AdvancedCoachCard;

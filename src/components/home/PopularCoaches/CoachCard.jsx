import { Link } from 'react-router-dom';
import CoachBadge from './CoachBadge';
import CoachRating from './CoachRating';

function CoachCard({ coach }) {
  const {
    id,
    name,
    photo,
    speciality,
    city,
    price,
    rating,
    reviewsCount,
    availability,
    verified,
  } = coach;

  return (
    <article className="coach-card">
      {/* Image */}
      <div className="coach-card-image">
        {photo ? (
          <img src={photo} alt={`Photo de ${name}`} loading="lazy" />
        ) : (
          <div className="coach-card-image-placeholder">
            <i className="bi bi-person-fill" />
          </div>
        )}
        {verified && <CoachBadge />}
        {availability && (
          <span className="coach-availability">
            <span className="coach-availability-dot" />
            {availability}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="coach-card-body">
        <h3 className="coach-card-name">{name}</h3>
        <p className="coach-card-specialty">{speciality}</p>
        <CoachRating rating={rating} reviewsCount={reviewsCount} />
      </div>

      {/* Info */}
      <div className="coach-card-info">
        <span className="coach-card-location">
          <i className="bi bi-geo-alt" />
          {city}
        </span>
        <span className="coach-card-price">{price}</span>
      </div>

      {/* Footer */}
      <div className="coach-card-footer">
        <Link to={`/coaches/${id}`} className="btn btn-primary btn-sm coach-card-btn">
          Voir le profil
        </Link>
      </div>
    </article>
  );
}

export default CoachCard;

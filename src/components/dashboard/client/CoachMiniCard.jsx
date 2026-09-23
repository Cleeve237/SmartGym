import { Link } from 'react-router-dom';

function CoachMiniCard({ name, specialty, city, rating, id }) {
  return (
    <Link to={`/coaches/${id}`} className="dash-coach-mini">
      <div className="dash-coach-mini-photo">
        <i className="bi bi-person-fill" />
      </div>
      <div className="dash-coach-mini-info">
        <div className="dash-coach-mini-name">{name}</div>
        <div className="dash-coach-mini-spec">{specialty}</div>
        <div className="dash-coach-mini-meta">
          <span><i className="bi bi-geo-alt" /> {city}</span>
          <span className="dash-coach-mini-stars">
            <i className="bi bi-star-fill" /> {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CoachMiniCard;

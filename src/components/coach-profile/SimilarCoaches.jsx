import { Link } from 'react-router-dom';
import CoachRating from './CoachRating';

function CoachSimilarCard({ coach }) {
  return (
    <Link to={`/coaches/${coach.id}`} className="cp-coach-card">
      <div
        className="cp-coach-card-avatar"
        style={{ background: coach.color || '#16A34A' }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>
          {coach.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="cp-coach-card-name">{coach.name}</div>
      <div className="cp-coach-card-spec">{coach.speciality}</div>
      <CoachRating rating={coach.rating} count={coach.reviewsCount} />
      <div className="cp-coach-card-meta mt-1">
        <span><i className="bi bi-geo-alt" /> {coach.city}</span>
        <span><strong>{coach.price.toLocaleString()} FCFA</strong></span>
      </div>
    </Link>
  );
}

export default function SimilarCoaches({ currentId, coaches }) {
  const similar = coaches.filter(c => c.id !== currentId).slice(0, 4);
  if (similar.length === 0) return null;
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-people-fill" />
        <h2>Coaches similaires</h2>
      </div>
      <div className="cp-similar-grid">
        {similar.map(c => (
          <CoachSimilarCard key={c.id} coach={c} />
        ))}
      </div>
    </div>
  );
}

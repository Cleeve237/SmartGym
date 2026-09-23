import { Link } from 'react-router-dom';
import { getCoachImage } from './mockDetails';

function CoachSummary({ program }) {
  const name = program.coachName || program.coach;
  const initials = name?.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();

  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-person-badge" /><h2>Votre coach</h2>
      </div>
      <div className="pd-coach">
        <div className="pd-coach-avatar" style={{background:'var(--color-primary)'}}>{initials}</div>
        <div className="pd-coach-info">
          <div className="pd-coach-name">{name}</div>
          <div className="pd-coach-role">Coach certifié SmartGym</div>
          <div className="pd-coach-stats">
            <span className="pd-coach-stat"><i className="bi bi-star-fill" style={{color:'#F59E0B'}} />{program.coachRating || program.rating}</span>
            <span className="pd-coach-stat"><i className="bi bi-people" />{program.coachReviewCount || program.reviewCount} clients</span>
            <span className="pd-coach-stat"><i className="bi bi-geo-alt" />{program.coachCity || program.city}</span>
          </div>
        </div>
      </div>
      <div className="pd-btn-group">
        <Link to={`/coaches/${program.coachId || '1'}`} className="pd-btn pd-btn--outline">Voir le profil</Link>
        <button className="pd-btn pd-btn--secondary">Contacter</button>
      </div>
    </div>
  );
}
export default CoachSummary;

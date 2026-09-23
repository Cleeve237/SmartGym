import { Link } from 'react-router-dom';
import ProgramRating from './ProgramRating';
import ProgramPrice from './ProgramPrice';
import ProgramFavoriteButton from './ProgramFavoriteButton';
import ProgramCompareCheckbox from './ProgramCompareCheckbox';

function ProgramCard({ program, isFavorite, isComparing, onToggleFavorite, onToggleCompare }) {
  const initials = program.coach?.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="pc-card">
      <div className="pc-card-image" style={{ background: `linear-gradient(135deg, ${program.color}22, ${program.color}44)` }}>
        <i className={`bi bi-trophy pc-card-image-icon`} />
        <span className="pc-card-badge">{program.category}</span>
        <ProgramFavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      </div>

      <div className="pc-card-body">
        <div className="pc-card-category">{program.type}</div>
        <h3 className="pc-card-title">{program.title}</h3>
        <p className="pc-card-desc">{program.description}</p>

        <div className="pc-card-coach">
          <div className="pc-card-avatar" style={{ background: program.color }}>{initials}</div>
          <span className="pc-card-coach-name">{program.coach}</span>
          <span className="pc-card-city"><i className="bi bi-geo-alt" />{program.city}</span>
        </div>

        <div className="pc-card-meta">
          <span className="pc-card-meta-item"><i className="bi bi-calendar3" />{program.weeks} sem.</span>
          <span className="pc-card-meta-item"><i className="bi bi-clock" />{program.sessionsPerWeek}x/sem.</span>
          <span className="pc-card-meta-item"><i className="bi bi-clock-history" />{program.sessionMinutes} min</span>
          <span className="pc-card-meta-item"><i className="bi bi-people" />{program.enrolled}</span>
        </div>

        <ProgramRating rating={program.rating} reviews={program.reviews} />
      </div>

      <div className="pc-card-footer">
        <ProgramPrice price={program.price} oldPrice={program.oldPrice} />
        <div className="pc-card-actions">
          <Link to={`/programs/${program.id}`} className="pc-card-btn pc-card-btn--outline">Détails</Link>
          <button className="pc-card-btn pc-card-btn--primary">Réserver</button>
        </div>
      </div>

      <ProgramCompareCheckbox isComparing={isComparing} onToggle={onToggleCompare} />
    </div>
  );
}
export default ProgramCard;

import { Link } from 'react-router-dom';
import ProgramRating from './ProgramRating';
import ProgramPrice from './ProgramPrice';
import ProgramFavoriteButton from './ProgramFavoriteButton';
import ProgramCompareCheckbox from './ProgramCompareCheckbox';

function ProgramRow({ program, isFavorite, isComparing, onToggleFavorite, onToggleCompare }) {
  const initials = program.coach?.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="pc-row">
      <div className="pc-row-image" style={{ background: `linear-gradient(135deg, ${program.color}22, ${program.color}44)` }}>
        <i className="bi bi-trophy pc-card-image-icon" />
        <ProgramFavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      </div>

      <div className="pc-row-body">
        <div className="pc-row-header">
          <div>
            <div className="pc-card-category">{program.category}</div>
            <h3 className="pc-card-title" style={{marginBottom:0}}>{program.title}</h3>
          </div>
          <ProgramPrice price={program.price} oldPrice={program.oldPrice} />
        </div>

        <p className="pc-card-desc" style={{marginTop:'.5rem',marginBottom:'.5rem'}}>{program.description}</p>

        <div className="pc-row-meta">
          <span className="pc-card-meta-item"><i className="bi bi-calendar3" />{program.weeks} sem.</span>
          <span className="pc-card-meta-item"><i className="bi bi-clock" />{program.sessionsPerWeek}x/sem.</span>
          <span className="pc-card-meta-item"><i className="bi bi-clock-history" />{program.sessionMinutes} min</span>
          <span className="pc-card-meta-item"><i className="bi bi-geo-alt" />{program.city}</span>
          <span className="pc-card-meta-item"><i className="bi bi-people" />{program.enrolled} inscrits</span>
          <ProgramRating rating={program.rating} reviews={program.reviews} />
        </div>

        <div className="pc-card-coach" style={{marginBottom:'.25rem'}}>
          <div className="pc-card-avatar" style={{background: program.color}}>{initials}</div>
          <span className="pc-card-coach-name">{program.coach}</span>
        </div>

        <div className="pc-row-footer">
          <div style={{display:'flex',gap:'.5rem'}}>
            <Link to={`/programs/${program.id}`} className="pc-card-btn pc-card-btn--outline">Détails</Link>
            <button className="pc-card-btn pc-card-btn--primary">Réserver</button>
          </div>
          <ProgramCompareCheckbox isComparing={isComparing} onToggle={onToggleCompare} />
        </div>
      </div>
    </div>
  );
}
export default ProgramRow;

import { Link } from 'react-router-dom';
import ProgramCard from './ProgramCard';

function PopularPrograms({ programs, favorites, onToggleFavorite }) {
  return (
    <div className="pc-section">
      <div className="pc-section-header">
        <h2><i className="bi bi-fire" style={{color:'var(--color-orange)'}} /> Programmes populaires</h2>
        <Link to="/programs/catalog" className="pc-section-link">Voir tout</Link>
      </div>
      <div className="pc-scroll">
        {programs.map((p) => (
          <ProgramCard
            key={p.id} program={p}
            isFavorite={favorites.includes(p.id)}
            isComparing={false}
            onToggleFavorite={() => onToggleFavorite(p.id)}
            onToggleCompare={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
export default PopularPrograms;

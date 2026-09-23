import ProgramCard from './ProgramCard';

function ProgramGrid({ programs, favorites, compareList, onToggleFavorite, onToggleCompare }) {
  return (
    <div className="pc-grid">
      {programs.map((p) => (
        <ProgramCard
          key={p.id} program={p}
          isFavorite={favorites.includes(p.id)}
          isComparing={compareList.includes(p.id)}
          onToggleFavorite={() => onToggleFavorite(p.id)}
          onToggleCompare={() => onToggleCompare(p.id)}
        />
      ))}
    </div>
  );
}
export default ProgramGrid;

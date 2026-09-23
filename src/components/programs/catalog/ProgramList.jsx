import ProgramRow from './ProgramRow';

function ProgramList({ programs, favorites, compareList, onToggleFavorite, onToggleCompare }) {
  return (
    <div className="pc-list">
      {programs.map((p) => (
        <ProgramRow
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
export default ProgramList;

import { DIFFICULTIES } from './mockPrograms';

function DifficultyFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Niveau</span>
      {DIFFICULTIES.map((d) => (
        <label key={d} className="pc-filter-option">
          <input type="radio" name="difficulty" checked={value === d} onChange={() => onChange(value === d ? '' : d)} />
          {d}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default DifficultyFilter;

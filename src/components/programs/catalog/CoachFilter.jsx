import { COACHES } from './mockPrograms';

function CoachFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Coach</span>
      {COACHES.map((c) => (
        <label key={c} className="pc-filter-option">
          <input type="radio" name="coach" checked={value === c} onChange={() => onChange(value === c ? '' : c)} />
          {c}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default CoachFilter;

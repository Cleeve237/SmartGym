import { CITIES } from './mockPrograms';

function CityFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Ville</span>
      {CITIES.map((c) => (
        <label key={c} className="pc-filter-option">
          <input type="radio" name="city" checked={value === c} onChange={() => onChange(value === c ? '' : c)} />
          {c}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default CityFilter;

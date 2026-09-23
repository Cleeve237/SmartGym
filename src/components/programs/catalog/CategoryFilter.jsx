import { CATEGORIES } from './mockPrograms';

function CategoryFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Catégorie</span>
      {CATEGORIES.map((cat) => (
        <label key={cat} className="pc-filter-option">
          <input type="radio" name="category" checked={value === cat} onChange={() => onChange(value === cat ? '' : cat)} />
          {cat}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default CategoryFilter;

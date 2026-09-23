const RATINGS = [
  { value: 4, label: '4+ ★★★★☆' },
  { value: 3, label: '3+ ★★★☆☆' },
];

function RatingFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Note minimum</span>
      {RATINGS.map((r) => (
        <label key={r.value} className="pc-filter-option">
          <input type="radio" name="rating" checked={value === r.value} onChange={() => onChange(value === r.value ? 0 : r.value)} />
          {r.label}
        </label>
      ))}
      {value > 0 && <button className="pc-filter-clear" onClick={() => onChange(0)} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default RatingFilter;

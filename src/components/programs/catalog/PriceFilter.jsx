const PRICE_RANGES = [
  { value: 'free', label: 'Gratuit', max: 0 },
  { value: 'budget', label: '0 - 10 000 FCFA', max: 10000 },
  { value: 'mid', label: '10 000 - 25 000 FCFA', max: 25000 },
  { value: 'premium', label: '25 000 FCFA+', max: Infinity },
];

function PriceFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Prix</span>
      {PRICE_RANGES.map((r) => (
        <label key={r.value} className="pc-filter-option">
          <input type="radio" name="price" checked={value === r.value} onChange={() => onChange(value === r.value ? '' : r.value)} />
          {r.label}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default PriceFilter;

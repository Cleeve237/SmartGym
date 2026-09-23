const DURATIONS = [
  { value: 'short', label: '≤ 4 semaines' },
  { value: 'medium', label: '5-8 semaines' },
  { value: 'long', label: '9+ semaines' },
];

function DurationFilter({ value, onChange }) {
  return (
    <div className="pc-filter-group">
      <span className="pc-filter-label">Durée</span>
      {DURATIONS.map((d) => (
        <label key={d.value} className="pc-filter-option">
          <input type="radio" name="duration" checked={value === d.value} onChange={() => onChange(value === d.value ? '' : d.value)} />
          {d.label}
        </label>
      ))}
      {value && <button className="pc-filter-clear" onClick={() => onChange('')} style={{marginTop:'.25rem',fontSize:'.75rem'}}>✕ Effacer</button>}
    </div>
  );
}
export default DurationFilter;

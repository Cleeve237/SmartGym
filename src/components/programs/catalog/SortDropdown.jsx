const SORT_OPTIONS = [
  { value: 'popular', label: 'Popularité' },
  { value: 'newest', label: 'Nouveautés' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Meilleure note' },
  { value: 'duration', label: 'Durée' },
];

function SortDropdown({ value, onChange }) {
  return (
    <select className="pc-sort-select" value={value} onChange={(e) => onChange(e.target.value)} aria-label="Trier par">
      {SORT_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
export default SortDropdown;

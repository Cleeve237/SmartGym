function SortDropdown({ sortBy, onSortChange }) {
  return (
    <div className="mp-sort">
      <span className="mp-sort-label">Trier par :</span>
      <select
        className="mp-sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Trier les resultats"
      >
        <option value="relevance">Pertinence</option>
        <option value="rating">Meilleure note</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix decroissant</option>
        <option value="experience">Experience</option>
        <option value="reviews">Plus d&apos;avis</option>
      </select>
    </div>
  );
}

export default SortDropdown;

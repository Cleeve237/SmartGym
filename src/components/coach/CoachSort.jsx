function CoachSort({ total, sortBy, onSortChange }) {
  return (
    <div className="coaches-sort">
      <p className="coaches-sort-count">
        <strong>{total}</strong> coachs disponibles
      </p>
      <div className="coaches-sort-controls">
        <span className="coaches-sort-label">Trier par :</span>
        <select
          className="coaches-sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="relevance">Pertinence</option>
          <option value="rating">Meilleure note</option>
          <option value="price-asc">Prix croissant</option>
          <option value="availability">Disponibilite</option>
        </select>
      </div>
    </div>
  );
}

export default CoachSort;

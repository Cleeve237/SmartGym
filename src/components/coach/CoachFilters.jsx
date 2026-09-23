function CoachFilters({ onClear }) {
  return (
    <div className="coaches-filters">
      <div className="coaches-filters-title">
        <span>
          <i className="bi bi-funnel me-2" />
          Filtres
        </span>
        <button type="button" className="coaches-filters-clear" onClick={onClear}>
          Tout effacer
        </button>
      </div>

      {/* Ville */}
      <div className="coaches-filter-group">
        <label className="coaches-filter-label" htmlFor="cf-city">Ville</label>
        <select id="cf-city" className="coaches-filter-select" defaultValue="">
          <option value="">Toutes les villes</option>
          <option value="yaounde">Yaounde</option>
          <option value="douala">Douala</option>
          <option value="bafoussam">Bafoussam</option>
          <option value="bamenda">Bamenda</option>
          <option value="garoua">Garoua</option>
        </select>
      </div>

      {/* Discipline */}
      <div className="coaches-filter-group">
        <label className="coaches-filter-label" htmlFor="cf-discipline">Discipline</label>
        <select id="cf-discipline" className="coaches-filter-select" defaultValue="">
          <option value="">Toutes les disciplines</option>
          <option value="musculation">Musculation</option>
          <option value="fitness">Fitness</option>
          <option value="yoga">Yoga</option>
          <option value="boxe">Boxe</option>
          <option value="crossfit">CrossFit</option>
          <option value="cardio">Cardio</option>
          <option value="perte-de-poids">Perte de poids</option>
          <option value="bien-etre">Bien-etre</option>
        </select>
      </div>

      {/* Prix */}
      <div className="coaches-filter-group">
        <label className="coaches-filter-label">Prix (FCFA)</label>
        <div className="coaches-filter-range">
          <input
            type="number"
            className="coaches-filter-input"
            placeholder="Min"
            min="0"
          />
          <span className="coaches-filter-range-sep">-</span>
          <input
            type="number"
            className="coaches-filter-input"
            placeholder="Max"
            min="0"
          />
        </div>
      </div>

      {/* Disponibilite */}
      <div className="coaches-filter-group">
        <label className="coaches-filter-label" htmlFor="cf-availability">Disponibilite</label>
        <select id="cf-availability" className="coaches-filter-select" defaultValue="">
          <option value="">Toutes</option>
          <option value="today">Aujourd'hui</option>
          <option value="tomorrow">Demain</option>
          <option value="week">Cette semaine</option>
          <option value="next-week">Semaine prochaine</option>
        </select>
      </div>

      {/* Note minimum */}
      <div className="coaches-filter-group">
        <label className="coaches-filter-label" htmlFor="cf-rating">Note minimum</label>
        <select id="cf-rating" className="coaches-filter-select" defaultValue="">
          <option value="">Toutes les notes</option>
          <option value="4.5">4.5 et plus</option>
          <option value="4">4 et plus</option>
          <option value="3.5">3.5 et plus</option>
          <option value="3">3 et plus</option>
        </select>
      </div>
    </div>
  );
}

export default CoachFilters;

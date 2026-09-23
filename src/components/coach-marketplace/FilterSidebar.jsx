import { CITIES, DISCIPLINES } from '../../utils/constants';

const DISTANCES = [
  { value: '5', label: 'Moins de 5 km' },
  { value: '10', label: '5 - 10 km' },
  { value: '20', label: '10+ km' },
];

const EXPERIENCES = [
  { value: 'debutant', label: 'Debutant' },
  { value: 'intermediaire', label: 'Intermediaire' },
  { value: 'expert', label: 'Expert' },
];

function FilterSidebar({ filters, onFilterChange, onClear }) {
  const handleChange = (key, value) => {
    onFilterChange?.(key, value);
  };

  const handleCheckbox = (key, value) => {
    const current = filters[key] || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange?.(key, next);
  };

  return (
    <div className="mp-filters">
      <div className="mp-filters-header">
        <h2 className="mp-filters-title">
          <i className="bi bi-funnel" />
          Filtres
        </h2>
        <button type="button" className="mp-filters-clear" onClick={onClear}>
          Tout effacer
        </button>
      </div>

      {/* Ville */}
      <div className="mp-filter-group">
        <label className="mp-filter-label" htmlFor="mpf-city">Localisation</label>
        <select
          id="mpf-city"
          className="mp-filter-select"
          value={filters.city || ''}
          onChange={(e) => handleChange('city', e.target.value)}
        >
          <option value="">Toutes les villes</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Distance */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Distance</span>
        {DISTANCES.map((d) => (
          <label className="mp-filter-checkbox" key={d.value}>
            <input
              type="checkbox"
              checked={(filters.distances || []).includes(d.value)}
              onChange={() => handleCheckbox('distances', d.value)}
            />
            {d.label}
          </label>
        ))}
      </div>

      {/* Specialites */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Specialites</span>
        {DISCIPLINES.slice(0, 8).map((d) => (
          <label className="mp-filter-checkbox" key={d}>
            <input
              type="checkbox"
              checked={(filters.specialties || []).includes(d)}
              onChange={() => handleCheckbox('specialties', d)}
            />
            {d}
          </label>
        ))}
      </div>

      {/* Experience */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Experience</span>
        {EXPERIENCES.map((e) => (
          <label className="mp-filter-checkbox" key={e.value}>
            <input
              type="checkbox"
              checked={(filters.experience || []).includes(e.value)}
              onChange={() => handleCheckbox('experience', e.value)}
            />
            {e.label}
          </label>
        ))}
      </div>

      {/* Prix */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Prix (FCFA)</span>
        <input
          type="range"
          className="mp-price-slider"
          min={0}
          max={50000}
          step={1000}
          value={filters.maxPrice || 50000}
          onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
          aria-label="Prix maximum"
        />
        <div className="mp-price-labels">
          <span>0 FCFA</span>
          <span>{(filters.maxPrice || 50000).toLocaleString('fr-FR')} FCFA</span>
        </div>
      </div>

      {/* Note */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Note minimum</span>
        <div className="mp-star-filter">
          {[4.5, 4, 3.5, 3].map((val) => (
            <button
              type="button"
              key={val}
              className={`mp-star-option ${filters.minRating === val ? 'mp-star-option--active' : ''}`}
              onClick={() => handleChange('minRating', filters.minRating === val ? null : val)}
            >
              <span className="mp-rating-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i
                    key={s}
                    className={`bi bi-star-fill mp-rating-star ${s > Math.round(val) ? 'mp-rating-star--empty' : ''}`}
                  />
                ))}
              </span>
              <span>{val} et plus</span>
            </button>
          ))}
        </div>
      </div>

      {/* Disponibilite */}
      <div className="mp-filter-group">
        <span className="mp-filter-label">Disponibilite</span>
        <label className="mp-filter-checkbox">
          <input
            type="checkbox"
            checked={filters.availableToday || false}
            onChange={() => handleChange('availableToday', !filters.availableToday)}
          />
          Disponible aujourd&apos;hui
        </label>
        <label className="mp-filter-checkbox">
          <input
            type="checkbox"
            checked={filters.availableThisWeek || false}
            onChange={() => handleChange('availableThisWeek', !filters.availableThisWeek)}
          />
          Cette semaine
        </label>
      </div>
    </div>
  );
}

export default FilterSidebar;

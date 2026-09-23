const CATEGORIES = [
  'Musculation',
  'Cardio',
  'Yoga',
  'CrossFit',
  'Boxe',
  'Danse',
  'Pilates',
  'Athletisme',
  'Natation',
  'Arts Martiaux'
];

const DIFFICULTIES = [
  { value: 'debutant', label: 'Debutant' },
  { value: 'intermediaire', label: 'Intermediaire' },
  { value: 'avance', label: 'Avance' }
];

const DURATIONS = [
  { value: 'short', label: '< 4 semaines' },
  { value: 'medium', label: '4-8 semaines' },
  { value: 'long', label: '8+ semaines' }
];

function ProgramFilters({ filters, onChange, onClear }) {
  const handleChange = (key, value) => {
    onChange?.({ ...filters, [key]: value });
  };

  return (
    <div className="pg-filters">
      <div className="pg-filters-header">
        <h3 className="pg-filters-title">
          <i className="bi bi-funnel" />
          Filtres
        </h3>
        <button className="pg-filters-clear" onClick={onClear}>
          Tout effacer
        </button>
      </div>

      <div className="pg-filter-group">
        <label className="pg-filter-label">Categorie</label>
        <select
          className="pg-filter-select"
          value={filters.category || ''}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="">Toutes les categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="pg-filter-group">
        <label className="pg-filter-label">Niveau</label>
        {DIFFICULTIES.map((d) => (
          <label key={d.value} className="pg-filter-checkbox">
            <input
              type="radio"
              name="difficulty"
              checked={filters.difficulty === d.value}
              onChange={() => handleChange('difficulty', d.value)}
            />
            {d.label}
          </label>
        ))}
      </div>

      <div className="pg-filter-group">
        <label className="pg-filter-label">Duree</label>
        {DURATIONS.map((d) => (
          <label key={d.value} className="pg-filter-checkbox">
            <input
              type="radio"
              name="duration"
              checked={filters.duration === d.value}
              onChange={() => handleChange('duration', d.value)}
            />
            {d.label}
          </label>
        ))}
      </div>

      <div className="pg-filter-group">
        <label className="pg-filter-label">Budget max (FCFA)</label>
        <input
          type="range"
          className="pg-price-slider"
          min={0}
          max={100000}
          step={5000}
          value={filters.maxPrice || 100000}
          onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
        />
        <div className="pg-price-labels">
          <span>0 FCFA</span>
          <span>{(filters.maxPrice || 100000).toLocaleString()} FCFA</span>
        </div>
      </div>
    </div>
  );
}

export default ProgramFilters;

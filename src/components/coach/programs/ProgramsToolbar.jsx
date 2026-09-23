function ProgramsToolbar({ searchQuery, onSearchChange, categoryFilter, onCategoryChange, viewMode, onViewModeChange }) {
  return (
    <div className="cd-programs-toolbar">
      <div className="cd-programs-toolbar-left">
        <div className="cd-programs-search">
          <i className="bi bi-search" aria-hidden="true" />
          <input
            type="text"
            placeholder="Rechercher un programme..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            aria-label="Rechercher un programme"
          />
        </div>

        <select
          className="cd-programs-filter-select"
          value={categoryFilter}
          onChange={(e) => onCategoryChange?.(e.target.value)}
          aria-label="Filtrer par categorie"
        >
          <option value="">Toutes les categories</option>
          <option value="Musculation">Musculation</option>
          <option value="Cardio">Cardio</option>
          <option value="Yoga">Yoga</option>
          <option value="CrossFit">CrossFit</option>
          <option value="Boxe">Boxe</option>
          <option value="Danse">Danse</option>
          <option value="Pilates">Pilates</option>
          <option value="Athletisme">Athletisme</option>
        </select>
      </div>

      <div className="cd-programs-toolbar-right">
        <div className="cd-programs-view-toggle" role="group" aria-label="Mode d'affichage">
          <button
            className={`cd-programs-view-btn ${viewMode === 'table' ? 'cd-programs-view-btn--active' : ''}`}
            onClick={() => onViewModeChange?.('table')}
            aria-label="Vue tableau"
            aria-pressed={viewMode === 'table'}
          >
            <i className="bi bi-list" />
          </button>
          <button
            className={`cd-programs-view-btn ${viewMode === 'grid' ? 'cd-programs-view-btn--active' : ''}`}
            onClick={() => onViewModeChange?.('grid')}
            aria-label="Vue grille"
            aria-pressed={viewMode === 'grid'}
          >
            <i className="bi bi-grid-3x3-gap" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramsToolbar;

import FilterSidebar from './FilterSidebar';

function MobileFilters({ filters, onFilterChange, onClear, onApply, onClose }) {
  return (
    <div
      className="mp-mobile-modal"
      role="dialog"
      aria-label="Filtres de recherche"
      onClick={onClose}
    >
      <div
        className="mp-mobile-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mp-mobile-modal-header">
          <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', margin: 0 }}>
            <i className="bi bi-funnel me-2" style={{ color: 'var(--color-primary)' }} />
            Filtres
          </h2>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Fermer les filtres"
          />
        </div>

        <div style={{ padding: '0.5rem 0' }}>
          <FilterSidebar
            filters={filters}
            onFilterChange={onFilterChange}
            onClear={onClear}
          />
        </div>

        <div className="mp-mobile-modal-footer">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm flex-grow-1"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm flex-grow-1"
            onClick={onApply}
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileFilters;

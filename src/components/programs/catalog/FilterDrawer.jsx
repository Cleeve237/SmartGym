import FilterSidebar from './FilterSidebar';

function FilterDrawer({ open, onClose, filters, onChange, onClear }) {
  return (
    <>
      <div className={`pc-filter-drawer-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`pc-filter-drawer ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Filtres">
        <div className="pc-filter-drawer-header">
          <h3>Filtres</h3>
          <button className="pc-filter-drawer-close" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <FilterSidebar filters={filters} onChange={onChange} onClear={onClear} />
      </div>
    </>
  );
}
export default FilterDrawer;

function ViewSwitcher({ view, onChange }) {
  return (
    <div style={{display:'flex',gap:'.25rem'}}>
      <button className={`pc-view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => onChange('grid')} aria-label="Vue grille">
        <i className="bi bi-grid-3x3-gap-fill" />
      </button>
      <button className={`pc-view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => onChange('list')} aria-label="Vue liste">
        <i className="bi bi-list-ul" />
      </button>
    </div>
  );
}
export default ViewSwitcher;

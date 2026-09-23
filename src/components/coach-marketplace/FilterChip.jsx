function FilterChip({ label, onRemove }) {
  return (
    <span className="mp-chip">
      {label}
      <button
        type="button"
        className="mp-chip-close"
        onClick={onRemove}
        aria-label={`Retirer le filtre ${label}`}
      >
        <i className="bi bi-x" />
      </button>
    </span>
  );
}

export default FilterChip;

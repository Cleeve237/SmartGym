function ProgramCompareCheckbox({ isComparing, onToggle }) {
  return (
    <label className="pc-card-compare" onClick={(e) => e.stopPropagation()}>
      <input type="checkbox" checked={isComparing} onChange={() => onToggle?.()} />
      Comparer
    </label>
  );
}
export default ProgramCompareCheckbox;

function ProgramVisibilitySwitch({ visible, onToggle, label }) {
  return (
    <label className="cd-pgm-switch" htmlFor={label}>
      <div
        className={`cd-pgm-switch-track ${visible ? 'cd-pgm-switch-track--on' : ''}`}
        role="switch"
        aria-checked={visible}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); onToggle?.(!visible); } }}
        onClick={() => onToggle?.(!visible)}
      >
        <div className="cd-pgm-switch-thumb" />
      </div>
      <span className="cd-pgm-switch-label">{label}</span>
    </label>
  );
}

export default ProgramVisibilitySwitch;

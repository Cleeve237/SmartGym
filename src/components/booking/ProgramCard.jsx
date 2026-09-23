export default function ProgramCard({ program, selected, onSelect }) {
  return (
    <div
      className={`bk-program ${selected ? "bk-program--selected" : ""}`}
      onClick={() => onSelect(program)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(program)}
    >
      <div className="bk-program-check">
        <i className="bi bi-check-lg" />
      </div>
      <div className="bk-program-name">{program.name}</div>
      <div className="bk-program-desc">{program.description}</div>
      <div className="bk-program-meta">
        <span><i className="bi bi-clock" /> {program.duration} min</span>
        <span><i className="bi bi-people" /> {program.level}</span>
        <span className="bk-program-price">{program.price?.toLocaleString()} FCFA</span>
      </div>
    </div>
  );
}

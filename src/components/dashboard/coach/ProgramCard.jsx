export default function ProgramCard({ program }) {
  return (
    <div className="cd-program">
      <div className="cd-program-icon">
        <i className={`bi ${program.icon || "bi-lightning"}`} />
      </div>
      <div className="cd-program-info">
        <div className="cd-program-name">{program.name}</div>
        <div className="cd-program-meta">
          <span><i className="bi bi-clock" /> {program.duration} min</span>
          <span>{program.price?.toLocaleString()} FCFA</span>
          <span><i className="bi bi-people" /> {program.clients} clients</span>
        </div>
      </div>
      <div className="cd-session-actions">
        <button className="cd-btn-sm cd-btn-sm--ghost" title="Modifier">
          <i className="bi bi-pencil" />
        </button>
        <button className="cd-btn-sm cd-btn-sm--danger" title="Supprimer">
          <i className="bi bi-trash" />
        </button>
      </div>
    </div>
  );
}

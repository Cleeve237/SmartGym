export default function CoachValidationCard({ coach }) {
  return (
    <div className="adm-coach-card">
      <div className="adm-coach-avatar">
        {coach.photo ? (
          <img src={coach.photo} alt="" width="44" height="44" style={{ borderRadius: "50%", objectFit: "cover" }} />
        ) : (
          <i className="bi bi-person-fill" />
        )}
      </div>
      <div className="adm-coach-info">
        <div className="adm-coach-name">{coach.name}</div>
        <div className="adm-coach-meta">
          <span><i className="bi bi-geo-alt" /> {coach.city}</span>
          <span><i className="bi bi-star-fill" style={{ color: "var(--color-warning)", fontSize: "0.6rem" }} /> {coach.rating}</span>
          <span className={`adm-badge adm-badge--${coach.status === "validated" ? "success" : coach.status === "pending" ? "warning" : "neutral"}`}>
            {coach.status === "validated" ? "Validé" : coach.status === "pending" ? "En attente" : "Refusé"}
          </span>
        </div>
      </div>
      {coach.status === "pending" && (
        <div className="adm-coach-actions">
          <button className="adm-btn-sm adm-btn-sm--success"><i className="bi bi-check-lg" /> Valider</button>
          <button className="adm-btn-sm adm-btn-sm--danger"><i className="bi bi-x-lg" /></button>
        </div>
      )}
    </div>
  );
}

export default function CoachSessionCard({ session }) {
  const fmtDate = new Date(session.date).toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="cd-session">
      <div className="cd-session-avatar">
        {session.clientPhoto ? (
          <img src={session.clientPhoto} alt="" width="40" height="40" style={{ borderRadius: "50%", objectFit: "cover" }} />
        ) : (
          <i className="bi bi-person-fill" />
        )}
      </div>
      <div className="cd-session-info">
        <div className="cd-session-top">
          <span className="cd-session-client">{session.clientName}</span>
          <span className={`cd-badge cd-badge--${session.status === "confirmed" ? "success" : session.status === "pending" ? "warning" : "neutral"}`}>
            {session.status === "confirmed" ? "Confirmée" : session.status === "pending" ? "En attente" : "Terminée"}
          </span>
        </div>
        <div className="cd-session-details">
          <span><i className="bi bi-calendar3" /> {fmtDate}</span>
          <span><i className="bi bi-clock" /> {session.time}</span>
          <span><i className="bi bi-tag" /> {session.program}</span>
        </div>
      </div>
    </div>
  );
}

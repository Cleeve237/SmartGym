export default function ClientCard({ client }) {
  return (
    <div className="cd-client">
      <div className="cd-client-avatar">
        {client.photo ? (
          <img src={client.photo} alt="" width="40" height="40" style={{ borderRadius: "50%", objectFit: "cover" }} />
        ) : (
          <i className="bi bi-person-fill" />
        )}
      </div>
      <div className="cd-client-info">
        <div className="cd-client-name">{client.name}</div>
        <div className="cd-client-meta">
          {client.sessions} séances &middot; {client.lastActive}
        </div>
      </div>
      <span className={`cd-badge cd-badge--${client.active ? "success" : "neutral"}`}>
        {client.active ? "Actif" : "Inactif"}
      </span>
    </div>
  );
}

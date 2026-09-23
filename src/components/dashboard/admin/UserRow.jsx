export default function UserRow({ user }) {
  const fmtDate = new Date(user.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <tr>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-gray-200)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "var(--color-gray-400)", flexShrink: 0 }}>
            <i className="bi bi-person-fill" />
          </div>
          <span style={{ fontWeight: 600, color: "var(--color-dark)" }}>{user.name}</span>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><span className={`adm-badge adm-badge--${user.role === "admin" ? "purple" : user.role === "coach" ? "info" : "success"}`}>{user.role}</span></td>
      <td><span className={`adm-badge adm-badge--${user.active ? "success" : "danger"}`}>{user.active ? "Actif" : "Suspendu"}</span></td>
      <td>{fmtDate}</td>
      <td>
        <div style={{ display: "flex", gap: "0.25rem" }}>
          <button className="adm-btn-sm adm-btn-sm--ghost" title="Voir"><i className="bi bi-eye" /></button>
          <button className="adm-btn-sm adm-btn-sm--ghost" title="Modifier"><i className="bi bi-pencil" /></button>
          <button className="adm-btn-sm adm-btn-sm--danger" title="Suspendre"><i className="bi bi-slash-circle" /></button>
        </div>
      </td>
    </tr>
  );
}

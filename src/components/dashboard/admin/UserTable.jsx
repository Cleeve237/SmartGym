import UserRow from "./UserRow";

const USERS = [
  { id: "u1", name: "Paul Njoya", email: "paul@example.com", phone: "699 123 456", role: "client", active: true, createdAt: "2026-01-15" },
  { id: "u2", name: "Marc Bella", email: "marc@example.com", phone: "677 234 567", role: "coach", active: true, createdAt: "2025-11-20" },
  { id: "u3", name: "Marie Kamga", email: "marie@example.com", phone: "690 345 678", role: "client", active: true, createdAt: "2026-02-10" },
  { id: "u4", name: "Jean Mbarga", email: "jean@example.com", phone: "675 456 789", role: "coach", active: false, createdAt: "2025-09-05" },
  { id: "u5", name: "Sophie Bella", email: "sophie@example.com", phone: "691 567 890", role: "client", active: true, createdAt: "2026-03-22" },
];

export default function UserTable() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-people" /> Gestion des utilisateurs
        </div>
        <a href="/admin/users" className="adm-widget-link">Voir tout <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="adm-widget-body--flush">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Rôle</th>
                <th>Statut</th>
                <th>Inscription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u) => <UserRow key={u.id} user={u} />)}
            </tbody>
          </table>
        </div>
        <div className="adm-pagination">
          <span>1–5 sur {USERS.length}</span>
          <div className="adm-pagination-btns">
            <button className="adm-pagination-btn" disabled><i className="bi bi-chevron-left" /></button>
            <button className="adm-pagination-btn adm-pagination-btn--active">1</button>
            <button className="adm-pagination-btn">2</button>
            <button className="adm-pagination-btn">3</button>
            <button className="adm-pagination-btn"><i className="bi bi-chevron-right" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

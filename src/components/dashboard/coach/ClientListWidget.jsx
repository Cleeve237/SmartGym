import ClientCard from "./ClientCard";

const CLIENTS = [
  { id: "c1", name: "Paul Njoya", photo: null, sessions: 12, lastActive: "Il y a 2h", active: true },
  { id: "c2", name: "Marie Kamga", photo: null, sessions: 8, lastActive: "Il y a 1 jour", active: true },
  { id: "c3", name: "Jean Mbarga", photo: null, sessions: 5, lastActive: "Il y a 3 jours", active: true },
  { id: "c4", name: "Sophie Bella", photo: null, sessions: 15, lastActive: "Aujourd'hui", active: true },
  { id: "c5", name: "David Ngono", photo: null, sessions: 2, lastActive: "Il y a 2 semaines", active: false },
];

export default function ClientListWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-people" /> Mes clients
        </div>
        <span className="cd-widget-link">{CLIENTS.length} clients</span>
      </div>
      <div className="cd-widget-body--flush">
        {CLIENTS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-people" /></div>
            <div className="cd-empty-title">Aucun client</div>
            <div className="cd-empty-text">Vos clients apparaîtront ici une fois qu'ils auront réservé une séance.</div>
          </div>
        ) : (
          CLIENTS.map((c) => <ClientCard key={c.id} client={c} />)
        )}
      </div>
    </div>
  );
}

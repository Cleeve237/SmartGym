const NOTIFICATIONS = [
  { id: "n1", icon: "bi-calendar-plus", iconColor: "green", text: "<strong>David Ngono</strong> a demandé une séance de <strong>Musculation</strong>.", time: "Il y a 30 min" },
  { id: "n2", icon: "bi-chat-dots", iconColor: "blue", text: "<strong>Marie Kamga</strong> vous a envoyé un message.", time: "Il y a 2h" },
  { id: "n3", icon: "bi-star-fill", iconColor: "yellow", text: "<strong>Paul Njoya</strong> a laissé un avis 5 étoiles.", time: "Il y a 1 jour" },
  { id: "n4", icon: "bi-credit-card", iconColor: "green", text: "Paiement reçu de <strong>25 000 FCFA</strong> de Jean Mbarga.", time: "Il y a 2 jours" },
];

export default function NotificationWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-bell" /> Notifications
        </div>
        <span className="cd-badge cd-badge--info">{NOTIFICATIONS.length}</span>
      </div>
      <div className="cd-widget-body--flush">
        {NOTIFICATIONS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-bell-slash" /></div>
            <div className="cd-empty-title">Aucune notification</div>
            <div className="cd-empty-text">Vous êtes à jour !</div>
          </div>
        ) : (
          NOTIFICATIONS.map((n) => (
            <div key={n.id} className="cd-notif">
              <div className={`cd-notif-icon cd-notif-icon--${n.iconColor}`}>
                <i className={`bi ${n.icon}`} />
              </div>
              <div>
                <div className="cd-notif-text" dangerouslySetInnerHTML={{ __html: n.text }} />
                <div className="cd-notif-time">{n.time}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const NOTIFICATIONS = [
  { id: "n1", icon: "bi-person-plus", iconColor: "blue", text: "<strong>David Ngono</strong> s'est inscrit comme coach. Validation requise.", time: "Il y a 1h" },
  { id: "n2", icon: "bi-x-circle", iconColor: "red", text: "Paiement échoué pour <strong>David Ngono</strong> — 8 400 FCFA.", time: "Il y a 3h" },
  { id: "n3", icon: "bi-flag", iconColor: "yellow", text: "Nouveau signalement contre le coach <strong>Claire Fouda</strong>.", time: "Il y a 5h" },
  { id: "n4", icon: "bi-star-fill", iconColor: "green", text: "<strong>Paul Njoya</strong> a publié un avis 5 étoiles.", time: "Hier" },
];

export default function AdminNotificationWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-bell" /> Notifications
        </div>
        <span className="adm-badge adm-badge--info">{NOTIFICATIONS.length}</span>
      </div>
      <div className="adm-widget-body--flush">
        {NOTIFICATIONS.length === 0 ? (
          <div className="adm-empty">
            <div className="adm-empty-icon"><i className="bi bi-bell-slash" /></div>
            <div className="adm-empty-title">Aucune notification</div>
            <div className="adm-empty-text">Tout est à jour !</div>
          </div>
        ) : (
          NOTIFICATIONS.map((n) => (
            <div key={n.id} className="adm-notif">
              <div className={`adm-notif-icon adm-notif-icon--${n.iconColor}`}>
                <i className={`bi ${n.icon}`} />
              </div>
              <div>
                <div className="adm-notif-text" dangerouslySetInnerHTML={{ __html: n.text }} />
                <div className="adm-notif-time">{n.time}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

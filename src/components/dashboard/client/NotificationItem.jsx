function NotificationItem({ icon, title, description, time, unread }) {
  return (
    <div className="dash-notif">
      <div className={`dash-notif-icon${unread ? ' dash-notif-icon--unread' : ''}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div className="dash-notif-content">
        <div className={`dash-notif-title${unread ? ' dash-notif-title--unread' : ''}`}>
          {title}
        </div>
        {description && <div className="dash-notif-desc">{description}</div>}
        <div className="dash-notif-time">{time}</div>
      </div>
      {unread && <div className="dash-notif-dot" />}
    </div>
  );
}

export default NotificationItem;

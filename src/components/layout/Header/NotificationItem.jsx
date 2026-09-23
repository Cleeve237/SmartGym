export default function NotificationItem({ icon, iconBg, iconColor, title, desc, time, unread }) {
  return (
    <div className="hd-dropdown-item" style={unread ? { background: 'var(--ds-primary-50)' } : undefined}>
      <span className="hd-dropdown-item-icon" style={{ background: iconBg, color: iconColor }}>
        <i className={`bi bi-${icon}`} />
      </span>
      <div className="hd-dropdown-item-body">
        <div className="hd-dropdown-item-title">{title}</div>
        <div className="hd-dropdown-item-desc">{desc}</div>
      </div>
      <span className="hd-dropdown-item-time">{time}</span>
    </div>
  );
}

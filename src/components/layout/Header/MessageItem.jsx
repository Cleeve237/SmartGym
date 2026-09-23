export default function MessageItem({ name, initials, color, lastMsg, time, unread }) {
  return (
    <div className="hd-dropdown-item" style={unread ? { background: 'var(--ds-primary-50)' } : undefined}>
      <span className="hd-dropdown-item-icon" style={{ background: color, color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>
        {initials}
      </span>
      <div className="hd-dropdown-item-body">
        <div className="hd-dropdown-item-title">{name}</div>
        <div className="hd-dropdown-item-desc">{lastMsg}</div>
      </div>
      <span className="hd-dropdown-item-time">{time}</span>
    </div>
  );
}

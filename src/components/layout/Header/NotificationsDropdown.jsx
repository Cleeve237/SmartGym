import NotificationItem from './NotificationItem';

const notifications = [
  { id: 1, icon: 'calendar-check', iconBg: 'var(--ds-primary-50)', iconColor: 'var(--ds-primary)', title: 'Nouvelle réservation', desc: 'Jean M. a réservé une séance', time: '5 min', unread: true },
  { id: 2, icon: 'credit-card', iconBg: 'var(--ds-success-50)', iconColor: 'var(--ds-success)', title: 'Paiement confirmé', desc: 'Paiement de 8 000 FCFA reçu', time: '1h', unread: true },
  { id: 3, icon: 'chat-dots', iconBg: 'var(--ds-info-50)', iconColor: 'var(--ds-info)', title: 'Nouveau message', desc: 'Message de Carine A.', time: '3h', unread: false },
  { id: 4, icon: 'arrow-repeat', iconBg: 'var(--ds-warning-50)', iconColor: 'var(--ds-warning)', title: 'Programme mis à jour', desc: 'Musculation v2.0 disponible', time: '1j', unread: false },
];

export default function NotificationsDropdown({ count = notifications.filter(n => n.unread).length }) {
  return (
    <div className="hd-dropdown">
      <button className="hd-action-btn" aria-label={`Notifications (${count} non lues)`}>
        <i className="bi bi-bell" />
        {count > 0 && <span className="hd-badge-count">{count}</span>}
      </button>
      <div className="hd-dropdown-menu" style={{ minWidth: '320px' }}>
        <div className="hd-dropdown-header">Notifications ({notifications.length})</div>
        {notifications.map(n => <NotificationItem key={n.id} {...n} />)}
        <div className="hd-dropdown-footer">
          <a href="/notifications">Voir toutes les notifications</a>
        </div>
      </div>
    </div>
  );
}

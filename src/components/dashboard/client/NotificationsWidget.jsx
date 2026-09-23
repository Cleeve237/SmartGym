import { Link } from 'react-router-dom';
import NotificationItem from './NotificationItem';
import EmptyState from './EmptyState';

const NOTIFICATIONS = [
  {
    id: 1,
    icon: 'bi-calendar-check',
    title: 'Seance de demain confirmee',
    description: 'Coach Ahmadou, 08:00, Douala',
    time: 'Il y a 30min',
    unread: true,
  },
  {
    id: 2,
    icon: 'bi-chat-dots',
    title: 'Message de Coach Ahmadou',
    description: 'A preparation pour demain...',
    time: 'Il y a 2h',
    unread: true,
  },
  {
    id: 3,
    icon: 'bi-gift',
    title: 'Offre speciale : -20%',
    description: 'Forfait mensuel a prix reduit',
    time: 'Hier',
    unread: false,
  },
  {
    id: 4,
    icon: 'bi-bell',
    title: 'Rappel : Yoga samedi 10h',
    description: null,
    time: 'Il y a 2j',
    unread: false,
  },
];

function NotificationsWidget() {
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div className="dash-widget">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-bell" />
          Notifications
          {unreadCount > 0 && (
            <span style={{
              background: 'var(--color-danger)',
              color: 'var(--color-white)',
              fontSize: '0.6rem',
              padding: '0.1rem 0.4rem',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 'var(--font-weight-bold)',
              marginLeft: '0.25rem',
            }}>
              {unreadCount}
            </span>
          )}
        </h2>
        <Link to="/client/notifications" className="dash-widget-link">
          Tout voir
        </Link>
      </div>
      <div className="dash-widget-body dash-widget-body--flush" style={{ padding: '0 1rem' }}>
        {NOTIFICATIONS.length > 0 ? (
          NOTIFICATIONS.map((n) => <NotificationItem key={n.id} {...n} />)
        ) : (
          <EmptyState icon="bi-bell-slash" title="Aucune notification" description="Vous etes a jour !" />
        )}
      </div>
    </div>
  );
}

export default NotificationsWidget;

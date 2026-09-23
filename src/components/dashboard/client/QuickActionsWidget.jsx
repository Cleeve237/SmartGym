import { Link } from 'react-router-dom';

const ACTIONS = [
  { to: '/client/coaches', icon: 'bi-search', label: 'Trouver un coach' },
  { to: '/client/bookings', icon: 'bi-calendar-plus', label: 'Reserver' },
  { to: '/client/payments', icon: 'bi-credit-card', label: 'Paiements' },
  { to: '/client/favorites', icon: 'bi-heart', label: 'Favoris' },
  { to: '/client/profile', icon: 'bi-person', label: 'Profil' },
  { to: '/client/history', icon: 'bi-clock-history', label: 'Historique' },
  { to: '/client/settings', icon: 'bi-gear', label: 'Parametres' },
  { to: '/contact', icon: 'bi-headset', label: 'Support' },
];

function QuickActionsWidget() {
  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-lightning-charge" />
          Actions rapides
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-actions">
          {ACTIONS.map((action) => (
            <Link key={action.to} to={action.to} className="dash-action">
              <div className="dash-action-icon">
                <i className={`bi ${action.icon}`} />
              </div>
              <span className="dash-action-label">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickActionsWidget;

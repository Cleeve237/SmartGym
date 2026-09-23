import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/client/dashboard', icon: 'bi-grid-1x2-fill', label: 'Dashboard' },
  { to: '/client/coaches', icon: 'bi-people', label: 'Coachs' },
  { to: '/client/bookings', icon: 'bi-calendar-check', label: 'Reservations' },
  { to: '/client/favorites', icon: 'bi-heart', label: 'Favoris' },
  { to: '/client/history', icon: 'bi-clock-history', label: 'Historique' },
];

const NAV_ITEMS_BOTTOM = [
  { to: '/client/payments', icon: 'bi-credit-card', label: 'Paiements' },
  { to: '/client/notifications', icon: 'bi-bell', label: 'Notifications' },
  { to: '/client/settings', icon: 'bi-gear', label: 'Parametres' },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`dash-sidebar-overlay${isOpen ? ' dash-sidebar-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`dash-sidebar${isOpen ? ' dash-sidebar--open' : ''}`}>
        <Link to="/" className="dash-sidebar-logo">
          <span className="dash-sidebar-logo-icon">
            <i className="bi bi-lightning-charge-fill" />
          </span>
          <span className="dash-sidebar-logo-text">SmartGym</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="dash-sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`dash-sidebar-link${item.to === '/client/dashboard' ? ' dash-sidebar-link--active' : ''}`}
                  onClick={onClose}
                >
                  <i className={`bi ${item.icon}`} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="dash-sidebar-divider" />
        <div className="dash-sidebar-label">Compte</div>

        <nav aria-label="Navigation compte">
          <ul className="dash-sidebar-nav">
            {NAV_ITEMS_BOTTOM.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="dash-sidebar-link" onClick={onClose}>
                  <i className={`bi ${item.icon}`} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

function DashboardLayout({ children, rightSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dash-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dash-main">
        {children}
      </div>

      <aside className="dash-right" aria-label="Panneau lateral">
        {rightSidebar}
      </aside>

      <button
        type="button"
        className="dash-sidebar-toggle"
        onClick={() => setSidebarOpen((o) => !o)}
        aria-label="Basculer le menu"
      >
        <i className={`bi ${sidebarOpen ? 'bi-x-lg' : 'bi-list'}`} />
      </button>
    </div>
  );
}

export default DashboardLayout;

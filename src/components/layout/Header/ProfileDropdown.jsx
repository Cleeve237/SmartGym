import RoleBadge from './RoleBadge';
import { Link } from 'react-router-dom';

const profileLinks = {
  client: [
    { label: 'Mon profil', path: '/client/profile', icon: 'person' },
    { label: 'Tableau de bord', path: '/client/dashboard', icon: 'grid' },
    { label: 'Mes réservations', path: '/client/bookings', icon: 'calendar-check' },
    { label: 'Paramètres', path: '/client/settings', icon: 'gear' },
  ],
  coach: [
    { label: 'Mon profil', path: '/coach/profile', icon: 'person' },
    { label: 'Tableau de bord', path: '/coach/dashboard', icon: 'speedometer2' },
    { label: 'Mes programmes', path: '/coach/programs', icon: 'journal-text' },
    { label: 'Paramètres', path: '/coach/settings', icon: 'gear' },
  ],
  admin: [
    { label: 'Mon profil', path: '/admin/profile', icon: 'person' },
    { label: 'Dashboard', path: '/admin/dashboard', icon: 'speedometer2' },
    { label: 'Paramètres', path: '/admin/settings', icon: 'gear' },
  ],
};

export default function ProfileDropdown({ user = { name: 'Jean Dupont', email: 'jean@example.com', role: 'client' } }) {
  const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const links = profileLinks[user.role] || profileLinks.client;

  return (
    <div className="hd-dropdown">
      <button className="hd-profile-trigger">
        <span className="hd-profile-avatar" style={{ background: user.role === 'coach' ? 'var(--ds-primary)' : user.role === 'admin' ? 'var(--ds-danger)' : 'var(--ds-info)' }}>
          {initials}
        </span>
        <span className="hd-profile-info">
          <span className="hd-profile-name">{user.name}</span>
          <span className="hd-profile-role">
            <RoleBadge role={user.role} />
          </span>
        </span>
        <i className="bi bi-chevron-down" style={{ fontSize: '0.75rem', color: 'var(--ds-secondary-400)' }} />
      </button>
      <div className="hd-dropdown-menu" style={{ minWidth: '220px' }}>
        <div style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--ds-secondary-100)' }}>
          <span className="hd-profile-avatar" style={{ width: 48, height: 48, fontSize: '1rem', margin: '0 auto 0.5rem', background: user.role === 'coach' ? 'var(--ds-primary)' : user.role === 'admin' ? 'var(--ds-danger)' : 'var(--ds-info)' }}>
            {initials}
          </span>
          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{user.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--ds-text-muted)' }}>{user.email}</div>
        </div>
        {links.map((link, i) => (
          <Link key={i} to={link.path} className="hd-dropdown-item" style={{ padding: '0.625rem 1rem', fontSize: '0.8125rem', color: 'var(--ds-text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <i className={`bi bi-${link.icon}`} style={{ width: 16, color: 'var(--ds-secondary-400)' }} />
            {link.label}
          </Link>
        ))}
        <div className="hd-dropdown-footer" style={{ borderTop: '1px solid var(--ds-secondary-100)' }}>
          <Link to="/logout" style={{ color: 'var(--ds-danger)' }}>
            <i className="bi bi-box-arrow-right me-1" />Déconnexion
          </Link>
        </div>
      </div>
    </div>
  );
}

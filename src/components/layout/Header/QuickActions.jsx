import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function QuickActions({ role = 'visitor' }) {
  const [open, setOpen] = useState(false);
  const actions = {
    client: [
      { label: 'Réserver une séance', path: '/coaches', icon: 'calendar-check' },
      { label: 'Voir mes programmes', path: '/client/bookings', icon: 'journal-text' },
    ],
    coach: [
      { label: 'Nouveau programme', path: '/coach/programs/create', icon: 'plus-circle' },
      { label: 'Définir disponibilités', path: '/coach/availability', icon: 'clock' },
    ],
    admin: [
      { label: 'Ajouter un coach', path: '/admin/coaches/create', icon: 'person-plus' },
      { label: 'Nouveau programme', path: '/admin/programs/create', icon: 'plus-circle' },
    ],
  };

  const items = actions[role];
  if (!items || items.length === 0) return null;

  return (
    <div className="hd-dropdown">
      <button className="hd-quick-toggle" onClick={() => setOpen(!open)} aria-label="Actions rapides">
        <i className="bi bi-plus" />
      </button>
      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 0 }} onClick={() => setOpen(false)} />
          <div className="hd-quick-menu">
            {items.map((item, i) => (
              <Link key={i} to={item.path} className="hd-quick-item" onClick={() => setOpen(false)}>
                <i className={`bi bi-${item.icon}`} />
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

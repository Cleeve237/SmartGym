import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarBrand from './NavbarBrand';
import HeaderCTA from './HeaderCTA';
import RoleBadge from './RoleBadge';
import { publicNavigation } from '../../../constants/navigation';

export default function MobileDrawer({ open, onClose, navigation }) {
  const { role, main } = navigation;

  const drawerLinks = role === 'visitor' ? (main || []) : [];
  const fakeUser = { name: 'Jean Dupont', email: 'jean@example.com', role };

  const initials = fakeUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const color = role === 'coach' ? 'var(--ds-primary)' : role === 'admin' ? 'var(--ds-danger)' : 'var(--ds-info)';

  return (
    <>
      {open && <div className="hd-drawer-overlay" onClick={onClose} />}
      <div className="hd-drawer" style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)' }}>
        <div className="hd-drawer-header">
          <NavbarBrand />
          <button className="hd-drawer-close" onClick={onClose} aria-label="Fermer le menu">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="hd-drawer-body">
          {role !== 'visitor' && (
            <div className="hd-drawer-user" style={{ marginBottom: '0.5rem' }}>
              <span className="hd-drawer-user-avatar" style={{ background: color }}>{initials}</span>
              <div className="hd-drawer-user-info">
                <div className="hd-drawer-user-name">{fakeUser.name}</div>
                <RoleBadge role={role} />
              </div>
            </div>
          )}

          <ul className="hd-drawer-nav">
            {drawerLinks.map((link, i) => (
              <li key={i}>
                {link.megaMenu ? (
                  <div>
                    <div className="hd-drawer-section">{link.label}</div>
                    {link.sections.map((sec, j) => (
                      <div key={j}>
                        <div className="hd-drawer-section" style={{ padding: '0.25rem 1rem', color: 'var(--ds-text-muted)' }}>{sec.title}</div>
                        {sec.links.map((sublink, k) => (
                          <Link key={k} to={sublink.path} className="hd-drawer-link" onClick={onClose}>
                            <span>{sublink.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <Link to={link.path} className="hd-drawer-link" onClick={onClose}>
                    {link.icon && <i className={`bi bi-${link.icon}`} />}
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hd-drawer-footer">
          {role === 'visitor' ? (
            <>
              <Link to="/login" className="hd-cta hd-cta--outline" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
                <i className="bi bi-box-arrow-in-right" />Connexion
              </Link>
              <Link to="/register" className="hd-cta hd-cta--primary" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
                <i className="bi bi-person-plus" />Créer un compte
              </Link>
            </>
          ) : (
            <>
              <Link to="/logout" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', color: 'var(--ds-danger)', textDecoration: 'none', fontSize: '0.875rem' }} onClick={onClose}>
                <i className="bi bi-box-arrow-right" />Déconnexion
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

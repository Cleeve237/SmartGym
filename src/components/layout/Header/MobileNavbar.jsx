import { useState } from 'react';
import NavbarBrand from './NavbarBrand';
import MobileDrawer from './MobileDrawer';
import NotificationsDropdown from './NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';
import HeaderCTA from './HeaderCTA';

export default function MobileNavbar({ navigation }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { role } = navigation;

  return (
    <>
      <div className="container hd-inner">
        <button className="hd-mobile-toggle" onClick={() => setDrawerOpen(true)} aria-label="Menu">
          <i className="bi bi-list" />
        </button>
        <NavbarBrand />
        <div className="hd-actions">
          {role !== 'visitor' ? (
            <>
              <NotificationsDropdown />
              <ProfileDropdown user={{ name: 'Jean Dupont', email: 'jean@example.com', role }} />
            </>
          ) : (
            <>
              <Link to="/login" className="hd-auth-link">Connexion</Link>
              <HeaderCTA />
            </>
          )}
        </div>
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} navigation={navigation} />
    </>
  );
}

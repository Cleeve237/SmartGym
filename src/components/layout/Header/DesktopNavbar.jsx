import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import SearchBar from './SearchBar';
import NotificationsDropdown from './NotificationsDropdown';
import MessagesDropdown from './MessagesDropdown';
import ProfileDropdown from './ProfileDropdown';
import QuickActions from './QuickActions';
import LanguageSelector from './LanguageSelector';
import ThemeSwitcher from './ThemeSwitcher';
import HeaderCTA from './HeaderCTA';
import { Link } from 'react-router-dom';

export default function DesktopNavbar({ navigation, dark }) {
  const { role, main, isActive } = navigation;

  return (
    <div className="container hd-inner">
      <NavbarBrand dark={dark} />

      {role === 'visitor' && main && main.length > 0 && (
        <NavbarLinks links={main} isActive={isActive} dark={dark} />
      )}

      <SearchBar dark={dark} />

      <div className="hd-actions">
        <LanguageSelector dark={dark} />
        <ThemeSwitcher />

        {role === 'visitor' && (
          <div className="hd-auth">
            <Link to="/login" className="hd-auth-link">Connexion</Link>
            <Link to="/register" className="hd-cta hd-cta--primary" style={{ fontSize: '0.8125rem', padding: '0.375rem 0.875rem' }}>
              Créer un compte
            </Link>
          </div>
        )}

        {role !== 'visitor' && (
          <>
            <QuickActions role={role} />
            <NotificationsDropdown />
            <MessagesDropdown />
            <ProfileDropdown user={{ name: 'Jean Dupont', email: 'jean@example.com', role }} />
          </>
        )}

        {role === 'visitor' && <HeaderCTA />}
      </div>
    </div>
  );
}

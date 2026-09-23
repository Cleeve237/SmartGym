import { useState, useEffect } from 'react';
import useNavigation from '../../../hooks/navigation/useNavigation';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import './Header.css';

export default function Header({ role = 'visitor', dark = false, breadcrumbs }) {
  const [scrolled, setScrolled] = useState(false);
  const navigation = useNavigation(role);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`hd ${scrolled ? 'hd--scrolled' : ''} ${dark ? 'hd--dark' : ''}`}>
      <div className="d-none d-lg-block">
        <DesktopNavbar navigation={navigation} dark={dark} />
      </div>
      <div className="d-lg-none">
        <MobileNavbar navigation={navigation} />
      </div>
    </header>
  );
}

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { publicNavigation, clientNavigation, coachNavigation, adminNavigation } from '../../constants/navigation';

export default function useNavigation(role = 'visitor') {
  const location = useLocation();

  const nav = useMemo(() => {
    switch (role) {
      case 'client':
        return { ...clientNavigation, role: 'client' };
      case 'coach':
        return { ...coachNavigation, role: 'coach' };
      case 'admin':
      case 'super_admin':
        return { ...adminNavigation, role: 'admin' };
      default:
        return { ...publicNavigation, role: 'visitor' };
    }
  }, [role]);

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return { ...nav, isActive };
}

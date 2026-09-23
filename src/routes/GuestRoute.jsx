import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { DASHBOARD_PATHS } from '../utils/roles';

function GuestRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  if (isAuthenticated && user) {
    const dashboard = DASHBOARD_PATHS[user.role] || '/client/dashboard';
    return <Navigate to={dashboard} replace />;
  }

  return <Outlet />;
}

export default GuestRoute;

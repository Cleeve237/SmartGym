import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

function RoleRoute({ allowedRoles = [] }) {
  const user = useAuthStore((s) => s.user);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;

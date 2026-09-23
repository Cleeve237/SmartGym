import { DASHBOARD_PATHS } from '../../constants/auth/roles';

export function redirectByRole(role, fallback = '/login') {
  return DASHBOARD_PATHS[role] || fallback;
}

export function getHomeLink(role) {
  if (!role) return '/';
  const map = {
    client: '/client/dashboard',
    coach: '/coach/dashboard',
    admin: '/admin/dashboard',
    super_admin: '/admin/dashboard',
  };
  return map[role] || '/';
}

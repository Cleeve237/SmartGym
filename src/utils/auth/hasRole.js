import { ROLES, ROLE_HIERARCHY } from '../../constants/auth/roles';

export function hasRole(user, role) {
  if (!user || !user.role) return false;
  if (Array.isArray(role)) return role.includes(user.role);
  return user.role === role;
}

export function hasMinRole(user, minRole) {
  if (!user || !user.role) return false;
  const userLevel = ROLE_HIERARCHY[user.role];
  const minLevel = ROLE_HIERARCHY[minRole];
  if (userLevel === undefined || minLevel === undefined) return false;
  return userLevel >= minLevel;
}

export function isClient(user) {
  return hasRole(user, ROLES.CLIENT);
}

export function isCoach(user) {
  return hasRole(user, ROLES.COACH);
}

export function isAdmin(user) {
  return hasRole(user, [ROLES.ADMIN, ROLES.SUPER_ADMIN]);
}

export function isSuperAdmin(user) {
  return hasRole(user, ROLES.SUPER_ADMIN);
}

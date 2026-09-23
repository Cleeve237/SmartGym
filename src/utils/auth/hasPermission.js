import { ROLE_PERMISSIONS } from '../../constants/auth/permissions';

export function hasPermission(user, permission) {
  if (!user || !user.role) return false;
  const permissions = ROLE_PERMISSIONS[user.role];
  if (!permissions) return false;
  return permissions.includes(permission);
}

export function hasAnyPermission(user, permissions) {
  if (!user || !user.role) return false;
  return permissions.some((perm) => hasPermission(user, perm));
}

export function hasAllPermissions(user, permissions) {
  if (!user || !user.role) return false;
  return permissions.every((perm) => hasPermission(user, perm));
}

export function getRolePermissions(role) {
  return ROLE_PERMISSIONS[role] || [];
}

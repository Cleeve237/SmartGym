import { ROLES, ROLE_HIERARCHY, ROLE_LABELS } from '../../constants/auth/roles';
import { ROLE_PERMISSIONS } from '../../constants/auth/permissions';

const getCurrentUser = (state) => state.user;

const getCurrentRole = (state) => state.role;

const getPermissions = (state) => state.permissions;

const isAuthenticated = (state) => state.isAuthenticated;

const isLoading = (state) => state.isLoading;

const getError = (state) => state.error;

const getSession = (state) => state.session;

const isCoach = (state) => state.role === ROLES.COACH;

const isClient = (state) => state.role === ROLES.CLIENT;

const isAdmin = (state) => state.role === ROLES.ADMIN;

const isSuperAdmin = (state) => state.role === ROLES.SUPER_ADMIN;

const hasPermission = (permission) => (state) =>
  state.permissions.includes(permission);

const hasAnyPermission = (...permissions) => (state) =>
  permissions.some((p) => state.permissions.includes(p));

const hasAllPermissions = (...permissions) => (state) =>
  permissions.every((p) => state.permissions.includes(p));

const hasRole = (role) => (state) => state.role === role;

const hasMinRole = (minRole) => (state) => {
  if (!state.role) return false;
  const minLevel = ROLE_HIERARCHY[minRole];
  const currentLevel = ROLE_HIERARCHY[state.role];
  return currentLevel >= minLevel;
};

const getRoleLabel = (state) =>
  state.role ? ROLE_LABELS[state.role] || state.role : null;

const getPermissionsForCurrentRole = (state) =>
  state.role ? ROLE_PERMISSIONS[state.role] || [] : [];

const isEmailVerified = (state) => state.emailVerified;

const isPhoneVerified = (state) => state.phoneVerified;

export {
  getCurrentUser,
  getCurrentRole,
  getPermissions,
  isAuthenticated,
  isLoading,
  getError,
  getSession,
  isCoach,
  isClient,
  isAdmin,
  isSuperAdmin,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  hasRole,
  hasMinRole,
  getRoleLabel,
  getPermissionsForCurrentRole,
  isEmailVerified,
  isPhoneVerified,
};

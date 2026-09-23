import ROLES from './roles';

const PERMISSIONS = {
  // ── Client ──
  VIEW_COACHES: 'view_coaches',
  BOOK_SESSION: 'book_session',
  MAKE_PAYMENT: 'make_payment',
  VIEW_BOOKINGS: 'view_bookings',
  CANCEL_BOOKING: 'cancel_booking',
  VIEW_PAYMENT_HISTORY: 'view_payment_history',
  MANAGE_PROFILE: 'manage_profile',
  VIEW_PROGRAMMES: 'view_programmes',
  RATE_COACH: 'rate_coach',
  VIEW_FAVORITES: 'view_favorites',
  MANAGE_NOTIFICATIONS: 'manage_notifications',

  // ── Coach ──
  MANAGE_PROGRAMMES: 'manage_programmes',
  VIEW_REVENUE: 'view_revenue',
  MANAGE_AVAILABILITY: 'manage_availability',
  VIEW_CLIENTS: 'view_clients',
  CONFIRM_BOOKING: 'confirm_booking',
  COMPLETE_SESSION: 'complete_session',
  VIEW_REVIEWS: 'view_reviews',
  RESPOND_REVIEWS: 'respond_reviews',
  MANAGE_COACH_PROFILE: 'manage_coach_profile',

  // ── Admin ──
  MANAGE_USERS: 'manage_users',
  VALIDATE_COACH: 'validate_coach',
  MANAGE_ALL_BOOKINGS: 'manage_all_bookings',
  MANAGE_ALL_PAYMENTS: 'manage_all_payments',
  MANAGE_CATEGORIES: 'manage_categories',
  VIEW_STATISTICS: 'view_statistics',
  MANAGE_SYSTEM_SETTINGS: 'manage_system_settings',
  MODERATE_REVIEWS: 'moderate_reviews',
  SUSPEND_USER: 'suspend_user',
};

const ROLE_PERMISSIONS = {
  [ROLES.CLIENT]: [
    PERMISSIONS.VIEW_COACHES,
    PERMISSIONS.BOOK_SESSION,
    PERMISSIONS.MAKE_PAYMENT,
    PERMISSIONS.VIEW_BOOKINGS,
    PERMISSIONS.CANCEL_BOOKING,
    PERMISSIONS.VIEW_PAYMENT_HISTORY,
    PERMISSIONS.MANAGE_PROFILE,
    PERMISSIONS.VIEW_PROGRAMMES,
    PERMISSIONS.RATE_COACH,
    PERMISSIONS.VIEW_FAVORITES,
    PERMISSIONS.MANAGE_NOTIFICATIONS,
  ],

  [ROLES.COACH]: [
    PERMISSIONS.MANAGE_PROGRAMMES,
    PERMISSIONS.VIEW_REVENUE,
    PERMISSIONS.MANAGE_AVAILABILITY,
    PERMISSIONS.VIEW_CLIENTS,
    PERMISSIONS.CONFIRM_BOOKING,
    PERMISSIONS.COMPLETE_SESSION,
    PERMISSIONS.VIEW_REVIEWS,
    PERMISSIONS.RESPOND_REVIEWS,
    PERMISSIONS.MANAGE_COACH_PROFILE,
    PERMISSIONS.VIEW_BOOKINGS,
    PERMISSIONS.MANAGE_PROFILE,
  ],

  [ROLES.ADMIN]: Object.values(PERMISSIONS),
};

function hasPermission(role, permission) {
  const perms = ROLE_PERMISSIONS[role];
  if (!perms) return false;
  return perms.includes(permission);
}

function hasAnyPermission(role, permissions) {
  return permissions.some((p) => hasPermission(role, p));
}

function hasAllPermissions(role, permissions) {
  return permissions.every((p) => hasPermission(role, p));
}

function getRolePermissions(role) {
  return ROLE_PERMISSIONS[role] || [];
}

export {
  PERMISSIONS,
  ROLE_PERMISSIONS,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  getRolePermissions,
};
export default PERMISSIONS;

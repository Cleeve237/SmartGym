export const ROLES = {
  CLIENT: 'client',
  COACH: 'coach',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
};

export const ROLE_LABELS = {
  [ROLES.CLIENT]: 'Client',
  [ROLES.COACH]: 'Coach sportif',
  [ROLES.ADMIN]: 'Administrateur',
  [ROLES.SUPER_ADMIN]: 'Super administrateur',
};

export const ROLE_ICONS = {
  [ROLES.CLIENT]: 'bi-person-running',
  [ROLES.COACH]: 'bi-person-badge',
  [ROLES.ADMIN]: 'bi-shield-lock',
  [ROLES.SUPER_ADMIN]: 'bi-shield-fill-check',
};

export const DASHBOARD_PATHS = {
  [ROLES.CLIENT]: '/client/dashboard',
  [ROLES.COACH]: '/coach/dashboard',
  [ROLES.ADMIN]: '/admin/dashboard',
  [ROLES.SUPER_ADMIN]: '/admin/dashboard',
};

export const ROLE_HIERARCHY = {
  [ROLES.CLIENT]: 0,
  [ROLES.COACH]: 1,
  [ROLES.ADMIN]: 2,
  [ROLES.SUPER_ADMIN]: 3,
};

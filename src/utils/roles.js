const ROLES = {
  CLIENT: 'client',
  COACH: 'coach',
  ADMIN: 'admin',
};

const ROLE_LABELS = {
  [ROLES.CLIENT]: 'Client',
  [ROLES.COACH]: 'Coach',
  [ROLES.ADMIN]: 'Administrateur',
};

const DASHBOARD_PATHS = {
  [ROLES.CLIENT]: '/client/dashboard',
  [ROLES.COACH]: '/coach/dashboard',
  [ROLES.ADMIN]: '/admin/dashboard',
};

export { ROLES, ROLE_LABELS, DASHBOARD_PATHS };
export default ROLES;

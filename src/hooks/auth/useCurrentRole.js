import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';
import useAuthStore from '../../stores/auth/authStore';
import {
  getCurrentRole,
  getRoleLabel,
  isClient,
  isCoach,
  isAdmin,
  isSuperAdmin,
  hasRole as hasRoleSelector,
  hasMinRole as hasMinRoleSelector,
} from '../../stores/auth/authSelectors';
import { ROLES, ROLE_HIERARCHY } from '../../constants/auth/roles';

export default function useCurrentRole() {
  const role = useAuthStore(getCurrentRole, shallow);
  const roleLabel = useAuthStore(getRoleLabel, shallow);
  const client = useAuthStore(isClient);
  const coach = useAuthStore(isCoach);
  const admin = useAuthStore(isAdmin);
  const superAdmin = useAuthStore(isSuperAdmin);
  const store = useAuthStore.getState();

  return useMemo(() => ({
    role,
    roleLabel,
    isClient: client,
    isCoach: coach,
    isAdmin: admin,
    isSuperAdmin: superAdmin,
    hasRole: (r) => hasRoleSelector(r)(store),
    hasMinRole: (r) => hasMinRoleSelector(r)(store),
    roleLevel: role ? ROLE_HIERARCHY[role] ?? -1 : -1,
    ROLES,
  }), [role, roleLabel, client, coach, admin, superAdmin, store]);
}

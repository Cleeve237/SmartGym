import { useMemo } from 'react';
import useAuth from './useAuth';
import { ROLES, ROLE_LABELS, ROLE_HIERARCHY } from '../../constants/auth/roles';
import { isClient, isCoach, isAdmin, isSuperAdmin, hasRole, hasMinRole } from '../../utils/auth/hasRole';

export default function useRole() {
  const { user } = useAuth();

  return useMemo(() => {
    if (!user) {
      return {
        role: null,
        roleLabel: null,
        isClient: false,
        isCoach: false,
        isAdmin: false,
        isSuperAdmin: false,
        hasRole: () => false,
        hasMinRole: () => false,
        roleLevel: -1,
      };
    }

    return {
      role: user.role,
      roleLabel: ROLE_LABELS[user.role] || user.role,
      isClient: isClient(user),
      isCoach: isCoach(user),
      isAdmin: isAdmin(user),
      isSuperAdmin: isSuperAdmin(user),
      hasRole: (role) => hasRole(user, role),
      hasMinRole: (minRole) => hasMinRole(user, minRole),
      roleLevel: ROLE_HIERARCHY[user.role] ?? -1,
      ROLES,
    };
  }, [user]);
}

import { useMemo } from 'react';
import useAuthStore from '../../stores/auth/authStore';
import {
  getCurrentUser,
  getPermissions,
  hasPermission as hasPermissionSelector,
  hasAnyPermission as hasAnyPermissionSelector,
  hasAllPermissions as hasAllPermissionsSelector,
} from '../../stores/auth/authSelectors';
import { PERMISSIONS, PERMISSION_LABELS } from '../../constants/auth/permissions';
import { ROLE_PERMISSIONS } from '../../constants/auth/permissions';

export default function usePermissions() {
  const user = useAuthStore(getCurrentUser);
  const permissions = useAuthStore(getPermissions);
  const store = useAuthStore.getState();

  return useMemo(() => {
    if (!user) {
      return {
        can: () => false,
        canAny: () => false,
        canAll: () => false,
        permissions: [],
        allPermissions: PERMISSIONS,
        permissionLabels: PERMISSION_LABELS,
      };
    }

    return {
      can: (permission) => hasPermissionSelector(permission)(store),
      canAny: (...perms) => hasAnyPermissionSelector(...perms)(store),
      canAll: (...perms) => hasAllPermissionsSelector(...perms)(store),
      permissions,
      rolePermissions: ROLE_PERMISSIONS[user.role] || [],
      allPermissions: PERMISSIONS,
      permissionLabels: PERMISSION_LABELS,
    };
  }, [user, permissions, store]);
}

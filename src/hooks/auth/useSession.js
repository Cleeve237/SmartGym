import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import useAuthStore from '../../stores/auth/authStore';
import {
  getSession,
  isAuthenticated,
} from '../../stores/auth/authSelectors';

export default function useSession() {
  const session = useAuthStore(getSession, shallow);
  const authenticated = useAuthStore(isAuthenticated);
  const expiresAt = useAuthStore((s) => s.expiresAt, shallow);
  const accessToken = useAuthStore((s) => s.accessToken, shallow);
  const getRemainingTime = useAuthStore((s) => s.getRemainingTime);
  const refreshSession = useAuthStore((s) => s.refreshSession);
  const endSession = useAuthStore((s) => s.endSession);
  const startSession = useAuthStore((s) => s.startSession);

  const remainingTime = useAuthStore(getRemainingTime);

  const refresh = useCallback(async () => {
    await refreshSession();
  }, [refreshSession]);

  const end = useCallback(() => {
    endSession();
  }, [endSession]);

  return {
    session,
    isAuthenticated: authenticated,
    expiresAt,
    accessToken,
    remainingTime,
    refresh,
    end,
    startSession,
    getRemainingTime,
  };
}

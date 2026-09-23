import { createContext, useState, useCallback, useEffect } from 'react';
import { fakeAuthService } from '../../services/auth/fakeAuthService';
import { redirectByRole } from '../../utils/auth/redirectByRole';
import { ROLES } from '../../constants/auth/roles';

export const AuthContext = createContext(null);

const AUTH_STATES = {
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  EXPIRED: 'expired',
};

function loadSession() {
  try {
    const stored = localStorage.getItem('sg_session');
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      localStorage.removeItem('sg_session');
      return { expired: true };
    }
    return parsed;
  } catch {
    localStorage.removeItem('sg_session');
    return null;
  }
}

function saveSession(data) {
  const session = {
    user: data.user,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    expiresAt: data.expiresAt,
  };
  localStorage.setItem('sg_session', JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem('sg_session');
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(AUTH_STATES.LOADING);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const session = loadSession();
    if (!session) {
      setAuthState(AUTH_STATES.UNAUTHENTICATED);
      return;
    }
    if (session.expired) {
      setAuthState(AUTH_STATES.EXPIRED);
      return;
    }
    setUser(session.user);
    setAccessToken(session.accessToken);
    setRefreshToken(session.refreshToken);
    setAuthState(AUTH_STATES.AUTHENTICATED);
  }, []);

  const login = useCallback(async (credentials) => {
    setAuthState(AUTH_STATES.LOADING);
    try {
      const data = await fakeAuthService.login(credentials);
      setUser(data.user);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      saveSession(data);
      setAuthState(AUTH_STATES.AUTHENTICATED);
      return data;
    } catch (error) {
      setAuthState(AUTH_STATES.UNAUTHENTICATED);
      throw error;
    }
  }, []);

  const register = useCallback(async (data) => {
    setAuthState(AUTH_STATES.LOADING);
    try {
      const result = await fakeAuthService.register(data);
      setUser(result.user);
      setAccessToken(result.accessToken);
      setRefreshToken(result.refreshToken);
      saveSession(result);
      setAuthState(AUTH_STATES.AUTHENTICATED);
      return result;
    } catch (error) {
      setAuthState(AUTH_STATES.UNAUTHENTICATED);
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fakeAuthService.logout();
    } catch {
      // Ignore
    }
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    clearSession();
    setAuthState(AUTH_STATES.UNAUTHENTICATED);
  }, []);

  const refresh = useCallback(async () => {
    try {
      const data = await fakeAuthService.refreshToken();
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      return data;
    } catch {
      setAuthState(AUTH_STATES.EXPIRED);
      clearSession();
      throw new Error('Session expir\u00e9e');
    }
  }, []);

  const getDashboardPath = useCallback(() => {
    if (!user) return '/login';
    return redirectByRole(user.role);
  }, [user]);

  const value = {
    user,
    accessToken,
    refreshToken,
    authState,
    isAuthenticated: authState === AUTH_STATES.AUTHENTICATED,
    isLoading: authState === AUTH_STATES.LOADING,
    isExpired: authState === AUTH_STATES.EXPIRED,
    login,
    register,
    logout,
    refresh,
    getDashboardPath,
    ROLES,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

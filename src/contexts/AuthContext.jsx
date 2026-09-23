import { createContext } from 'react';
import useAuthStore from '../stores/authStore';

/**
 * Contexte d'authentification SmartGym.
 *
 * Fournit l'etat d'auth et les actions via Zustand.
 * Utilise uniquement pour les composants qui ont besoin
 * du contexte React (pas necessaire avec Zustand, mais
 * prepare pour une migration future ou des composants legacy).
 *
 * Prefere useAuth() hook pour l'usage standard.
 */
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setUser = useAuthStore((state) => state.setUser);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setRefreshToken = useAuthStore((state) => state.setRefreshToken);
  const setLoading = useAuthStore((state) => state.setLoading);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const auth = {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    isLoading,
    login,
    logout,
    setUser,
    setAccessToken,
    setRefreshToken,
    setLoading,
    clearAuth,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

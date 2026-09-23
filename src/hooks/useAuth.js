import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

/**
 * Hook personnalisé pour acceder au contexte d'authentification.
 *
 * Utilisation :
 *   const { user, isAuthenticated, login, logout } = useAuth();
 *
 * Doit etre utilise dans un composant enveloppe par <AuthProvider>.
 */
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth doit etre utilise dans un <AuthProvider>');
  }

  return context;
}

export default useAuth;

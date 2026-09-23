import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuth doit \u00eatre utilis\u00e9 dans un <AuthProvider>. ' +
        'Enveloppez votre application avec <AuthProvider> dans App.jsx.'
    );
  }
  return context;
}

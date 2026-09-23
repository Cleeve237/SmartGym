import useAuthStore from '../../stores/auth/authStore';
import { isAuthenticated, isLoading } from '../../stores/auth/authSelectors';

export default function useIsAuthenticated() {
  const authenticated = useAuthStore(isAuthenticated);
  const loading = useAuthStore(isLoading);
  return { isAuthenticated: authenticated, isLoading: loading };
}

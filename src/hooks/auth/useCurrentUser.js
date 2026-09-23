import { shallow } from 'zustand/shallow';
import useAuthStore from '../../stores/auth/authStore';
import { getCurrentUser } from '../../stores/auth/authSelectors';

export default function useCurrentUser() {
  const user = useAuthStore(getCurrentUser, shallow);
  return user;
}

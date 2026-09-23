import { useMemo } from 'react';
import { calculateStrength } from '../../utils/auth/passwordStrength';

export default function usePasswordStrength(password) {
  return useMemo(() => calculateStrength(password || ''), [password]);
}

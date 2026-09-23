import { ROLE_PERMISSIONS } from '../../constants/auth/permissions';
import { mockAuthApi } from '../../services/auth/mockAuthApi';
import authInitialState from './authInitialState';

function generateSession() {
  const now = Date.now();
  return {
    id: 'session_' + now,
    startedAt: now,
    expiresAt: now + 3600000,
    remainingTime: 3600000,
  };
}

const authActions = (set, get) => ({
  startLoading: () => set({ isLoading: true, error: null }),

  stopLoading: () => set({ isLoading: false }),

  clearError: () => set({ error: null }),

  resetStore: () => set({ ...authInitialState, isInitialized: true }),

  login: async ({ email, password, rememberMe = false }) => {
    set({ isLoading: true, error: null });
    try {
      const response = await mockAuthApi.login({ email, password, rememberMe });
      const { user, accessToken, refreshToken, expiresAt } = response;
      const role = user.role;
      const permissions = ROLE_PERMISSIONS[role] || [];
      const session = generateSession();
      set({
        user,
        role,
        permissions,
        accessToken,
        refreshToken,
        expiresAt,
        rememberMe,
        isAuthenticated: true,
        isLoading: false,
        isInitialized: true,
        error: null,
        session,
        emailVerified: true,
        phoneVerified: !!user.phone,
        otp: {
          email: null,
          phone: null,
          emailVerified: true,
          phoneVerified: !!user.phone,
        },
      });
      return user;
    } catch (error) {
      const message = error?.message || 'Erreur de connexion';
      set({ isLoading: false, error: message, isInitialized: true });
      throw error;
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await mockAuthApi.register(data);
      const { user, accessToken, refreshToken, expiresAt } = response;
      const role = user.role;
      const permissions = ROLE_PERMISSIONS[role] || [];
      const session = generateSession();
      set({
        user,
        role,
        permissions,
        accessToken,
        refreshToken,
        expiresAt,
        rememberMe: false,
        isAuthenticated: true,
        isLoading: false,
        isInitialized: true,
        error: null,
        session,
        emailVerified: false,
        phoneVerified: false,
      });
      return user;
    } catch (error) {
      const message = error?.message || "Erreur d'inscription";
      set({ isLoading: false, error: message, isInitialized: true });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await mockAuthApi.logout();
    } catch {
      // proceed with local cleanup
    }
    set({ ...authInitialState, isInitialized: true });
  },

  refreshSession: async () => {
    try {
      const response = await mockAuthApi.refresh();
      const session = generateSession();
      set({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        expiresAt: response.expiresAt,
        session,
        isAuthenticated: true,
      });
    } catch {
      set({
        ...authInitialState,
        isInitialized: true,
        isAuthenticated: false,
      });
      throw new Error('Session expir\u00e9e');
    }
  },

  updateUser: (userData) => {
    const current = get().user;
    if (!current) return;
    const updated = { ...current, ...userData };
    set({ user: updated });
  },

  updateAvatar: (avatarUrl) => {
    const current = get().user;
    if (!current) return;
    set({ user: { ...current, avatar: avatarUrl } });
  },

  changeRole: (role) => {
    const permissions = ROLE_PERMISSIONS[role] || [];
    const current = get().user;
    set({
      role,
      permissions,
      user: current ? { ...current, role } : null,
    });
  },

  setPermissions: (permissions) => set({ permissions }),

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      await mockAuthApi.verifyEmail(code);
      set({
        emailVerified: true,
        isLoading: false,
        otp: { ...get().otp, emailVerified: true, email: null },
      });
      return true;
    } catch (error) {
      set({ isLoading: false, error: error?.message || 'Code invalide' });
      return false;
    }
  },

  verifyPhone: async (code) => {
    set({ isLoading: true, error: null });
    try {
      await mockAuthApi.verifyPhone(code);
      set({
        phoneVerified: true,
        isLoading: false,
        otp: { ...get().otp, phoneVerified: true, phone: null },
      });
      return true;
    } catch (error) {
      set({ isLoading: false, error: error?.message || 'Code invalide' });
      return false;
    }
  },

  startSession: () => {
    const session = generateSession();
    set({ session, isAuthenticated: true });
    return session;
  },

  endSession: () => {
    set({ session: null, isAuthenticated: false });
  },

  refresh: async () => {
    return get().refreshSession();
  },

  getRemainingTime: () => {
    const { session, expiresAt } = get();
    if (session) return session.remainingTime;
    if (expiresAt) return Math.max(0, expiresAt - Date.now());
    return 0;
  },
});

export default authActions;

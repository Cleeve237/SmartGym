import { create } from 'zustand';
import storage from '../utils/storage';
import authService from '../services/auth.service';

const useAuthStore = create((set, get) => ({
  user: storage.getUser(),
  accessToken: storage.getToken(),
  refreshToken: storage.getRefreshToken(),
  isAuthenticated: !!storage.getToken(),
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const data = await authService.login(credentials);
      storage.setToken(data.accessToken);
      storage.setRefreshToken(data.refreshToken);
      storage.setUser(data.user);
      set({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.register(data);
      storage.setToken(result.accessToken);
      storage.setRefreshToken(result.refreshToken);
      storage.setUser(result.user);
      set({
        user: result.user,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return result;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } catch {
      // Logout even if server call fails
    }
    storage.clearAll();
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },

  fetchProfile: async () => {
    set({ isLoading: true });
    try {
      const data = await authService.getProfile();
      storage.setUser(data.user);
      set({ user: data.user, isLoading: false });
      return data.user;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.updateProfile(data);
      storage.setUser(result.user);
      set({ user: result.user, isLoading: false });
      return result.user;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  setUser: (userData) => {
    storage.setUser(userData);
    set({ user: userData });
  },

  setAccessToken: (token) => {
    storage.setToken(token);
    set({ accessToken: token });
  },

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),

  clearAuth: () => {
    storage.clearAll();
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },
}));

export default useAuthStore;

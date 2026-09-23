import { create } from 'zustand';
import userService from '../services/user.service';

const useUserStore = create((set) => ({
  users: [],
  selectedUser: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,

  fetchUsers: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const data = await userService.getAll(params);
      set({
        users: data.users || data.data || [],
        totalCount: data.total || data.totalCount || 0,
        currentPage: data.page || data.currentPage || 1,
        totalPages: data.totalPages || 1,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  fetchUser: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await userService.getById(id);
      set({ selectedUser: data.user || data, isLoading: false });
      return data.user || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  createUser: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await userService.create(userData);
      set((state) => ({
        users: [data.user || data, ...state.users],
        isLoading: false,
      }));
      return data.user || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await userService.update(id, userData);
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? data.user || data : u)),
        selectedUser: data.user || data,
        isLoading: false,
      }));
      return data.user || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  deleteUser: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await userService.delete(id);
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  suspendUser: async (id) => {
    try {
      await userService.suspend(id);
      set((state) => ({
        users: state.users.map((u) =>
          u.id === id ? { ...u, status: 'suspended' } : u
        ),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  setUsers: (users) => set({ users }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  clearUsers: () => set({ users: [], selectedUser: null, totalCount: 0 }),
}));

export default useUserStore;

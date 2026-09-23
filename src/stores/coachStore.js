import { create } from 'zustand';
import coachService from '../services/coach.service';

const useCoachStore = create((set) => ({
  coaches: [],
  selectedCoach: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,

  fetchCoaches: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const data = await coachService.getAll(params);
      set({
        coaches: data.coaches || data.data || [],
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

  fetchCoach: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const data = await coachService.getById(id);
      set({ selectedCoach: data.coach || data, isLoading: false });
      return data.coach || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  createCoach: async (coachData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await coachService.create(coachData);
      set((state) => ({
        coaches: [data.coach || data, ...state.coaches],
        isLoading: false,
      }));
      return data.coach || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  updateCoach: async (id, coachData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await coachService.update(id, coachData);
      set((state) => ({
        coaches: state.coaches.map((c) => (c.id === id ? data.coach || data : c)),
        selectedCoach: data.coach || data,
        isLoading: false,
      }));
      return data.coach || data;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  deleteCoach: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await coachService.delete(id);
      set((state) => ({
        coaches: state.coaches.filter((c) => c.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  validateCoach: async (id) => {
    try {
      await coachService.validate(id);
      set((state) => ({
        coaches: state.coaches.map((c) =>
          c.id === id ? { ...c, status: 'validated' } : c
        ),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  setCoaches: (coaches) => set({ coaches }),
  setSelectedCoach: (coach) => set({ selectedCoach: coach }),
  clearCoaches: () => set({ coaches: [], selectedCoach: null, totalCount: 0 }),
}));

export default useCoachStore;

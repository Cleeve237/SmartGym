import { create } from 'zustand';

const useUiStore = create((set) => ({
  sidebarOpen: false,
  loading: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setLoading: (loading) => set({ loading }),
}));

export default useUiStore;

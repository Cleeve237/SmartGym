import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import authInitialState from './authInitialState';
import authActions from './authActions';
import authPersistConfig from './authPersistConfig';

const useAuthStore = create(
  persist(
    (set, get) => ({
      ...authInitialState,
      ...authActions(set, get),
    }),
    {
      ...authPersistConfig,
      partialize: (state) => {
        const { user, role, rememberMe, isAuthenticated } = state;
        return { user, role, rememberMe, isAuthenticated };
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true;
        }
      },
    }
  )
);

export default useAuthStore;

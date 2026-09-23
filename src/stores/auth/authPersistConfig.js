const authPersistConfig = {
  key: 'smartgym-auth',
  version: 1,
  whitelist: ['user', 'role', 'rememberMe', 'isAuthenticated'],
  migrate: (persistedState, version) => {
    if (version === 0) {
      return {
        ...persistedState,
        user: persistedState.user || null,
        role: persistedState.role || null,
      };
    }
    return persistedState;
  },
};

export default authPersistConfig;

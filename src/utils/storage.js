const KEYS = {
  ACCESS_TOKEN: 'smartgym_access_token',
  REFRESH_TOKEN: 'smartgym_refresh_token',
  USER: 'smartgym_user',
};

const storage = {
  // ── Access Token ──
  getToken: () => localStorage.getItem(KEYS.ACCESS_TOKEN),
  setToken: (token) => localStorage.setItem(KEYS.ACCESS_TOKEN, token),
  removeToken: () => localStorage.removeItem(KEYS.ACCESS_TOKEN),

  // ── Refresh Token ──
  getRefreshToken: () => localStorage.getItem(KEYS.REFRESH_TOKEN),
  setRefreshToken: (token) => localStorage.setItem(KEYS.REFRESH_TOKEN, token),
  removeRefreshToken: () => localStorage.removeItem(KEYS.REFRESH_TOKEN),

  // ── User ──
  getUser: () => {
    try {
      const raw = localStorage.getItem(KEYS.USER);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  setUser: (user) => localStorage.setItem(KEYS.USER, JSON.stringify(user)),
  removeUser: () => localStorage.removeItem(KEYS.USER),

  // ── Clear ──
  clearAll: () => {
    localStorage.removeItem(KEYS.ACCESS_TOKEN);
    localStorage.removeItem(KEYS.REFRESH_TOKEN);
    localStorage.removeItem(KEYS.USER);
  },
};

export default storage;

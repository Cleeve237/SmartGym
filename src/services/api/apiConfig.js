const apiConfig = {
  baseURL: import.meta.env.VITE_API_URL || 'https://api.smartgym.cm/api/v1',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '15000', 10),
  env: import.meta.env.MODE || 'development',

  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  isDev: import.meta.env.MODE === 'development',
  isProd: import.meta.env.MODE === 'production',
};

export default apiConfig;

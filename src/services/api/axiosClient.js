import axios from 'axios';
import apiConfig from './apiConfig';
import storage from '../../utils/storage';
import { handleApiError } from '../../utils/apiError';

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  headers: apiConfig.headers,
  withCredentials: true,
});

// ── Request Interceptor ──
axiosClient.interceptors.request.use(
  (config) => {
    const token = storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response Interceptor ──
axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      const { status, data } = error.response;

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = storage.getRefreshToken();
        if (refreshToken) {
          try {
            const response = await axios.post(
              `${apiConfig.baseURL}/auth/refresh-token`,
              { refreshToken },
              { headers: apiConfig.headers }
            );
            const { accessToken, refreshToken: newRefresh } = response.data;
            const storage = await import('../../utils/storage');
            storage.default.setToken(accessToken);
            if (newRefresh) storage.default.setRefreshToken(newRefresh);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axiosClient(originalRequest);
          } catch {
            const storage = await import('../../utils/storage');
            storage.default.clearAll();
            window.location.href = '/login';
            return Promise.reject(error);
          }
        } else {
          window.location.href = '/login';
        }
      }

      return Promise.reject(handleApiError(error));
    }

    return Promise.reject({
      message: 'Erreur réseau. Vérifiez votre connexion.',
      status: 0,
      original: error,
    });
  }
);

export default axiosClient;

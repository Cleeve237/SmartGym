import api from './api';
import E from './api/apiEndpoints';

const authService = {
  login: (credentials) => api.post(E.AUTH.LOGIN, credentials),
  register: (data) => api.post(E.AUTH.REGISTER, data),
  forgotPassword: (data) => api.post(E.AUTH.FORGOT_PASSWORD, data),
  resetPassword: (data) => api.post(E.AUTH.RESET_PASSWORD, data),
  refreshToken: (refreshToken) => api.post(E.AUTH.REFRESH_TOKEN, { refreshToken }),
  logout: () => api.post(E.AUTH.LOGOUT),
  getProfile: () => api.get(E.AUTH.PROFILE),
  updateProfile: (data) => api.put(E.AUTH.UPDATE_PROFILE, data),
  changePassword: (data) => api.post(E.AUTH.CHANGE_PASSWORD, data),
  uploadAvatar: (formData) => api.post(E.AUTH.UPLOAD_AVATAR, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

export default authService;

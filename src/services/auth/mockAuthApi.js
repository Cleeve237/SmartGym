import { fakeAuthService, fakeCredentials } from './fakeAuthService';

const FAKE_DELAY = 600;

function delay(ms = FAKE_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mockAuthApi = {
  async login({ email, password, rememberMe }) {
    return fakeAuthService.login({ email, password, rememberMe });
  },

  async register(data) {
    return fakeAuthService.register(data);
  },

  async logout() {
    return fakeAuthService.logout();
  },

  async refresh() {
    return fakeAuthService.refreshToken();
  },

  async verifyEmail(code) {
    return fakeAuthService.verifyEmail(code);
  },

  async verifyPhone(code) {
    return fakeAuthService.verifyPhone(code);
  },

  async forgotPassword(email) {
    return fakeAuthService.forgotPassword(email);
  },

  async resetPassword({ token, password }) {
    return fakeAuthService.resetPassword({ token, password });
  },

  async getProfile(userId) {
    return fakeAuthService.getProfile(userId);
  },

  async resendEmailVerification() {
    return fakeAuthService.resendEmailVerification();
  },

  async resendPhoneVerification() {
    return fakeAuthService.resendPhoneVerification();
  },

  async updateProfile(userId, data) {
    await delay(400);
    return { success: true, user: { id: userId, ...data } };
  },

  async updateAvatar(userId, file) {
    await delay(600);
    void file;
    return {
      success: true,
      avatar: `https://ui-avatars.com/api/?name=User&size=128&background=16A34A&color=fff`,
    };
  },
};

export { mockAuthApi, fakeCredentials, FAKE_DELAY };

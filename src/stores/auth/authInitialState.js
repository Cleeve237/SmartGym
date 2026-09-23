const authInitialState = {
  user: null,
  role: null,
  permissions: [],
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  rememberMe: false,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,
  error: null,
  session: null,
  otp: {
    email: null,
    phone: null,
    emailVerified: false,
    phoneVerified: false,
  },
  emailVerified: false,
  phoneVerified: false,
};

export default authInitialState;

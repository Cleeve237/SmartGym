const FAKE_DELAY = 800;

const FAKE_USERS = [
  {
    id: 'client-1',
    email: 'client@smartgym.cm',
    password: 'Client123!',
    firstName: 'Jean',
    lastName: 'Dupont',
    role: 'client',
    phone: '+237 612 345 678',
    avatar: null,
  },
  {
    id: 'coach-1',
    email: 'coach@smartgym.cm',
    password: 'Coach123!',
    firstName: 'Paul',
    lastName: 'Biyong',
    role: 'coach',
    phone: '+237 698 765 432',
    avatar: null,
    speciality: 'Fitness',
    city: 'Douala',
  },
  {
    id: 'admin-1',
    email: 'admin@smartgym.cm',
    password: 'Admin123!',
    firstName: 'Admin',
    lastName: 'SmartGym',
    role: 'admin',
    phone: '+237 600 000 001',
    avatar: null,
  },
];

const FAKE_TOKENS = {
  accessToken: 'fake_access_token_smartgym_' + Date.now(),
  refreshToken: 'fake_refresh_token_smartgym_' + Date.now(),
  expiresAt: Date.now() + 3600000,
};

function delay(ms = FAKE_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function findUser(email) {
  return FAKE_USERS.find((u) => u.email === email);
}

export const fakeAuthService = {
  async login({ email, password, rememberMe }) {
    await delay();
    const user = findUser(email);
    if (!user || user.password !== password) {
      throw { status: 401, message: 'Email ou mot de passe incorrect' };
    }
    const tokens = { ...FAKE_TOKENS };
    if (rememberMe) tokens.expiresAt = Date.now() + 86400000 * 30;
    const { password: _, ...safeUser } = user;
    return { user: safeUser, ...tokens };
  },

  async register(data) {
    await delay();
    const exists = findUser(data.email);
    if (exists) {
      throw { status: 409, message: 'Un compte existe d\u00e9j\u00e0 avec cet email' };
    }
    const newUser = {
      id: data.role + '-' + Date.now(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone || '',
      role: data.role || 'client',
      avatar: null,
    };
    const { password: _, ...safeUser } = newUser;
    return { user: safeUser, ...FAKE_TOKENS };
  },

  async refreshToken() {
    await delay();
    return { ...FAKE_TOKENS };
  },

  async logout() {
    await delay(300);
    return { success: true };
  },

  async getProfile(userId) {
    await delay();
    const user = FAKE_USERS.find((u) => u.id === userId);
    if (!user) throw { status: 404, message: 'Utilisateur introuvable' };
    const { password: _, ...safeUser } = user;
    return { user: safeUser };
  },

  async forgotPassword(email) {
    await delay();
    const user = findUser(email);
    return {
      success: true,
      message: user
        ? 'Un email de r\u00e9initialisation a \u00e9t\u00e9 envoy\u00e9'
        : 'Si un compte existe, un email sera envoy\u00e9',
    };
  },

  async resetPassword({ token, password }) {
    await delay();
    void token;
    void password;
    return { success: true, message: 'Mot de passe r\u00e9initialis\u00e9 avec succ\u00e8s' };
  },

  async verifyEmail(code) {
    await delay();
    void code;
    return { success: true, message: 'Email v\u00e9rifi\u00e9 avec succ\u00e8s' };
  },

  async verifyPhone(code) {
    await delay();
    void code;
    return { success: true, message: 'T\u00e9l\u00e9phone v\u00e9rifi\u00e9 avec succ\u00e8s' };
  },

  async resendEmailVerification() {
    await delay();
    return { success: true, message: 'Code renvoy\u00e9' };
  },

  async resendPhoneVerification() {
    await delay();
    return { success: true, message: 'Code renvoy\u00e9' };
  },
};

export const fakeCredentials = {
  client: { email: 'client@smartgym.cm', password: 'Client123!' },
  coach: { email: 'coach@smartgym.cm', password: 'Coach123!' },
  admin: { email: 'admin@smartgym.cm', password: 'Admin123!' },
};

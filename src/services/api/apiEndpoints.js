const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  REFRESH_TOKEN: '/auth/refresh-token',
  LOGOUT: '/auth/logout',
  PROFILE: '/auth/profile',
  UPDATE_PROFILE: '/auth/profile',
  CHANGE_PASSWORD: '/auth/change-password',
  UPLOAD_AVATAR: '/auth/avatar',
};

const USERS = {
  BASE: '/users',
  GET_ALL: '/users',
  GET_BY_ID: (id) => `/users/${id}`,
  CREATE: '/users',
  UPDATE: (id) => `/users/${id}`,
  DELETE: (id) => `/users/${id}`,
  SUSPEND: (id) => `/users/${id}/suspend`,
  ACTIVATE: (id) => `/users/${id}/activate`,
};

const COACHS = {
  BASE: '/coaches',
  GET_ALL: '/coaches',
  GET_BY_ID: (id) => `/coaches/${id}`,
  CREATE: '/coaches',
  UPDATE: (id) => `/coaches/${id}`,
  DELETE: (id) => `/coaches/${id}`,
  VALIDATE: (id) => `/coaches/${id}/validate`,
  REJECT: (id) => `/coaches/${id}/reject`,
  SUSPEND: (id) => `/coaches/${id}/suspend`,
  GET_PROGRAMS: (id) => `/coaches/${id}/programs`,
  GET_AVAILABILITY: (id) => `/coaches/${id}/availability`,
  GET_REVIEWS: (id) => `/coaches/${id}/reviews`,
  GET_STATS: (id) => `/coaches/${id}/stats`,
};

const BOOKINGS = {
  BASE: '/bookings',
  GET_ALL: '/bookings',
  GET_BY_ID: (id) => `/bookings/${id}`,
  CREATE: '/bookings',
  UPDATE: (id) => `/bookings/${id}`,
  CANCEL: (id) => `/bookings/${id}/cancel`,
  CONFIRM: (id) => `/bookings/${id}/confirm`,
  COMPLETE: (id) => `/bookings/${id}/complete`,
  GET_BY_COACH: (coachId) => `/coaches/${coachId}/bookings`,
  GET_BY_CLIENT: (clientId) => `/clients/${clientId}/bookings`,
};

const PAYMENTS = {
  BASE: '/payments',
  INITIATE: '/payments/initiate',
  VERIFY: (id) => `/payments/verify/${id}`,
  GET_HISTORY: '/payments/history',
  GET_BY_ID: (id) => `/payments/${id}`,
  REFUND: (id) => `/payments/${id}/refund`,
  GET_STATS: '/payments/stats',
};

const PROGRAMS = {
  BASE: '/programs',
  GET_ALL: '/programs',
  GET_BY_ID: (id) => `/programs/${id}`,
  CREATE: '/programs',
  UPDATE: (id) => `/programs/${id}`,
  DELETE: (id) => `/programs/${id}`,
  GET_BY_COACH: (coachId) => `/coaches/${coachId}/programs`,
};

const REVIEWS = {
  BASE: '/reviews',
  GET_ALL: '/reviews',
  GET_BY_ID: (id) => `/reviews/${id}`,
  CREATE: '/reviews',
  UPDATE: (id) => `/reviews/${id}`,
  DELETE: (id) => `/reviews/${id}`,
  APPROVE: (id) => `/reviews/${id}/approve`,
  FLAG: (id) => `/reviews/${id}/flag`,
  GET_BY_COACH: (coachId) => `/coaches/${coachId}/reviews`,
};

const CATEGORIES = {
  BASE: '/categories',
  GET_ALL: '/categories',
  GET_BY_ID: (id) => `/categories/${id}`,
  CREATE: '/categories',
  UPDATE: (id) => `/categories/${id}`,
  DELETE: (id) => `/categories/${id}`,
};

const AVAILABILITY = {
  BASE: '/availability',
  GET: (coachId) => `/coaches/${coachId}/availability`,
  UPDATE: (coachId) => `/coaches/${coachId}/availability`,
};

const UPLOADS = {
  AVATAR: '/uploads/avatar',
  IMAGE: '/uploads/image',
};

const apiEndpoints = {
  AUTH,
  USERS,
  COACHS,
  BOOKINGS,
  PAYMENTS,
  PROGRAMS,
  REVIEWS,
  CATEGORIES,
  AVAILABILITY,
  UPLOADS,
};

export default apiEndpoints;

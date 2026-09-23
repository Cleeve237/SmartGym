export const AUTH_ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  REGISTER_CLIENT: '/register/client',
  REGISTER_COACH: '/register/coach',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  RESET_SUCCESS: '/reset-success',
  VERIFY_EMAIL: '/verify-email',
  VERIFY_PHONE: '/verify-phone',
  EMAIL_SENT: '/email-sent',
};

export const PROTECTED_ROUTES = {
  CLIENT_DASHBOARD: '/client/dashboard',
  CLIENT_PROFILE: '/client/profile',
  CLIENT_BOOKINGS: '/client/bookings',
  CLIENT_PAYMENTS: '/client/payments',
  COACH_DASHBOARD: '/coach/dashboard',
  COACH_PROFILE: '/coach/profile',
  COACH_PROGRAMS: '/coach/programs',
  COACH_CALENDAR: '/coach/calendar',
  COACH_AVAILABILITY: '/coach/availability',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_COACHES: '/admin/coaches',
  ADMIN_REPORTS: '/admin/reports',
};

export const PUBLIC_ROUTES = {
  HOME: '/',
  COACHES: '/coaches',
  PROGRAMS: '/programs',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
};

export const ERROR_ROUTES = {
  ACCESS_DENIED: '/access-denied',
  SESSION_EXPIRED: '/session-expired',
  NOT_FOUND: '/404',
};

export const isPublicRoute = (pathname) =>
  Object.values(PUBLIC_ROUTES).some((route) => pathname.startsWith(route));

export const isAuthRoute = (pathname) =>
  Object.values(AUTH_ROUTES).some((route) => pathname.startsWith(route));

export const ROLES = {
  CLIENT: 'client',
  COACH: 'coach',
  ADMIN: 'admin',
};

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

export const PAYMENT_METHODS = {
  MTN_MOMO: 'mtn_momo',
  ORANGE_MONEY: 'orange_money',
  CARD: 'card',
  MANUAL: 'manual',
};

export const COACH_STATUS = {
  PENDING: 'pending',
  VALIDATED: 'validated',
  REJECTED: 'rejected',
  SUSPENDED: 'suspended',
};

export const REVIEW_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  FLAGGED: 'flagged',
  HIDDEN: 'hidden',
};

export const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  BANNED: 'banned',
};

export const DISCIPLINES = [
  'Musculation',
  'Cardio & HIIT',
  'Yoga',
  'Pilates',
  'CrossFit',
  'Boxe',
  'Danse',
  'Natation',
  'Football',
  'Basketball',
  'Tennis',
  'Athlétisme',
];

export const CITIES = [
  'Douala',
  'Yaoundé',
  'Bafoussam',
  'Bamenda',
  'Garoua',
  'Maroua',
  'Kribi',
  'Limbe',
  'Buea',
  'Ebolowa',
];

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'smartgym_access_token',
  REFRESH_TOKEN: 'smartgym_refresh_token',
  USER: 'smartgym_user',
};

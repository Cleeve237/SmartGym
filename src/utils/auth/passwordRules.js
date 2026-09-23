export const PASSWORD_RULES = [
  { id: 'length', label: '8 caract\u00e8res minimum', test: (p) => p.length >= 8 },
  { id: 'upper', label: 'Une majuscule', test: (p) => /[A-Z]/.test(p) },
  { id: 'lower', label: 'Une minuscule', test: (p) => /[a-z]/.test(p) },
  { id: 'digit', label: 'Un chiffre', test: (p) => /\d/.test(p) },
  { id: 'special', label: 'Un caract\u00e8re sp\u00e9cial', test: (p) => /[^A-Za-z0-9]/.test(p) },
];

export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

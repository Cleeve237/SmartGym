export const STRENGTH_LEVELS = [
  { level: 0, label: '',       className: '',      minScore: 0 },
  { level: 1, label: 'Tr\u00e8s faible', className: 'very-weak', minScore: 1 },
  { level: 2, label: 'Faible',  className: 'weak',      minScore: 2 },
  { level: 3, label: 'Moyen',   className: 'medium',    minScore: 3 },
  { level: 4, label: 'Fort',    className: 'strong',    minScore: 4 },
  { level: 5, label: 'Excellent', className: 'excellent', minScore: 5 },
];

export function calculateStrength(password) {
  if (!password) return { score: 0, level: 0, label: '', className: '', percent: 0 };

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const level = STRENGTH_LEVELS.findLast((l) => score >= l.minScore) || STRENGTH_LEVELS[0];
  return {
    score,
    level: level.level,
    label: level.label,
    className: level.className,
    percent: (score / 5) * 100,
  };
}

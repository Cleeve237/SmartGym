function PasswordStrength({ password = '' }) {
  const getStrength = () => {
    if (!password) return { level: 0, label: '', className: '' };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { level: 1, label: 'Faible', className: 'weak' };
    if (score <= 3) return { level: 2, label: 'Moyen', className: 'medium' };
    return { level: 3, label: 'Fort', className: 'strong' };
  };

  const strength = getStrength();

  if (!password) return null;

  return (
    <div className="pwd-reset-strength" aria-live="polite">
      <div
        className="pwd-reset-strength-bar"
        role="progressbar"
        aria-valuenow={strength.level}
        aria-valuemin={0}
        aria-valuemax={3}
      >
        {[1, 2, 3].map((segment) => (
          <div
            key={segment}
            className={`pwd-reset-strength-segment${
              segment <= strength.level
                ? ` pwd-reset-strength-segment--${strength.className}`
                : ''
            }`}
          />
        ))}
      </div>
      <span className={`pwd-reset-strength-label pwd-reset-strength-label--${strength.className}`}>
        Force du mot de passe : {strength.label}
      </span>
    </div>
  );
}

export default PasswordStrength;

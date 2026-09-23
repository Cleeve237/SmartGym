import usePasswordStrength from '../../../hooks/auth/usePasswordStrength';

function PasswordStrength({ password = '' }) {
  const strength = usePasswordStrength(password);

  if (!password) return null;

  return (
    <div className="auth-strength" aria-live="polite">
      <div
        className="auth-strength-bar"
        role="progressbar"
        aria-valuenow={strength.level}
        aria-valuemin={0}
        aria-valuemax={5}
      >
        {[1, 2, 3, 4, 5].map((segment) => (
          <div
            key={segment}
            className={`auth-strength-segment${segment <= strength.level ? ` auth-strength-segment--active-${strength.className}` : ''}`}
          />
        ))}
      </div>
      <span className={`auth-strength-label auth-strength-label--${strength.className}`}>
        Force du mot de passe : {strength.label}
      </span>
    </div>
  );
}

export default PasswordStrength;

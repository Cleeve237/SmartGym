import illustrationLogin from '../../../assets/auth/illustrations/login.svg';
import illustrationRegister from '../../../assets/auth/illustrations/register.svg';
import illustrationForgotPassword from '../../../assets/auth/illustrations/forgot-password.svg';
import illustrationVerifyEmail from '../../../assets/auth/illustrations/verify-email.svg';
import illustrationVerifyPhone from '../../../assets/auth/illustrations/verify-phone.svg';
import illustrationResetPassword from '../../../assets/auth/illustrations/reset-password.svg';

const ILLUSTRATIONS = {
  login: illustrationLogin,
  register: illustrationRegister,
  forgotPassword: illustrationForgotPassword,
  verifyEmail: illustrationVerifyEmail,
  verifyPhone: illustrationVerifyPhone,
  resetPassword: illustrationResetPassword,
};

const FLOATING_CONFIGS = {
  login: [
    { icon: 'bi-star-fill', iconClass: 'warning', value: '4.9', label: 'Note moyenne' },
    { icon: 'bi-people-fill', iconClass: 'primary', value: '250+', label: 'Coachs v\u00e9rifi\u00e9s' },
    { icon: 'bi-geo-alt-fill', iconClass: 'info', value: '15 villes', label: 'Au Cameroun' },
  ],
  register: [
    { icon: 'bi-check-circle-fill', iconClass: 'primary', value: 'Coachs certifi\u00e9s', label: 'Profils v\u00e9rifi\u00e9s' },
    { icon: 'bi-lightning-charge-fill', iconClass: 'warning', value: 'R\u00e9servation rapide', label: 'Quelques clics' },
    { icon: 'bi-shield-lock-fill', iconClass: 'info', value: 'Paiement s\u00e9curis\u00e9', label: 'Transactions prot\u00e9g\u00e9es' },
  ],
  forgotPassword: [
    { icon: 'bi-shield-lock-fill', iconClass: 'primary', value: 'AES-256', label: 'Chiffrement' },
    { icon: 'bi-shield-check', iconClass: 'info', value: '100%', label: 'S\u00e9curis\u00e9' },
    { icon: 'bi-key-fill', iconClass: 'warning', value: '2FA', label: 'Protection' },
  ],
  default: [
    { icon: 'bi-shield-lock-fill', iconClass: 'primary', value: 'S\u00e9curis\u00e9', label: 'Protection des donn\u00e9es' },
    { icon: 'bi-headset', iconClass: 'warning', value: 'Support', label: 'Assistance 24/7' },
    { icon: 'bi-patch-check', iconClass: 'info', value: 'Certifi\u00e9', label: 'Coachs v\u00e9rifi\u00e9s' },
  ],
};

const ILLUSTRATION_ICONS = {
  login: 'bi-trophy',
  register: 'bi-trophy',
  forgotPassword: 'bi-shield-lock',
  verifyEmail: 'bi-envelope-check',
  verifyPhone: 'bi-phone-check',
  resetPassword: 'bi-key',
};

function AuthIllustration({
  type = 'default',
  icon,
  title = 'SmartGym',
  text,
  customIcon,
}) {
  const svg = ILLUSTRATIONS[type];
  const floatingCards = FLOATING_CONFIGS[type] || FLOATING_CONFIGS.default;
  const illustrationIcon = ILLUSTRATION_ICONS[type] || 'bi-lightning-charge';

  return (
    <aside className="auth-illustration" aria-hidden="true">
      {svg && <img src={svg} alt="" className="auth-illustration-img" />}
      <div className="auth-blob auth-blob--1" />
      <div className="auth-blob auth-blob--2" />

      <div className="auth-floating-cards">
        {floatingCards.map((card, i) => (
          <div key={i} className="auth-floating-card">
            <div className={`auth-floating-card-icon auth-floating-card-icon--${card.iconClass}`}>
              <i className={`bi ${card.icon}`} />
            </div>
            <div>
              <div className="auth-floating-card-value">{card.value}</div>
              <div className="auth-floating-card-label">{card.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="auth-illustration-content">
        <div className="auth-illustration-icon">
          <i className={`bi ${customIcon || illustrationIcon}`} />
        </div>
        <h2 className="auth-illustration-title">{title}</h2>
        {text && <p className="auth-illustration-text">{text}</p>}
      </div>
    </aside>
  );
}

export default AuthIllustration;

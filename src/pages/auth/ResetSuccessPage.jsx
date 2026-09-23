import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/common/AuthLayout';
import SuccessCard from '../../components/auth/common/SuccessCard';
import { AUTH_MESSAGES } from '../../utils/auth/authMessages';

function ResetSuccessPage() {
  return (
    <AuthLayout
      illustration={{ type: 'resetPassword' }}
      footerProps={{ showBackToHome: true }}
    >
      <SuccessCard
        icon="bi-check-lg"
        title={AUTH_MESSAGES.resetPassword.successTitle}
        text={AUTH_MESSAGES.resetPassword.successText}
        actions={
          <>
            <Link to="/login" className="auth-success-btn auth-success-btn--primary">
              Se connecter
              <i className="bi bi-arrow-right" />
            </Link>
            <Link to="/" className="auth-success-btn auth-success-btn--secondary">
              <i className="bi bi-house" />
              Retour \u00e0 l&apos;accueil
            </Link>
          </>
        }
      />
    </AuthLayout>
  );
}

export default ResetSuccessPage;

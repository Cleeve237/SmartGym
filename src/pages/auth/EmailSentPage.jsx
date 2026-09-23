import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/common/AuthLayout';
import AuthCard from '../../components/auth/common/AuthCard';
import { AUTH_MESSAGES } from '../../utils/auth/authMessages';

function EmailSentPage() {
  return (
    <AuthLayout
      illustration={{ type: 'forgotPassword' }}
      footerProps={{ showBackToHome: true }}
    >
      <AuthCard centered>
        <div className="auth-success-card">
          <div className="auth-success-icon">
            <i className="bi bi-envelope-check" />
          </div>
          <h1 className="auth-success-title">{AUTH_MESSAGES.emailSent.title}</h1>
          <p className="auth-success-text">{AUTH_MESSAGES.emailSent.subtitle}</p>
          <div className="auth-success-actions">
            <Link to="/login" className="auth-success-btn auth-success-btn--primary">
              {AUTH_MESSAGES.emailSent.backToLogin}
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}

export default EmailSentPage;

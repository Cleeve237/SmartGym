import './Auth.css';
import AuthIllustration from './AuthIllustration';
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';

function AuthLayout({ illustration, children, headerProps, footerProps, wide }) {
  return (
    <div className="auth-page">
      <AuthIllustration {...illustration} />
      <main className="auth-form-side">
        <div className={`auth-form-container${wide ? ' auth-form-container--wide' : ''}`}>
          {headerProps && <AuthHeader {...headerProps} />}
          {children}
          {footerProps && <AuthFooter {...footerProps} />}
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;

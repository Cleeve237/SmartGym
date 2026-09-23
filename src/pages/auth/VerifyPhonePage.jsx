import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOtpInput from '../../hooks/auth/useOtpInput';
import useCountdown from '../../hooks/auth/useCountdown';
import AuthLayout from '../../components/auth/common/AuthLayout';
import AuthHeader from '../../components/auth/common/AuthHeader';
import OtpInput from '../../components/auth/common/OtpInput';
import CountdownTimer from '../../components/auth/common/CountdownTimer';
import LoadingButton from '../../components/auth/common/LoadingButton';
import ErrorAlert from '../../components/auth/common/ErrorAlert';
import { AUTH_MESSAGES } from '../../utils/auth/authMessages';

function VerifyPhonePage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const otp = useOtpInput();
  const countdown = useCountdown(60);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.isComplete) {
      setError('Veuillez saisir le code complet');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleResend = () => {
    setError('');
    countdown.start();
  };

  return (
    <AuthLayout
      illustration={{ type: 'verifyPhone' }}
      headerProps={false}
    >
      <div style={{ maxWidth: 400, margin: '0 auto', width: '100%' }}>
        <AuthHeader
          title={AUTH_MESSAGES.verifyPhone.title}
          subtitle={AUTH_MESSAGES.verifyPhone.subtitle}
        />

        {error && <ErrorAlert message={error} onDismiss={() => setError('')} />}

        <form onSubmit={handleSubmit} noValidate>
          <OtpInput
            otp={otp.otp}
            isComplete={otp.isComplete}
            handleChange={otp.handleChange}
            handleKeyDown={otp.handleKeyDown}
            handlePaste={otp.handlePaste}
            setRef={otp.setRef}
            error={error}
          />

          <LoadingButton
            type="submit"
            variant="primary"
            isLoading={isLoading}
            loadingText={AUTH_MESSAGES.verifyPhone.submit}
            className="auth-submit"
            disabled={!otp.isComplete}
          >
            {AUTH_MESSAGES.verifyPhone.submit}
            <i className="bi bi-check-lg" />
          </LoadingButton>
        </form>

        <CountdownTimer
          seconds={countdown.seconds}
          isRunning={countdown.isRunning}
          formatted={countdown.formatted}
          onResend={handleResend}
        />

        <Link to="/login" className="auth-back">
          <i className="bi bi-arrow-left" />
          Retour \u00e0 la connexion
        </Link>
      </div>
    </AuthLayout>
  );
}

export default VerifyPhonePage;

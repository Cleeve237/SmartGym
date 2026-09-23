import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ClientRegisterSchema } from '../../utils/auth/authValidators';
import AuthLayout from '../../components/auth/common/AuthLayout';
import SocialLoginButtons from '../../components/auth/common/SocialLoginButtons';
import AuthDivider from '../../components/auth/common/AuthDivider';
import PasswordInput from '../../components/auth/common/PasswordInput';
import LoadingButton from '../../components/auth/common/LoadingButton';
import ErrorAlert from '../../components/auth/common/ErrorAlert';
import { AUTH_MESSAGES } from '../../utils/auth/authMessages';

function ClientRegisterPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ClientRegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  });

  const passwordValue = watch('password');
  const confirmValue = watch('confirmPassword');
  const pwdReg = register('password');
  const confirmReg = register('confirmPassword');

  const onSubmit = async (data) => {
    if (!termsAccepted) {
      setTermsError('Vous devez accepter les conditions d\'utilisation');
      return;
    }
    setTermsError('');
    setServerError('');
    void data;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setTermsError('Vous devez accepter les conditions d\'utilisation');
      return;
    }
    handleSubmit(onSubmit)(e);
  };

  return (
    <AuthLayout
      illustration={{ type: 'register' }}
      headerProps={{
        title: AUTH_MESSAGES.register.title,
        subtitle: AUTH_MESSAGES.register.subtitle,
      }}
      footerProps={{
        text: AUTH_MESSAGES.register.haveAccount,
        linkText: AUTH_MESSAGES.register.signIn,
        linkTo: '/login',
      }}
      wide
    >
      <SocialLoginButtons showApple={false} />
      <AuthDivider />

      {serverError && <ErrorAlert message={serverError} onDismiss={() => setServerError('')} />}

      <form className="auth-form" onSubmit={handleFormSubmit} noValidate>
        <div className="auth-field">
          <label htmlFor="cr-firstName" className="auth-field-label">Pr\u00e9nom</label>
          <input
            id="cr-firstName"
            type="text"
            className={`auth-field-input${errors.firstName ? ' auth-field-input--error' : ''}`}
            placeholder="Jean"
            autoComplete="given-name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className="auth-field-error"><i className="bi bi-exclamation-circle" />{errors.firstName.message}</span>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="cr-lastName" className="auth-field-label">Nom</label>
          <input
            id="cr-lastName"
            type="text"
            className={`auth-field-input${errors.lastName ? ' auth-field-input--error' : ''}`}
            placeholder="Dupont"
            autoComplete="family-name"
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className="auth-field-error"><i className="bi bi-exclamation-circle" />{errors.lastName.message}</span>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="cr-phone" className="auth-field-label">T\u00e9l\u00e9phone</label>
          <input
            id="cr-phone"
            type="tel"
            className={`auth-field-input${errors.phone ? ' auth-field-input--error' : ''}`}
            placeholder="+237 6XX XXX XXX"
            autoComplete="tel"
            {...register('phone')}
          />
          {errors.phone && (
            <span className="auth-field-error"><i className="bi bi-exclamation-circle" />{errors.phone.message}</span>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="cr-email" className="auth-field-label">Adresse e-mail</label>
          <input
            id="cr-email"
            type="email"
            className={`auth-field-input${errors.email ? ' auth-field-input--error' : ''}`}
            placeholder="exemple@email.com"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="auth-field-error"><i className="bi bi-exclamation-circle" />{errors.email.message}</span>
          )}
        </div>

        <PasswordInput
          id="cr-password"
          label="Mot de passe"
          placeholder="Minimum 8 caract\u00e8res"
          error={errors.password?.message}
          autoComplete="new-password"
          value={passwordValue}
          onChange={pwdReg.onChange}
          onBlur={pwdReg.onBlur}
          name={pwdReg.name}
          ref={pwdReg.ref}
        />

        <PasswordInput
          id="cr-confirmPassword"
          label="Confirmer le mot de passe"
          placeholder="Retapez votre mot de passe"
          error={errors.confirmPassword?.message}
          autoComplete="new-password"
          showStrength={false}
          showChecklist={false}
          value={confirmValue}
          onChange={confirmReg.onChange}
          onBlur={confirmReg.onBlur}
          name={confirmReg.name}
          ref={confirmReg.ref}
        />

        <label className={`auth-terms${termsError ? ' auth-terms--error' : ''}`}>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => {
              setTermsAccepted(e.target.checked);
              if (e.target.checked) setTermsError('');
            }}
          />
          <span className="auth-terms-label">
            J&apos;accepte les{' '}
            <a href="/conditions" target="_blank" rel="noopener noreferrer">Conditions d&apos;utilisation</a>{' '}
            et la{' '}
            <a href="/confidentialite" target="_blank" rel="noopener noreferrer">Politique de confidentialit\u00e9</a>
          </span>
        </label>
        {termsError && (
          <span className="auth-terms-error"><i className="bi bi-exclamation-circle" />{termsError}</span>
        )}

        <LoadingButton
          type="submit"
          isLoading={isSubmitting}
          loadingText={AUTH_MESSAGES.register.submitting}
          className="auth-submit"
        >
          {AUTH_MESSAGES.register.submitClient}
          <i className="bi bi-arrow-right" />
        </LoadingButton>
      </form>
    </AuthLayout>
  );
}

export default ClientRegisterPage;

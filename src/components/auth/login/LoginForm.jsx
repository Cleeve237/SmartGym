import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../../utils/validators/authSchemas';
import LoginHeader from './LoginHeader';
import SocialLoginButtons from './SocialLoginButtons';
import PasswordField from './PasswordField';
import RememberMe from './RememberMe';
import LoginBenefits from './LoginBenefits';
import LoginFooter from './LoginFooter';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data) => {
    // TODO: connecter useAuthStore.login() + authService.login(data)
    void data;
    void rememberMe;
  };

  return (
    <div className="login-form-container">
      <LoginHeader />

      <SocialLoginButtons />

      <div className="login-divider">
        <div className="login-divider-line" />
        <span className="login-divider-text">ou connectez-vous avec email</span>
        <div className="login-divider-line" />
      </div>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="login-field">
          <label htmlFor="login-email" className="login-field-label">
            Adresse e-mail
          </label>
          <input
            id="login-email"
            type="email"
            className={`login-field-input${errors.email ? ' login-field-input--error' : ''}`}
            placeholder="exemple@email.com"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="login-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.email.message}
            </span>
          )}
        </div>

        <PasswordField
          id="login-password"
          label="Mot de passe"
          placeholder="Votre mot de passe"
          error={errors.password?.message}
          {...register('password')}
        />

        <div className="login-options">
          <RememberMe checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <a href="/forgot-password" className="login-forgot">
            Mot de passe oublie ?
          </a>
        </div>

        <button
          type="submit"
          className="login-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="login-submit-spinner" />
              Connexion...
            </>
          ) : (
            <>
              Se connecter
              <i className="bi bi-arrow-right" />
            </>
          )}
        </button>
      </form>

      <LoginBenefits />
      <LoginFooter />
    </div>
  );
}

export default LoginForm;

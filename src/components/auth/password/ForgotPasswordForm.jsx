import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordSchema } from '../../../utils/validators/authSchemas';
import PasswordResetHeader from './PasswordResetHeader';
import PasswordResetIllustration from './PasswordResetIllustration';

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (data) => {
    // TODO: appeler authService.forgotPassword(data) + rediriger vers /reset-password
    void data;
  };

  return (
    <>
      <PasswordResetIllustration />
      <main className="pwd-reset-form-side">
        <div className="pwd-reset-form-container">
          <div className="pwd-reset-icon-box">
            <i className="bi bi-envelope-lock" />
          </div>

          <PasswordResetHeader
            title="Mot de passe oublie ?"
            subtitle="Saisissez votre adresse e-mail pour recevoir un lien de reinitialisation."
          />

          <form className="pwd-reset-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="pwd-reset-field">
              <label htmlFor="pwd-reset-email" className="pwd-reset-field-label">
                Adresse e-mail
              </label>
              <input
                id="pwd-reset-email"
                type="email"
                className={`pwd-reset-field-input${errors.email ? ' pwd-reset-field-input--error' : ''}`}
                placeholder="exemple@email.com"
                autoComplete="email"
                aria-describedby={errors.email ? 'pwd-reset-email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <span className="pwd-reset-field-error" id="pwd-reset-email-error" role="alert">
                  <i className="bi bi-exclamation-circle" />
                  {errors.email.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="pwd-reset-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="pwd-reset-submit-spinner" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le lien
                  <i className="bi bi-send" />
                </>
              )}
            </button>
          </form>

          <a href="/login" className="pwd-reset-back">
            <i className="bi bi-arrow-left" />
            Retour a la connexion
          </a>
        </div>
      </main>
    </>
  );
}

export default ForgotPasswordForm;

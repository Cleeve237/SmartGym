import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PasswordResetHeader from './PasswordResetHeader';
import PasswordResetIllustration from './PasswordResetIllustration';
import PasswordStrength from './PasswordStrength';
import PasswordRequirements from './PasswordRequirements';

const ResetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
      ),
    confirmPassword: z.string().min(1, 'Confirmation du mot de passe requise'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const passwordValue = watch('password');

  const onSubmit = (data) => {
    // TODO: appeler authService.resetPassword({ token, password: data.password })
    void data;
  };

  return (
    <>
      <PasswordResetIllustration />
      <main className="pwd-reset-form-side">
        <div className="pwd-reset-form-container">
          <div className="pwd-reset-icon-box">
            <i className="bi bi-key" />
          </div>

          <PasswordResetHeader
            title="Nouveau mot de passe"
            subtitle="Choisissez un nouveau mot de passe pour votre compte."
          />

          <form className="pwd-reset-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="pwd-reset-field">
              <label htmlFor="pwd-reset-password" className="pwd-reset-field-label">
                Nouveau mot de passe
              </label>
              <div className="pwd-reset-field-input-wrapper">
                <input
                  id="pwd-reset-password"
                  type={showPassword ? 'text' : 'password'}
                  className={`pwd-reset-field-input${errors.password ? ' pwd-reset-field-input--error' : ''}`}
                  placeholder="Votre nouveau mot de passe"
                  autoComplete="new-password"
                  aria-describedby="pwd-reset-password-error"
                  {...register('password')}
                />
                <button
                  type="button"
                  className="pwd-reset-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  tabIndex={-1}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
                </button>
              </div>
              {errors.password && (
                <span className="pwd-reset-field-error" id="pwd-reset-password-error" role="alert">
                  <i className="bi bi-exclamation-circle" />
                  {errors.password.message}
                </span>
              )}
            </div>

            <PasswordStrength password={passwordValue} />
            <PasswordRequirements password={passwordValue} />

            <div className="pwd-reset-field">
              <label htmlFor="pwd-reset-confirm" className="pwd-reset-field-label">
                Confirmer le mot de passe
              </label>
              <div className="pwd-reset-field-input-wrapper">
                <input
                  id="pwd-reset-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  className={`pwd-reset-field-input${errors.confirmPassword ? ' pwd-reset-field-input--error' : ''}`}
                  placeholder="Confirmez votre mot de passe"
                  autoComplete="new-password"
                  aria-describedby="pwd-reset-confirm-error"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  className="pwd-reset-password-toggle"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? 'Masquer la confirmation' : 'Afficher la confirmation'}
                  tabIndex={-1}
                >
                  <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'}`} />
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="pwd-reset-field-error" id="pwd-reset-confirm-error" role="alert">
                  <i className="bi bi-exclamation-circle" />
                  {errors.confirmPassword.message}
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
                  Reinitialisation...
                </>
              ) : (
                <>
                  Reinitialiser mon mot de passe
                  <i className="bi bi-check-lg" />
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

export default ResetPasswordForm;

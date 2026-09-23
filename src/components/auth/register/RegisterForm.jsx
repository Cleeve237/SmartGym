import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../../utils/validators/authSchemas';
import RegisterHeader from './RegisterHeader';
import PasswordField from '../login/PasswordField';
import PasswordStrength from './PasswordStrength';
import TermsCheckbox from './TermsCheckbox';
import RegisterBenefits from './RegisterBenefits';
import RegisterFooter from './RegisterFooter';

function RegisterForm() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'client',
    },
  });

  const passwordValue = watch('password');

  const onSubmit = (data) => {
    if (!termsAccepted) {
      setTermsError('Vous devez accepter les conditions d\'utilisation');
      return;
    }
    setTermsError('');
    // TODO: connecter useAuthStore.login() + authService.register(data)
    void data;
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
    if (e.target.checked) setTermsError('');
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
    <div className="register-form-container">
      <RegisterHeader />

      <form className="register-form" onSubmit={handleFormSubmit} noValidate>
        <div className="register-field">
          <label htmlFor="reg-firstName" className="register-field-label">
            Prenom
          </label>
          <input
            id="reg-firstName"
            type="text"
            className={`register-field-input${errors.firstName ? ' register-field-input--error' : ''}`}
            placeholder="Jean"
            autoComplete="given-name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className="register-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="register-field">
          <label htmlFor="reg-lastName" className="register-field-label">
            Nom
          </label>
          <input
            id="reg-lastName"
            type="text"
            className={`register-field-input${errors.lastName ? ' register-field-input--error' : ''}`}
            placeholder="Dupont"
            autoComplete="family-name"
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className="register-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="register-field">
          <label htmlFor="reg-email" className="register-field-label">
            Adresse e-mail
          </label>
          <input
            id="reg-email"
            type="email"
            className={`register-field-input${errors.email ? ' register-field-input--error' : ''}`}
            placeholder="exemple@email.com"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="register-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="register-field">
          <label htmlFor="reg-phone" className="register-field-label">
            Telephone
          </label>
          <input
            id="reg-phone"
            type="tel"
            className="register-field-input"
            placeholder="+237 6XX XXX XXX"
            autoComplete="tel"
          />
        </div>

        <PasswordField
          id="reg-password"
          label="Mot de passe"
          placeholder="Minimum 8 caracteres"
          error={errors.password?.message}
          autoComplete="new-password"
          {...register('password')}
        />

        <PasswordStrength password={passwordValue} />

        <PasswordField
          id="reg-confirmPassword"
          label="Confirmer le mot de passe"
          placeholder="Retapez votre mot de passe"
          error={errors.confirmPassword?.message}
          autoComplete="new-password"
          {...register('confirmPassword')}
        />

        <TermsCheckbox
          checked={termsAccepted}
          onChange={handleTermsChange}
          error={termsError}
        />

        <button
          type="submit"
          className="register-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="register-submit-spinner" />
              Creation en cours...
            </>
          ) : (
            <>
              Creer mon compte
              <i className="bi bi-arrow-right" />
            </>
          )}
        </button>
      </form>

      <RegisterBenefits />
      <RegisterFooter />
    </div>
  );
}

export default RegisterForm;

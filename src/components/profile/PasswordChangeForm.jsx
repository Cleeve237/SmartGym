import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordChangeSchema } from '../../utils/validators/profileSchemas';
import Input from '../ui/Input';
import Button from '../ui/Button';

function PasswordChangeForm({ onSubmit, isSubmitting = false }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PasswordChangeSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const newPassword = watch('newPassword', '');
  const strength = getPasswordStrength(newPassword);

  const handleFormSubmit = async (data) => {
    try {
      if (onSubmit) await onSubmit(data);
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch {
      // Error handled by parent
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      {showSuccess && (
        <div className="alert alert-success d-flex align-items-center mb-3" role="alert">
          <i className="bi bi-check-circle me-2" />
          Mot de passe modifie avec succes.
        </div>
      )}

      <Input
        label="Mot de passe actuel"
        type="password"
        icon="bi-lock"
        error={errors.currentPassword?.message}
        {...register('currentPassword')}
      />

      <Input
        label="Nouveau mot de passe"
        type="password"
        icon="bi-key"
        error={errors.newPassword?.message}
        {...register('newPassword')}
      />

      {newPassword && (
        <div className="mb-3">
          <div className="prf-password-strength">
            <div className={`prf-password-strength-bar ${strength.level >= 1 ? `prf-password-strength-bar--${strength.color}` : ''}`} />
            <div className={`prf-password-strength-bar ${strength.level >= 2 ? `prf-password-strength-bar--${strength.color}` : ''}`} />
            <div className={`prf-password-strength-bar ${strength.level >= 3 ? `prf-password-strength-bar--${strength.color}` : ''}`} />
          </div>
          <span className={`prf-password-strength-text text-${strength.color === 'strong' ? 'success' : strength.color === 'medium' ? 'warning' : 'danger'}`}>
            {strength.label}
          </span>
        </div>
      )}

      <Input
        label="Confirmer le mot de passe"
        type="password"
        icon="bi-lock-fill"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <div className="d-flex justify-content-end">
        <Button
          type="submit"
          variant="outline-primary"
          icon="bi-shield-check"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Modification...' : 'Modifier le mot de passe'}
        </Button>
      </div>
    </form>
  );
}

function getPasswordStrength(password) {
  if (!password) return { level: 0, color: 'weak', label: '' };

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 1) return { level: 1, color: 'weak', label: 'Faible' };
  if (score <= 2) return { level: 2, color: 'medium', label: 'Moyen' };
  return { level: 3, color: 'strong', label: 'Fort' };
}

export default PasswordChangeForm;

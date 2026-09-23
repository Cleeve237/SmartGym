import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const partnershipSchema = z.object({
  companyName: z.string().min(2, 'Le nom de l&apos;entreprise doit contenir au moins 2 caract\u00e8res'),
  contactName: z.string().min(2, 'Le nom du contact doit contenir au moins 2 caract\u00e8res'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Num\u00e9ro de t\u00e9l\u00e9phone invalide').optional().or(z.literal('')),
  partnershipType: z.string().min(1, 'Veuillez s\u00e9lectionner un type de partenariat'),
  description: z.string().min(10, 'La description doit contenir au moins 10 caract\u00e8res'),
});

const partnershipTypes = [
  'Sponsoring',
  'Co-branding',
  'Technique',
  'Distribution',
  'M\u00e9diatique',
  'Autre',
];

function BusinessInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(partnershipSchema),
    defaultValues: { companyName: '', contactName: '', email: '', phone: '', partnershipType: '', description: '' },
  });

  const onSubmit = () => {
    // TODO: appeler partnershipService.submit(data)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="ct-form-card">
        <div className="ct-form-success">
          <div className="ct-form-success-icon">
            <i className="bi bi-check-lg" />
          </div>
          <h3 className="ct-form-success-title">Demande envoy\u00e9e !</h3>
          <p className="ct-form-success-text">
            Merci pour votre int\u00e9r&ecirc;t. Notre &eacute;quipe business vous contactera sous 48h.
          </p>
          <button className="btn btn-outline-primary" onClick={() => setSubmitted(false)}>
            <i className="bi bi-arrow-left me-1" />
            Soumettre une autre demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ct-form-card">
      <h3 className="ct-form-title">
        <i className="bi bi-building me-2" style={{ color: 'var(--color-primary)' }} />
        Vous souhaitez devenir partenaire ?
      </h3>
      <p className="ct-form-subtitle">
        Remplissez le formulaire ci-dessous et notre &eacute;quipe business vous recontactera rapidement.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-company" className="ct-field-label">Nom de l&apos;entreprise *</label>
              <input
                id="ct-company"
                type="text"
                className={`ct-field-input${errors.companyName ? ' ct-field-input--error' : ''}`}
                placeholder="Nom de votre entreprise"
                {...register('companyName')}
              />
              {errors.companyName && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.companyName.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-contact" className="ct-field-label">Nom du contact *</label>
              <input
                id="ct-contact"
                type="text"
                className={`ct-field-input${errors.contactName ? ' ct-field-input--error' : ''}`}
                placeholder="Nom et pr\u00e9nom"
                {...register('contactName')}
              />
              {errors.contactName && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.contactName.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-partner-email" className="ct-field-label">Email *</label>
              <input
                id="ct-partner-email"
                type="email"
                className={`ct-field-input${errors.email ? ' ct-field-input--error' : ''}`}
                placeholder="contact@entreprise.com"
                {...register('email')}
              />
              {errors.email && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.email.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-partner-phone" className="ct-field-label">T\u00e9l\u00e9phone</label>
              <input
                id="ct-partner-phone"
                type="tel"
                className={`ct-field-input${errors.phone ? ' ct-field-input--error' : ''}`}
                placeholder="+237 6XX XXX XXX"
                {...register('phone')}
              />
              {errors.phone && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.phone.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <div className="ct-field">
              <label htmlFor="ct-partner-type" className="ct-field-label">Type de partenariat *</label>
              <select
                id="ct-partner-type"
                className={`ct-field-select${errors.partnershipType ? ' ct-field-select--error' : ''}`}
                {...register('partnershipType')}
              >
                <option value="">S\u00e9lectionnez un type</option>
                {partnershipTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.partnershipType && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.partnershipType.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <div className="ct-field">
              <label htmlFor="ct-partner-desc" className="ct-field-label">Description *</label>
              <textarea
                id="ct-partner-desc"
                className={`ct-field-textarea${errors.description ? ' ct-field-textarea--error' : ''}`}
                placeholder="D\u00e9crivez votre proposition de partenariat..."
                rows={4}
                {...register('description')}
              />
              {errors.description && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.description.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5"
              style={{ fontWeight: 'var(--font-weight-semibold)' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Soumettre une demande
                  <i className="bi bi-send ms-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BusinessInquiryForm;

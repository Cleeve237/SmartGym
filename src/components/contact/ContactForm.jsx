import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caract\u00e8res'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Num\u00e9ro de t\u00e9l\u00e9phone invalide').optional().or(z.literal('')),
  subject: z.string().min(3, 'Le sujet doit contenir au moins 3 caract\u00e8res'),
  category: z.string().min(1, 'Veuillez s\u00e9lectionner une cat\u00e9gorie'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caract\u00e8res'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialit\u00e9' }) }),
});

const categories = [
  'Question g\u00e9n\u00e9rale',
  'Support technique',
  'Facturation',
  'Partenariat',
  'Presse',
  'Autre',
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', category: '', message: '', consent: false },
  });

  const onSubmit = () => {
    // TODO: appeler contactService.send(data)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="ct-form-card">
        <div className="ct-form-success">
          <div className="ct-form-success-icon">
            <i className="bi bi-check-lg" />
          </div>
          <h3 className="ct-form-success-title">Message envoy\u00e9 !</h3>
          <p className="ct-form-success-text">
            Merci de votre message. Notre &eacute;quipe vous r\u00e9pondra dans les meilleurs d\u00e9lais.
          </p>
          <button className="btn btn-outline-primary" onClick={() => setSubmitted(false)}>
            <i className="bi bi-arrow-left me-1" />
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ct-form-card">
      <h3 className="ct-form-title">Envoyez-nous un message</h3>
      <p className="ct-form-subtitle">
        Remplissez le formulaire ci-dessous et nous vous r\u00e9pondrons rapidement.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-name" className="ct-field-label">Nom complet *</label>
              <input
                id="ct-name"
                type="text"
                className={`ct-field-input${errors.name ? ' ct-field-input--error' : ''}`}
                placeholder="Votre nom complet"
                {...register('name')}
              />
              {errors.name && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.name.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-email" className="ct-field-label">Adresse email *</label>
              <input
                id="ct-email"
                type="email"
                className={`ct-field-input${errors.email ? ' ct-field-input--error' : ''}`}
                placeholder="votre@email.com"
                {...register('email')}
              />
              {errors.email && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.email.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-phone" className="ct-field-label">T\u00e9l\u00e9phone</label>
              <input
                id="ct-phone"
                type="tel"
                className={`ct-field-input${errors.phone ? ' ct-field-input--error' : ''}`}
                placeholder="+237 6XX XXX XXX"
                {...register('phone')}
              />
              {errors.phone && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.phone.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ct-field">
              <label htmlFor="ct-category" className="ct-field-label">Cat\u00e9gorie *</label>
              <select
                id="ct-category"
                className={`ct-field-select${errors.category ? ' ct-field-select--error' : ''}`}
                {...register('category')}
              >
                <option value="">S\u00e9lectionnez une cat\u00e9gorie</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.category.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <div className="ct-field">
              <label htmlFor="ct-subject" className="ct-field-label">Sujet *</label>
              <input
                id="ct-subject"
                type="text"
                className={`ct-field-input${errors.subject ? ' ct-field-input--error' : ''}`}
                placeholder="Objet de votre message"
                {...register('subject')}
              />
              {errors.subject && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.subject.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <div className="ct-field">
              <label htmlFor="ct-message" className="ct-field-label">Message *</label>
              <textarea
                id="ct-message"
                className={`ct-field-textarea${errors.message ? ' ct-field-textarea--error' : ''}`}
                placeholder="D\u00e9crivez votre demande..."
                rows={5}
                {...register('message')}
              />
              {errors.message && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.message.message}</span>}
            </div>
          </div>

          <div className="col-12">
            <div className="ct-field">
              <label className="ct-field-checkbox">
                <input type="checkbox" {...register('consent')} />
                <span className="ct-field-checkbox-label">
                  J&apos;accepte que mes donn\u00e9es soient trait\u00e9es conform\u00e9ment &agrave; la <a href="#" className="text-primary">politique de confidentialit\u00e9</a>. *
                </span>
              </label>
              {errors.consent && <span className="ct-field-error" role="alert"><i className="bi bi-exclamation-circle" />{errors.consent.message}</span>}
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
                  Envoyer
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

export default ContactForm;

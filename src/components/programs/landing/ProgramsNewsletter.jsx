import { useState } from 'react';

function ProgramsNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <section className="pl-newsletter" aria-label="Newsletter">
      <div className="container">
        <div className="pl-newsletter-card">
          <div className="pl-newsletter-icon">
            <i className="bi bi-envelope-fill" />
          </div>
          <h2 className="pl-newsletter-title">
            Recevez nos conseils sportifs
          </h2>
          <p className="pl-newsletter-subtitle">
            Astuces nutrition, programmes d&apos;entra&icirc;nement et conseils de nos coachs directement dans votre bo&icirc;te mail.
          </p>
          {submitted ? (
            <div
              className="position-relative z-2"
              style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}
            >
              <i className="bi bi-check-circle-fill me-2" />
              Merci pour votre inscription !
            </div>
          ) : (
            <form className="pl-newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="pl-newsletter-input"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Adresse email"
              />
              <button type="submit" className="btn btn-primary px-4">
                S&apos;inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProgramsNewsletter;

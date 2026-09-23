import { Link } from 'react-router-dom';

const floatCards = [
  { icon: 'bi-envelope-fill', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', title: '24h', sub: 'Temps de r\u00e9ponse', pos: '1' },
  { icon: 'bi-headset', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', title: 'Support', sub: 'D\u00e9di\u00e9', pos: '2' },
  { icon: 'bi-shield-check', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', title: '100%', sub: 'S\u00e9curis\u00e9', pos: '3' },
];

function ContactHero() {
  return (
    <section className="ct-hero" aria-label="Contactez SmartGym">
      <div className="container ct-hero-inner">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 py-lg-5">
            <div className="ct-hero-badge mb-4">
              <i className="bi bi-chat-dots-fill" />
              <span>Contact</span>
            </div>

            <h1 className="ct-hero-title mb-4">
              Contactez{' '}
              <span className="ct-hero-title-accent">SmartGym</span>
            </h1>

            <p className="ct-hero-subtitle mb-5">
              Notre &eacute;quipe est &agrave; votre &eacute;coute pour r&eacute;pondre &agrave; toutes vos questions.
            </p>

            <div className="ct-hero-buttons mb-5">
              <a
                href="#contact-form"
                className="btn btn-primary btn-lg px-5 py-3 me-2"
                style={{ fontWeight: 'var(--font-weight-semibold)' }}
              >
                <i className="bi bi-envelope me-2" />
                Envoyer un message
              </a>
              <Link
                to="/coaches"
                className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-white)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                Trouver un coach
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="ct-hero-visual">
              <div className="ct-hero-visual-box">
                <i className="bi bi-chat-dots" />
                {floatCards.map((c) => (
                  <div key={c.pos} className={`ct-hero-float ct-hero-float--${c.pos}`}>
                    <div className="ct-hero-float-icon" style={{ backgroundColor: c.iconBg }}>
                      <i className={`bi ${c.icon}`} style={{ color: c.iconColor, fontSize: '0.9rem' }} />
                    </div>
                    <div className="ct-hero-float-text">
                      <strong>{c.title}</strong>
                      <span>{c.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;

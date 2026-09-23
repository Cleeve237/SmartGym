const socialData = [
  { icon: 'bi-facebook', label: 'Facebook', href: '#' },
  { icon: 'bi-instagram', label: 'Instagram', href: '#' },
  { icon: 'bi-linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'bi-tiktok', label: 'TikTok', href: '#' },
  { icon: 'bi-youtube', label: 'YouTube', href: '#' },
];

function SocialLinks() {
  return (
    <section className="ct-social" aria-label="R\u00e9seaux sociaux">
      <div className="container">
        <div className="ct-section-header">
          <div className="ct-section-badge">
            <i className="bi bi-share-fill" />
            R\u00e9seaux sociaux
          </div>
          <h2 className="ct-section-title">
            Suivez-nous
          </h2>
          <p className="ct-section-subtitle">
            Retrouvez-nous sur vos r\u00e9seaux sociaux pr\u00e9f\u00e9r\u00e9s.
          </p>
        </div>

        <div className="ct-social-track">
          {socialData.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="ct-social-link"
              aria-label={`Suivez-nous sur ${s.label}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;

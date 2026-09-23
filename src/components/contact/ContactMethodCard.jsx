function ContactMethodCard({ method }) {
  return (
    <div className="ct-method-card">
      <div className="ct-method-icon" style={{ backgroundColor: method.iconBg }}>
        <i className={`bi ${method.icon}`} style={{ color: method.iconColor, fontSize: '1.3rem' }} aria-hidden="true" />
      </div>
      <h3 className="ct-method-title">{method.title}</h3>
      <p className="ct-method-description">{method.description}</p>
      <a
        href={method.href}
        className="btn btn-sm btn-outline-primary"
        style={{ fontWeight: 'var(--font-weight-semibold)' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {method.action}
        <i className="bi bi-arrow-right ms-1" />
      </a>
    </div>
  );
}

export default ContactMethodCard;

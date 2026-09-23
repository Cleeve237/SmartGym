function CoachBadge({ type = 'verified' }) {
  const config = {
    verified: { icon: 'bi-patch-check-fill', label: 'Verifie' },
    premium: { icon: 'bi-star-fill', label: 'Premium' },
    new: { icon: 'bi-lightning-fill', label: 'Nouveau' },
  };

  const { icon, label } = config[type] || config.verified;

  return (
    <span className={`mp-badge mp-badge--${type}`}>
      <i className={`bi ${icon}`} />
      {label}
    </span>
  );
}

export default CoachBadge;

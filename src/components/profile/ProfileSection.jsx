function ProfileSection({ title, icon, action, children, compact = false }) {
  return (
    <div className="prf-section">
      <div className="prf-section-header">
        <h2 className="prf-section-title">
          {icon && <i className={`bi ${icon}`} />}
          {title}
        </h2>
        {action}
      </div>
      <div className={`prf-section-body ${compact ? 'prf-section-body--compact' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default ProfileSection;

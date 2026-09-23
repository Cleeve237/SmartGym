export default function StatusCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="sys-status-card">
      <div className="sys-status-card-header">
        <span className="sys-status-card-icon" style={{ background: iconBg || 'var(--ds-primary-50)', color: iconColor || 'var(--ds-primary)' }}>
          <i className={`bi bi-${icon}`} />
        </span>
        <span className="sys-status-card-title">{title}</span>
      </div>
      {description && <div className="sys-status-card-desc">{description}</div>}
    </div>
  );
}

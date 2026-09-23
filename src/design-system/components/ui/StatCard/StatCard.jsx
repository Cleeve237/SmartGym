import './StatCard.css';

export default function StatCard({
  value, label, icon, variant = 'primary', trend, trendLabel, subtitle, className = '', ...props
}) {
  const cls = [
    'ds-statcard',
    `ds-statcard--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} {...props}>
      {icon && <div className="ds-statcard-icon"><i className={`bi bi-${icon}`} /></div>}
      <div className="ds-statcard-body">
        <div className="ds-statcard-label">{label}</div>
        <div className="ds-statcard-value">{value}</div>
        {trend !== undefined && (
          <div className={`ds-statcard-trend ds-statcard-trend--${trend > 0 ? 'up' : 'down'}`}>
            <i className={`bi bi-arrow-${trend > 0 ? 'up' : 'down'}`} />
            <span>{Math.abs(trend)}%</span>
            {trendLabel && <span className="ms-1">{trendLabel}</span>}
          </div>
        )}
        {subtitle && <div className="ds-statcard-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}

import './ProgressBar.css';

export default function ProgressBar({
  value = 0, max = 100, variant = 'primary', size = 'md',
  striped, animated, indeterminate, label, showValue, className = '', ...props
}) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);

  const cls = [
    'ds-progress',
    `ds-progress--${variant}`,
    size !== 'md' ? `ds-progress--${size}` : '',
    striped ? 'ds-progress--striped' : '',
    animated ? 'ds-progress--animated' : '',
    indeterminate ? 'ds-progress--indeterminate' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div {...props}>
      {(label || showValue) && (
        <div className="ds-progress-label">
          {label && <span className="ds-progress-label-text">{label}</span>}
          {showValue && <span className="ds-progress-label-value">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cls} role="progressbar" aria-valuenow={indeterminate ? undefined : value} aria-valuemin={0} aria-valuemax={max} aria-label={label || 'Progression'}>
        <div className="ds-progress-bar" style={{ width: indeterminate ? undefined : `${pct}%` }} />
      </div>
    </div>
  );
}

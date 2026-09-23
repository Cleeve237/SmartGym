import './Divider.css';

export default function Divider({
  label, variant = 'solid', orientation = 'horizontal', className = '', ...props
}) {
  const cls = [
    'ds-divider',
    variant !== 'solid' ? `ds-divider--${variant}` : '',
    orientation === 'vertical' ? 'ds-divider--vertical' : '',
    className,
  ].filter(Boolean).join(' ');

  if (orientation === 'vertical') {
    return <div className={cls} role="separator" aria-orientation="vertical" {...props} />;
  }

  return (
    <div className={cls} role="separator" aria-orientation="horizontal" {...props}>
      {label && <span className="ds-divider-label">{label}</span>}
    </div>
  );
}

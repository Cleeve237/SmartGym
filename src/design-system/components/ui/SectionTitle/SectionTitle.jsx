export default function SectionTitle({
  title, subtitle, align = 'center', light = false, className = '', ...props
}) {
  const alignClass = { left: 'text-start', center: 'text-center', right: 'text-end' }[align] || 'text-center';

  return (
    <div className={`mb-5 ${alignClass} ${className}`} {...props}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: light ? '#fff' : 'var(--ds-text-primary)', margin: 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2" style={{ maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1.125rem', color: light ? 'rgba(255,255,255,0.7)' : 'var(--ds-text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

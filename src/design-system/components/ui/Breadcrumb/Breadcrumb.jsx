import './Breadcrumb.css';

export default function Breadcrumb({ items = [], separator = 'chevron-right', className = '', ...props }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="ds-breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={`ds-breadcrumb-item ${isLast ? 'ds-breadcrumb-item--active' : ''}`} aria-current={isLast ? 'page' : undefined}>
              {!isLast && item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLast && <i className={`bi bi-${separator} ds-breadcrumb-separator`} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

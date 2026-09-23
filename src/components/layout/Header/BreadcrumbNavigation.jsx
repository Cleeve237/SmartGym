import { Link } from 'react-router-dom';

export default function BreadcrumbNavigation({ items = [] }) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="hd-breadcrumb" aria-label="Fil d'Ariane">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i}>
            {!isLast && item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span style={{ color: isLast ? 'var(--ds-text-primary)' : undefined, fontWeight: isLast ? 500 : undefined }}>{item.label}</span>
            )}
            {!isLast && <span className="hd-breadcrumb-sep"><i className="bi bi-chevron-right" /></span>}
          </span>
        );
      })}
    </nav>
  );
}

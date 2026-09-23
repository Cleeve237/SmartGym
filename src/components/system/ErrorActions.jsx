import { Link } from 'react-router-dom';

export default function ErrorActions({ actions = [] }) {
  if (!actions.length) return null;
  return (
    <div className="sys-actions">
      {actions.map((action, i) => {
        if (action.onClick) {
          return (
            <button key={i} onClick={action.onClick} className={`sys-btn sys-btn--${action.variant || 'primary'}`}>
              {action.icon && <i className={`bi bi-${action.icon}`} />}
              {action.label}
            </button>
          );
        }
        return (
          <Link key={i} to={action.path || '/'} className={`sys-btn sys-btn--${action.variant || 'primary'}`}>
            {action.icon && <i className={`bi bi-${action.icon}`} />}
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}

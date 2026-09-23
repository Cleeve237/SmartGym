import { useEffect } from 'react';
import './Toast.css';

const ICONS = {
  success: 'bi-check-circle-fill',
  error: 'bi-x-circle-fill',
  warning: 'bi-exclamation-circle-fill',
  info: 'bi-info-circle-fill',
};

export function Toast({ id, title, description, variant = 'info', onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => onClose?.(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={`ds-toast ds-toast--${variant}`} role="alert" aria-live="assertive">
      <span className="ds-toast-icon"><i className={`bi ${ICONS[variant] || ICONS.info}`} /></span>
      <div className="ds-toast-content">
        {title && <div className="ds-toast-title">{title}</div>}
        {description && <div className="ds-toast-desc">{description}</div>}
      </div>
      <button className="ds-toast-close" onClick={() => onClose?.(id)} aria-label="Fermer">
        <i className="bi bi-x" />
      </button>
      {duration > 0 && <div className="ds-toast-progress" style={{ animation: `ds-shrink ${duration}ms linear` }} />}
    </div>
  );
}

export function ToastContainer({ toasts = [], position = 'top-right', onClose }) {
  return (
    <div className={`ds-toast-container ds-toast-container--${position}`}>
      {toasts.map((t) => (
        <Toast key={t.id} {...t} onClose={onClose} />
      ))}
    </div>
  );
}

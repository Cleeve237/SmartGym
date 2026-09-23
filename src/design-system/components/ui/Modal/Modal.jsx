import { useEffect, useCallback } from 'react';
import './Modal.css';

export default function Modal({
  open, onClose, title, children, footer, size = 'md',
  centered = true, closeOnOverlay = true, className = '', ...props
}) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const cls = ['ds-modal', size !== 'md' ? `ds-modal--${size}` : '', className].filter(Boolean).join(' ');

  return (
    <div className={`ds-modal-overlay ${centered ? 'ds-modal--centered' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget && closeOnOverlay) onClose?.(); }}
      role="dialog" aria-modal="true" aria-label={title || 'Fenêtre modale'}
    >
      <div className={cls} onClick={(e) => e.stopPropagation()} {...props}>
        <div className="ds-modal-header">
          <h3 className="ds-modal-title">{title}</h3>
          <button className="ds-modal-close" onClick={onClose} aria-label="Fermer">
            <i className="bi bi-x-lg" />
          </button>
        </div>
        <div className="ds-modal-body">{children}</div>
        {footer && <div className="ds-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

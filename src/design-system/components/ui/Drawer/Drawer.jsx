import { useEffect, useCallback } from 'react';
import './Drawer.css';

export default function Drawer({
  open, onClose, title, children, footer, placement = 'right',
  size = 'md', className = '', ...props
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

  const cls = ['ds-drawer', `ds-drawer--${placement}`, size !== 'md' ? `ds-drawer--${size}` : '', className].filter(Boolean).join(' ');

  return (
    <>
      <div className="ds-drawer-overlay" onClick={onClose} />
      <div className={cls} role="dialog" aria-modal="true" aria-label={title || 'Panneau latéral'} {...props}>
        <div className="ds-drawer-header">
          <h3 className="ds-drawer-title">{title}</h3>
          <button className="ds-drawer-close" onClick={onClose} aria-label="Fermer">
            <i className="bi bi-x-lg" />
          </button>
        </div>
        <div className="ds-drawer-body">{children}</div>
        {footer && <div className="ds-drawer-footer">{footer}</div>}
      </div>
    </>
  );
}

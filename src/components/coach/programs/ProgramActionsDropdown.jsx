import { useState, useRef, useEffect } from 'react';

export default function ProgramActionsDropdown({ onView, onEdit, onDuplicate, onPublish, onUnpublish, onDelete, isPublished }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="cd-pgm-dropdown" ref={ref}>
      <button
        className="cd-pgm-dropdown-btn"
        onClick={() => setOpen(!open)}
        aria-label="Actions du programme"
        aria-expanded={open}
      >
        <i className="bi bi-three-dots-vertical" />
      </button>

      <div className={`cd-pgm-dropdown-menu ${open ? 'cd-pgm-dropdown-menu--open' : ''}`} role="menu">
        {onView && (
          <button className="cd-pgm-dropdown-item" role="menuitem" onClick={() => { setOpen(false); onView(); }}>
            <i className="bi bi-eye" /> Voir
          </button>
        )}
        {onEdit && (
          <button className="cd-pgm-dropdown-item" role="menuitem" onClick={() => { setOpen(false); onEdit(); }}>
            <i className="bi bi-pencil" /> Modifier
          </button>
        )}
        {onDuplicate && (
          <button className="cd-pgm-dropdown-item" role="menuitem" onClick={() => { setOpen(false); onDuplicate(); }}>
            <i className="bi bi-copy" /> Dupliquer
          </button>
        )}
        <div className="cd-pgm-dropdown-divider" />
        {isPublished ? (
          onUnpublish && (
            <button className="cd-pgm-dropdown-item" role="menuitem" onClick={() => { setOpen(false); onUnpublish(); }}>
              <i className="bi bi-eye-slash" /> Depublier
            </button>
          )
        ) : (
          onPublish && (
            <button className="cd-pgm-dropdown-item" role="menuitem" onClick={() => { setOpen(false); onPublish(); }}>
              <i className="bi bi-eye" /> Publier
            </button>
          )
        )}
        <div className="cd-pgm-dropdown-divider" />
        {onDelete && (
          <button className="cd-pgm-dropdown-item cd-pgm-dropdown-item--danger" role="menuitem" onClick={() => { setOpen(false); onDelete(); }}>
            <i className="bi bi-trash" /> Supprimer
          </button>
        )}
      </div>
    </div>
  );
}

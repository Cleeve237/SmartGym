export default function DeleteProgramModal({ show, onClose, onConfirm, programTitle }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={onClose}>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="delete-program-modal"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ border: 'none', borderRadius: 'var(--radius-xl)' }}>
            <div className="modal-body text-center p-4">
              <div className="cd-pgm-modal-icon cd-pgm-modal-icon--danger">
                <i className="bi bi-trash" />
              </div>
              <h5 id="delete-program-modal" className="fw-bold mb-2" style={{ color: 'var(--color-secondary)' }}>
                Supprimer le programme
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: 'var(--font-size-sm)' }}>
                Voulez-vous vraiment supprimer le programme
                {programTitle && <strong> &laquo; {programTitle} &raquo;</strong>} ?
              </p>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                Cette action est irreversible.
              </p>
            </div>
            <div className="modal-footer border-0 pt-0 justify-content-center gap-2 pb-4">
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onClose}>
                Annuler
              </button>
              <button type="button" className="btn btn-danger btn-sm" onClick={onConfirm}>
                <i className="bi bi-trash me-1" />
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

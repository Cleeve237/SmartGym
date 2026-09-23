export default function BlockSlotModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={onClose}>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="block-slot-modal"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ border: 'none', borderRadius: 'var(--radius-xl)' }}>
            <div className="modal-body p-4">
              <div className="cd-cal-modal-icon cd-cal-modal-icon--danger">
                <i className="bi bi-lock" />
              </div>
              <h5 id="block-slot-modal" className="fw-bold text-center mb-2" style={{ color: 'var(--color-secondary)' }}>
                Bloquer un creneau
              </h5>
              <p className="text-center text-muted mb-3" style={{ fontSize: 'var(--font-size-sm)' }}>
                Ce creneau sera marque comme indisponible.
              </p>

              <div className="mb-3">
                <label className="cd-pgm-form-label" htmlFor="modal-block-date">Date</label>
                <input id="modal-block-date" type="date" className="cd-pgm-form-input" />
              </div>
              <div className="cd-cal-form-row mb-3">
                <div>
                  <label className="cd-pgm-form-label" htmlFor="modal-block-start">Debut</label>
                  <input id="modal-block-start" type="time" className="cd-pgm-form-input" defaultValue="12:00" />
                </div>
                <div>
                  <label className="cd-pgm-form-label" htmlFor="modal-block-end">Fin</label>
                  <input id="modal-block-end" type="time" className="cd-pgm-form-input" defaultValue="13:00" />
                </div>
              </div>
              <div className="mb-3">
                <label className="cd-pgm-form-label" htmlFor="modal-block-reason">Raison</label>
                <input id="modal-block-reason" type="text" className="cd-pgm-form-input" placeholder="Ex: Pause dejeuner, reunion..." />
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 justify-content-center gap-2 pb-4">
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onClose}>Annuler</button>
              <button type="button" className="btn btn-danger btn-sm" onClick={onConfirm}>
                <i className="bi bi-lock me-1" /> Bloquer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

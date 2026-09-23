export default function CreateAvailabilityModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={onClose}>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="create-avail-modal"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ border: 'none', borderRadius: 'var(--radius-xl)' }}>
            <div className="modal-body p-4">
              <div className="cd-cal-modal-icon cd-cal-modal-icon--success">
                <i className="bi bi-plus-circle" />
              </div>
              <h5 id="create-avail-modal" className="fw-bold text-center mb-2" style={{ color: 'var(--color-secondary)' }}>
                Ajouter un creneau
              </h5>
              <p className="text-center text-muted mb-3" style={{ fontSize: 'var(--font-size-sm)' }}>
                Definissez un nouveau creneau de disponibilite.
              </p>

              <div className="mb-3">
                <label className="cd-pgm-form-label" htmlFor="modal-avail-date">Date</label>
                <input id="modal-avail-date" type="date" className="cd-pgm-form-input" />
              </div>
              <div className="cd-cal-form-row mb-3">
                <div>
                  <label className="cd-pgm-form-label" htmlFor="modal-avail-start">Debut</label>
                  <input id="modal-avail-start" type="time" className="cd-pgm-form-input" defaultValue="08:00" />
                </div>
                <div>
                  <label className="cd-pgm-form-label" htmlFor="modal-avail-end">Fin</label>
                  <input id="modal-avail-end" type="time" className="cd-pgm-form-input" defaultValue="18:00" />
                </div>
              </div>
              <div className="mb-3">
                <label className="cd-pgm-form-label" htmlFor="modal-avail-type">Type</label>
                <select id="modal-avail-type" className="cd-pgm-form-select">
                  <option value="available">Disponible</option>
                  <option value="unavailable">Indisponible</option>
                  <option value="break">Pause</option>
                </select>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 justify-content-center gap-2 pb-4">
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onClose}>Annuler</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={onConfirm}>
                <i className="bi bi-check-lg me-1" /> Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

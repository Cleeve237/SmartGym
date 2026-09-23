export default function BookingActions({ step, totalSteps, onBack, onNext, canNext, loading }) {
  return (
    <div className="bk-actions">
      {step > 0 && (
        <button type="button" className="bk-btn bk-btn--secondary" onClick={onBack}>
          <i className="bi bi-arrow-left" /> Retour
        </button>
      )}
      <button
        type="button"
        className="bk-btn bk-btn--primary"
        onClick={onNext}
        disabled={!canNext || loading}
      >
        {loading && <span className="spinner-border spinner-border-sm me-2" />}
        {step === totalSteps - 1 ? (
          <><i className="bi bi-check-circle" /> Confirmer la réservation</>
        ) : (
          <><span>Suivant</span> <i className="bi bi-arrow-right" /></>
        )}
      </button>
    </div>
  );
}

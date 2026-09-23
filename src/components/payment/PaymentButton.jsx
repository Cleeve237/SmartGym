export default function PaymentButton({ loading, disabled, onClick }) {
  return (
    <div>
      <button
        type="button"
        className="pay-button pay-button--primary"
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
            Traitement en cours...
          </>
        ) : (
          <>
            <i className="bi bi-lock pay-button-lock" />
            Payer maintenant
          </>
        )}
      </button>
      <div className="pay-secure">
        <i className="bi bi-shield-check" />
        Transaction sécurisée et chiffrée
      </div>
    </div>
  );
}

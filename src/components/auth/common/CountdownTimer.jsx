function CountdownTimer({ seconds, isRunning, formatted, onResend }) {
  return (
    <div className="auth-countdown">
      {isRunning ? (
        <>
          <p className="auth-countdown-text">Vous pouvez renvoyer le code dans</p>
          <p className="auth-countdown-time" aria-live="polite">{formatted}</p>
        </>
      ) : seconds === 0 ? (
        <button
          type="button"
          className="auth-countdown-btn"
          onClick={onResend}
        >
          <i className="bi bi-arrow-repeat" />
          Renvoyer le code
        </button>
      ) : (
        <p className="auth-countdown-text">
          <button
            type="button"
            className="auth-countdown-btn"
            onClick={onResend}
          >
            <i className="bi bi-arrow-repeat" />
            Renvoyer le code
          </button>
        </p>
      )}
    </div>
  );
}

export default CountdownTimer;

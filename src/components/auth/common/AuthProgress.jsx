function AuthProgress({ steps, currentStep }) {
  return (
    <div className="auth-progress" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length}>
      {steps.map((step, index) => (
        <div key={index} className="auth-progress-step">
          <div
            className={`auth-progress-dot${
              index === currentStep ? ' auth-progress-dot--active' : ''
            }${index < currentStep ? ' auth-progress-dot--completed' : ''}`}
            aria-current={index === currentStep ? 'step' : undefined}
          >
            {index < currentStep ? <i className="bi bi-check" /> : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`auth-progress-line${index < currentStep ? ' auth-progress-line--filled' : ''}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default AuthProgress;

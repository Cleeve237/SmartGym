export default function BookingStepper({ steps, currentStep }) {
  return (
    <div className="bk-stepper">
      {steps.map((step, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <div key={step.label} className="d-flex align-items-center">
            <div className={`bk-step ${active ? "bk-step--active" : ""} ${done ? "bk-step--done" : ""}`}>
              <div className="bk-step-circle">
                {done ? <i className="bi bi-check-lg" /> : i + 1}
              </div>
              <span className="bk-step-label">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`bk-step-line ${done ? "bk-step-line--done" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

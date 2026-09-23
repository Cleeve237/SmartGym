function StepNavigation({ currentStep, totalSteps, onPrev, onNext, isSubmitting }) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className="cr-navigation">
      <button
        type="button"
        className="cr-nav-back"
        onClick={onPrev}
        disabled={isFirst}
        style={{ visibility: isFirst ? 'hidden' : 'visible' }}
      >
        <i className="bi bi-arrow-left" />
        Precedent
      </button>

      <button
        type="button"
        className={`cr-nav-next${isLast ? ' cr-nav-next--submit' : ''}`}
        onClick={onNext}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="cr-nav-next-spinner" />
            Creation...
          </>
        ) : isLast ? (
          <>
            Creer mon profil de coach
            <i className="bi bi-check-lg" />
          </>
        ) : (
          <>
            Suivant
            <i className="bi bi-arrow-right" />
          </>
        )}
      </button>
    </div>
  );
}

export default StepNavigation;

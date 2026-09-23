const STEP_TITLES = [
  'Informations personnelles',
  'Informations professionnelles',
  'Disciplines',
  'Tarification',
  'Disponibilites',
  'Presentation',
  'Photo de profil',
  'Resume',
];

function StepIndicator({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="cr-indicator">
      <div className="cr-indicator-header">
        <span className="cr-indicator-step">
          Etape <strong>{currentStep + 1}</strong> sur {totalSteps}
        </span>
        <span className="cr-indicator-title">
          {STEP_TITLES[currentStep]}
        </span>
      </div>
      <div className="cr-progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="cr-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default StepIndicator;

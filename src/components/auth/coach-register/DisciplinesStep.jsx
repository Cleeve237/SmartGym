const DISCIPLINES = [
  { id: 'musculation', name: 'Musculation', icon: 'bi-lightning-charge' },
  { id: 'fitness', name: 'Fitness', icon: 'bi-heart-pulse' },
  { id: 'yoga', name: 'Yoga', icon: 'bi-activity' },
  { id: 'crossfit', name: 'CrossFit', icon: 'bi-trophy' },
  { id: 'cardio', name: 'Cardio', icon: 'bi-speedometer2' },
  { id: 'boxe', name: 'Boxe', icon: 'bi-hand-right' },
  { id: 'pilates', name: 'Pilates', icon: 'bi-person-arms-up' },
  { id: 'perte-de-poids', name: 'Perte de poids', icon: 'bi-graph-down-arrow' },
];

function DisciplinesStep({ data, errors, onChange }) {
  const selected = data.disciplines || [];

  const toggle = (id) => {
    const next = selected.includes(id)
      ? selected.filter((d) => d !== id)
      : [...selected, id];
    onChange('disciplines', next);
  };

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Vos disciplines</h2>
        <p className="cr-step-subtitle">
          Selectionnez toutes les disciplines que vous enseignez.
        </p>
      </div>

      <div className="cr-disciplines-grid">
        {DISCIPLINES.map((disc) => {
          const isSelected = selected.includes(disc.id);
          return (
            <button
              key={disc.id}
              type="button"
              className={`cr-discipline-card${isSelected ? ' cr-discipline-card--selected' : ''}${errors.disciplines ? ' cr-discipline-card--error' : ''}`}
              onClick={() => toggle(disc.id)}
              aria-pressed={isSelected}
            >
              <div className="cr-discipline-icon">
                <i className={`bi ${disc.icon}`} />
              </div>
              <span className="cr-discipline-name">{disc.name}</span>
              <span className="cr-discipline-check">
                {isSelected && <i className="bi bi-check-lg" />}
              </span>
            </button>
          );
        })}
      </div>

      {errors.disciplines && (
        <span className="cr-field-error" style={{ marginTop: '0.5rem' }}>
          <i className="bi bi-exclamation-circle" />
          {errors.disciplines}
        </span>
      )}
    </div>
  );
}

export default DisciplinesStep;

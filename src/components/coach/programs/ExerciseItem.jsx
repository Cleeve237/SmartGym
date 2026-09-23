function ExerciseItem({ exercise, index, onChange, onRemove }) {
  const update = (field, value) => {
    onChange?.({ ...exercise, [field]: value });
  };

  return (
    <div className="cd-pgm-exercise">
      <div className="cd-pgm-exercise-header">
        <div className="cd-pgm-exercise-handle" aria-label="Reordonner">
          <i className="bi bi-grip-vertical" />
        </div>
        <div className="cd-pgm-exercise-number">{index + 1}</div>
        <input
          className="cd-pgm-exercise-name"
          type="text"
          placeholder="Nom de l'exercice"
          value={exercise.name || ''}
          onChange={(e) => update('name', e.target.value)}
          aria-label={`Nom de l'exercice ${index + 1}`}
        />
        <button
          type="button"
          className="cd-pgm-exercise-remove"
          onClick={onRemove}
          aria-label={`Supprimer l'exercice ${index + 1}`}
        >
          <i className="bi bi-trash" />
        </button>
      </div>
      <div className="cd-pgm-exercise-body">
        <div>
          <label className="cd-pgm-form-label" htmlFor={`ex-duration-${index}`}>
            Duree
          </label>
          <input
            id={`ex-duration-${index}`}
            className="cd-pgm-form-input"
            type="text"
            placeholder="Ex: 10 min"
            value={exercise.duration || ''}
            onChange={(e) => update('duration', e.target.value)}
          />
        </div>
        <div>
          <label className="cd-pgm-form-label" htmlFor={`ex-reps-${index}`}>
            Repetitions
          </label>
          <input
            id={`ex-reps-${index}`}
            className="cd-pgm-form-input"
            type="text"
            placeholder="Ex: 3 series de 12"
            value={exercise.reps || ''}
            onChange={(e) => update('reps', e.target.value)}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="cd-pgm-form-label" htmlFor={`ex-desc-${index}`}>
            Description
          </label>
          <input
            id={`ex-desc-${index}`}
            className="cd-pgm-form-input"
            type="text"
            placeholder="Instructions ou notes..."
            value={exercise.description || ''}
            onChange={(e) => update('description', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ExerciseItem;

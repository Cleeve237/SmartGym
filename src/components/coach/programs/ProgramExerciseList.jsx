import { useState } from 'react';
import ExerciseItem from './ExerciseItem';

function ProgramExerciseList({ exercises: initial }) {
  const [exercises, setExercises] = useState(
    initial?.length ? initial : [{ name: '', duration: '', reps: '', description: '' }]
  );

  const update = (index, data) => {
    const next = [...exercises];
    next[index] = data;
    setExercises(next);
  };

  const remove = (index) => {
    if (exercises.length <= 1) return;
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const add = () => {
    setExercises([...exercises, { name: '', duration: '', reps: '', description: '' }]);
  };

  return (
    <div className="cd-pgm-form-group">
      <div className="cd-pgm-list">
        {exercises.map((ex, i) => (
          <ExerciseItem
            key={i}
            exercise={ex}
            index={i}
            onChange={(data) => update(i, data)}
            onRemove={() => remove(i)}
          />
        ))}
      </div>
      <button type="button" className="cd-pgm-list-add" onClick={add} style={{ marginTop: '0.75rem' }}>
        <i className="bi bi-plus" /> Ajouter un exercice
      </button>
    </div>
  );
}

export default ProgramExerciseList;

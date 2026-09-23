import { useState } from 'react';

function ProgramObjectivesForm({ objectives: initialObjectives, results: initialResults }) {
  const [objectives, setObjectives] = useState(initialObjectives?.length ? initialObjectives : ['']);
  const [results, setResults] = useState(initialResults?.length ? initialResults : ['']);

  const addItem = (list, setList) => setList([...list, '']);
  const removeItem = (list, setList, index) => setList(list.filter((_, i) => i !== index));
  const updateItem = (list, setList, index, value) => {
    const next = [...list];
    next[index] = value;
    setList(next);
  };

  const renderList = (items, setItems, placeholder, listName) => (
    <div className="cd-pgm-list">
      {items.map((item, i) => (
        <div key={i} className="cd-pgm-list-item">
          <input
            className="cd-pgm-list-item-input"
            type="text"
            placeholder={placeholder}
            value={item}
            onChange={(e) => updateItem(items, setItems, i, e.target.value)}
            aria-label={`${listName} ${i + 1}`}
          />
          {items.length > 1 && (
            <button
              type="button"
              className="cd-pgm-list-item-remove"
              onClick={() => removeItem(items, setItems, i)}
              aria-label={`Supprimer ${listName} ${i + 1}`}
            >
              <i className="bi bi-x-lg" />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="cd-pgm-list-add"
        onClick={() => addItem(items, setItems)}
      >
        <i className="bi bi-plus" /> Ajouter
      </button>
    </div>
  );

  return (
    <div className="cd-pgm-form-group">
      <div style={{ marginBottom: '1.25rem' }}>
        <label className="cd-pgm-form-label">Objectifs du programme</label>
        <p className="cd-pgm-form-hint" style={{ marginBottom: '0.5rem' }}>
          Quels objectifs ce programme aide-t-il a atteindre ?
        </p>
        {renderList(objectives, setObjectives, 'Ex: Developper la force musculaire...', 'objectif')}
      </div>

      <div>
        <label className="cd-pgm-form-label">Resultats attendus</label>
        <p className="cd-pgm-form-hint" style={{ marginBottom: '0.5rem' }}>
          Quels resultats concrets les clients peuvent-ils attendre ?
        </p>
        {renderList(results, setResults, 'Ex: Gagner 3kg de masse musculaire...', 'resultat')}
      </div>
    </div>
  );
}

export default ProgramObjectivesForm;

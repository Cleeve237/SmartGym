function FaqItem({ faq, index, onChange, onRemove }) {
  const update = (field, value) => {
    onChange?.({ ...faq, [field]: value });
  };

  return (
    <div className="cd-pgm-faq-item">
      <div className="cd-pgm-faq-header">
        <i className="bi bi-question-circle" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        <input
          className="cd-pgm-faq-q-input"
          type="text"
          placeholder="Question"
          value={faq.question || ''}
          onChange={(e) => update('question', e.target.value)}
          aria-label={`Question ${index + 1}`}
        />
        <button
          type="button"
          className="cd-pgm-list-item-remove"
          onClick={onRemove}
          aria-label={`Supprimer la question ${index + 1}`}
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>
      <div className="cd-pgm-faq-body">
        <textarea
          className="cd-pgm-faq-a-input"
          placeholder="Reponse..."
          value={faq.answer || ''}
          onChange={(e) => update('answer', e.target.value)}
          aria-label={`Reponse a la question ${index + 1}`}
          rows={2}
        />
      </div>
    </div>
  );
}

export default FaqItem;

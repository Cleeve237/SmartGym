import { useState } from 'react';
import FaqItem from './FaqItem';

function ProgramFAQ({ faqs: initial }) {
  const [faqs, setFaqs] = useState(
    initial?.length ? initial : [{ question: '', answer: '' }]
  );

  const update = (index, data) => {
    const next = [...faqs];
    next[index] = data;
    setFaqs(next);
  };

  const remove = (index) => {
    if (faqs.length <= 1) return;
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const add = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  return (
    <div className="cd-pgm-form-group">
      <p className="cd-pgm-form-hint" style={{ marginBottom: '0.75rem' }}>
        Repondez aux questions frequentes pour rassurer vos clients potentiels.
      </p>
      <div>
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            index={i}
            onChange={(data) => update(i, data)}
            onRemove={() => remove(i)}
          />
        ))}
      </div>
      <button type="button" className="cd-pgm-list-add" onClick={add} style={{ marginTop: '0.6rem' }}>
        <i className="bi bi-plus" /> Ajouter une question
      </button>
    </div>
  );
}

export default ProgramFAQ;

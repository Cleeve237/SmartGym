import { useState } from 'react';

function ProgramFAQ({ faq }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-question-circle" /><h2>Questions fréquentes</h2>
      </div>
      {faq.map((item, i) => (
        <FaqItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pd-faq-item">
      <button className={`pd-faq-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        {question}<i className="bi bi-chevron-down" />
      </button>
      {open && <p className="pd-faq-answer">{answer}</p>}
    </div>
  );
}

export default ProgramFAQ;

export default function CoachFAQItem({ faq, open, onToggle }) {
  return (
    <div className="cp-faq-item">
      <button className={`cp-faq-btn ${open ? 'open' : ''}`} onClick={onToggle}>
        {faq.q}
        <i className={`bi bi-chevron-${open ? 'up' : 'down'}`} />
      </button>
      {open && <p className="cp-faq-answer">{faq.a}</p>}
    </div>
  );
}

import CoachFAQItem from './CoachFAQItem';
import { useState } from 'react';
import { COACH_FAQ } from './mockCoaches';

export default function CoachFAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-question-circle-fill" />
        <h2>Questions fréquentes</h2>
      </div>
      {COACH_FAQ.map((faq, i) => (
        <CoachFAQItem key={i} faq={faq} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
      ))}
    </div>
  );
}

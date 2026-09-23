import { useState } from 'react';
import SessionCard from './SessionCard';

const SESSION_TYPES = [
  { title: 'Technique & Fondamentaux', duration: '60 min', intensity: 'Moyen' },
  { title: 'Force & Puissance', duration: '60 min', intensity: 'Élevé' },
  { title: 'Cardio & Endurance', duration: '45 min', intensity: 'Élevé' },
  { title: 'Récupération Active', duration: '30 min', intensity: 'Faible' },
  { title: 'Dépassement & Challenge', duration: '75 min', intensity: 'Très élevé' },
];

function WeekAccordion({ weekNum, title, sessions }) {
  const [open, setOpen] = useState(weekNum === 1);

  return (
    <div className="pd-accordion-item">
      <button className={`pd-accordion-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        <i className="bi bi-chevron-down" />
      </button>
      {open && (
        <div className="pd-accordion-body">
          {(sessions || SESSION_TYPES).slice(0, Math.min(weekNum + 2, 5)).map((s, i) => (
            <SessionCard key={i} session={{ num: i + 1, ...s }} />
          ))}
        </div>
      )}
    </div>
  );
}
export default WeekAccordion;

import { useState } from 'react';

const DAYS = [
  { key: 'mon', label: 'Lundi' },
  { key: 'tue', label: 'Mardi' },
  { key: 'wed', label: 'Mercredi' },
  { key: 'thu', label: 'Jeudi' },
  { key: 'fri', label: 'Vendredi' },
  { key: 'sat', label: 'Samedi' },
  { key: 'sun', label: 'Dimanche' },
];

function WorkingHoursCard({ hours: initial, onChange }) {
  const [hours, setHours] = useState(initial || {
    mon: { on: true, open: '08:00', close: '18:00' },
    tue: { on: true, open: '08:00', close: '18:00' },
    wed: { on: true, open: '08:00', close: '18:00' },
    thu: { on: true, open: '08:00', close: '18:00' },
    fri: { on: true, open: '08:00', close: '18:00' },
    sat: { on: false, open: '08:00', close: '18:00' },
    sun: { on: false, open: '08:00', close: '18:00' },
  });

  const toggleDay = (key) => {
    const next = { ...hours, [key]: { ...hours[key], on: !hours[key].on } };
    setHours(next);
    onChange?.(next);
  };

  const applyToAll = () => {
    const first = hours.mon;
    const next = {};
    for (const d of DAYS) {
      next[d.key] = { ...first };
    }
    setHours(next);
    onChange?.(next);
  };

  return (
    <div className="cd-cal-hours">
      <div className="cd-cal-hours-header">
        <div className="cd-cal-hours-title">
          <i className="bi bi-clock" />
          Horaires de travail
        </div>
      </div>
      <div className="cd-cal-hours-body">
        {DAYS.map((d) => (
          <div key={d.key} className="cd-cal-hours-row">
            <span className="cd-cal-hours-day">{d.label}</span>
            {hours[d.key].on ? (
              <span className="cd-cal-hours-time">
                {hours[d.key].open} - {hours[d.key].close}
              </span>
            ) : (
              <span className="cd-cal-hours-time" style={{ color: 'var(--color-gray-400)' }}>Ferme</span>
            )}
            <button
              className={`cd-cal-hours-toggle ${hours[d.key].on ? 'cd-cal-hours-toggle--on' : ''}`}
              onClick={() => toggleDay(d.key)}
              aria-label={`${hours[d.key].on ? 'Desactiver' : 'Activer'} ${d.label}`}
            >
              <div className="cd-cal-hours-toggle-thumb" />
            </button>
          </div>
        ))}
      </div>
      <div className="cd-cal-hours-footer">
        <button className="btn btn-outline-primary btn-sm w-100" onClick={applyToAll}>
          <i className="bi bi-arrow-repeat me-1" />
          Appliquer a toute la semaine
        </button>
      </div>
    </div>
  );
}

export default WorkingHoursCard;

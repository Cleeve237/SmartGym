import { useState } from 'react';

const WEEKDAYS = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
const MONTHS = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

function MiniCalendar({ selectedDate, onSelectDate }) {
  const [current, setCurrent] = useState(selectedDate ? new Date(selectedDate) : new Date());

  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const prev = () => setCurrent(new Date(year, month - 1, 1));
  const next = () => setCurrent(new Date(year, month + 1, 1));

  const today = new Date();
  const isToday = (d) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const cells = [];
  for (let i = 0; i < startDow; i++) {
    const d = new Date(year, month, -(startDow - i - 1));
    cells.push({ day: d.getDate(), current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false });
  }

  const selected = selectedDate ? new Date(selectedDate) : null;

  return (
    <div className="cd-cal-mini">
      <div className="cd-cal-mini-header">
        <span className="cd-cal-mini-title">{MONTHS[month]} {year}</span>
        <div className="cd-cal-mini-nav">
          <button onClick={prev} aria-label="Mois precedent">
            <i className="bi bi-chevron-left" />
          </button>
          <button onClick={next} aria-label="Mois suivant">
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
      <div className="cd-cal-mini-grid">
        {WEEKDAYS.map((d) => (
          <div key={d} className="cd-cal-mini-weekday">{d}</div>
        ))}
        {cells.map((cell, i) => {
          const dateObj = new Date(year, month, cell.day);
          const isSelected = selected && cell.current &&
            dateObj.getDate() === selected.getDate() &&
            dateObj.getMonth() === selected.getMonth();
          return (
            <button
              key={i}
              className={[
                'cd-cal-mini-day',
                !cell.current && 'cd-cal-mini-day--other',
                isToday(cell.day) && cell.current && 'cd-cal-mini-day--today',
                isSelected && 'cd-cal-mini-day--selected',
              ].filter(Boolean).join(' ')}
              onClick={() => cell.current && onSelectDate?.(new Date(year, month, cell.day))}
              disabled={!cell.current}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MiniCalendar;

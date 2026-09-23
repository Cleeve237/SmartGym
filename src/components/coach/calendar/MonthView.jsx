import CalendarEvent from './CalendarEvent';

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

function MonthView({ currentDate, events }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const today = new Date();

  const getEventsForDay = (day) => {
    if (!events) return [];
    return events.filter((ev) => {
      const evDate = new Date(ev.date);
      return evDate.getDate() === day && evDate.getMonth() === month && evDate.getFullYear() === year;
    });
  };

  const rows = [];
  let cells = [];

  for (let i = 0; i < startDow; i++) {
    const d = new Date(year, month, -(startDow - i - 1));
    cells.push({ day: d.getDate(), current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  while (cells.length % 7 !== 0) {
    const d = cells.length - startDow - daysInMonth + 1;
    cells.push({ day: d, current: false });
  }
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <table className="cd-cal-month">
      <thead>
        <tr>
          {WEEKDAYS.map((d) => <th key={d}>{d}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => {
              const isToday = cell.current &&
                cell.day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();
              const dayEvents = cell.current ? getEventsForDay(cell.day) : [];

              return (
                <td
                  key={ci}
                  className={`${isToday ? 'cd-cal-month--today' : ''} ${!cell.current ? 'cd-cal-month--other' : ''}`}
                >
                  <div className={`cd-cal-month-day ${isToday ? 'cd-cal-month-day--today' : ''}`}>
                    {cell.day}
                  </div>
                  <div className="cd-cal-month-events">
                    {dayEvents.slice(0, 3).map((ev, i) => (
                      <div key={i} className={`cd-cal-month-event cd-cal-event--${ev.type}`}>
                        {ev.time} {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="cd-cal-month-more">+{dayEvents.length - 3} de plus</div>
                    )}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MonthView;

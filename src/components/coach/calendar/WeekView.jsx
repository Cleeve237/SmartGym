import TimeColumn from './TimeColumn';
import DayColumn from './DayColumn';

const DAY_NAMES = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

function WeekView({ currentDate, events }) {
  const startOfWeek = new Date(currentDate);
  const dow = (startOfWeek.getDay() + 6) % 7;
  startOfWeek.setDate(startOfWeek.getDate() - dow);

  const today = new Date();

  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(d.getDate() + i);
    days.push(d);
  }

  const getEventsForDay = (date) => {
    if (!events) return [];
    return events.filter((ev) => {
      const evDate = new Date(ev.date);
      return evDate.getDate() === date.getDate() &&
        evDate.getMonth() === date.getMonth() &&
        evDate.getFullYear() === date.getFullYear();
    });
  };

  return (
    <div>
      <div className="cd-cal-days-header" style={{ gridTemplateColumns: `60px repeat(7, 1fr)` }}>
        <div />
        {days.map((d, i) => {
          const isToday = d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
          return (
            <div key={i} className={`cd-cal-day-header ${isToday ? 'cd-cal-day-header--today' : ''}`}>
              <span className="cd-cal-day-header-name">{DAY_NAMES[i]}</span>
              <span className="cd-cal-day-header-num">{d.getDate()}</span>
            </div>
          );
        })}
      </div>
      <div className="cd-cal-week" style={{ gridTemplateColumns: `60px repeat(7, 1fr)` }}>
        <TimeColumn />
        {days.map((d, i) => {
          const isToday = d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
          return (
            <DayColumn key={i} events={getEventsForDay(d)} isToday={isToday} />
          );
        })}
      </div>
    </div>
  );
}

export default WeekView;

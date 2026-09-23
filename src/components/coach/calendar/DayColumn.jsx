import CalendarEvent from './CalendarEvent';

function DayColumn({ events, startHour = 8, endHour = 20, isToday }) {
  const hours = [];
  for (let h = startHour; h <= endHour; h++) {
    hours.push(h);
  }

  const now = new Date();
  const nowTop = isToday ? ((now.getHours() - startHour) * 60 + now.getMinutes()) * (60 / 60) : null;

  return (
    <div className="cd-cal-day-col" style={{ position: 'relative' }}>
      {hours.map((h) => (
        <div key={h} className="cd-cal-hour-line" />
      ))}
      {isToday && nowTop !== null && nowTop >= 0 && (
        <div className="cd-cal-now-line" style={{ top: `${nowTop}px` }} />
      )}
      {events?.map((ev, i) => (
        <CalendarEvent key={i} event={ev} />
      ))}
    </div>
  );
}

export default DayColumn;

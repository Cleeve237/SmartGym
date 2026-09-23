function CalendarEvent({ event }) {
  const typeMap = {
    available: 'cd-cal-event--available',
    booked: 'cd-cal-event--booked',
    blocked: 'cd-cal-event--blocked',
    completed: 'cd-cal-event--completed',
    pending: 'cd-cal-event--pending',
    cancelled: 'cd-cal-event--cancelled',
  };

  const top = ((event.startHour - 8) * 60 + event.startMin) * (60 / 60);
  const height = Math.max(((event.endHour - event.startHour) * 60 + (event.endMin - event.startMin)) * (60 / 60), 20);

  return (
    <div
      className={`cd-cal-event ${typeMap[event.type] || typeMap.available}`}
      style={{ top: `${top}px`, height: `${height}px` }}
      title={`${event.time} - ${event.title}`}
      role="button"
      tabIndex={0}
      aria-label={`${event.title}, ${event.time}`}
    >
      <div className="cd-cal-event-time">{event.time}</div>
      <div className="cd-cal-event-title">{event.title}</div>
      {height > 35 && (
        <div className="cd-cal-event-meta">{event.meta}</div>
      )}
    </div>
  );
}

export default CalendarEvent;

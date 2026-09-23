const MONTH = 'Juillet 2026';
const WEEKDAYS = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
const DAYS = [
  null, null, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, null, null,
];
const EVENT_DAYS = [25, 26, 28, 30];

function CalendarWidget() {
  const today = 24;

  return (
    <div className="dash-widget">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-calendar3" />
          Calendrier
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-cal">
          <div className="dash-cal-header">
            <span className="dash-cal-month">{MONTH}</span>
            <div className="dash-cal-nav">
              <button type="button" aria-label="Mois precedent"><i className="bi bi-chevron-left" /></button>
              <button type="button" aria-label="Mois suivant"><i className="bi bi-chevron-right" /></button>
            </div>
          </div>
          <div className="dash-cal-weekdays">
            {WEEKDAYS.map((d) => (
              <span key={d} className="dash-cal-weekday">{d}</span>
            ))}
          </div>
          <div className="dash-cal-days">
            {DAYS.map((day, i) => {
              if (day === null) return <span key={`empty-${i}`} className="dash-cal-day dash-cal-day--other" />;
              const isToday = day === today;
              const hasEvent = EVENT_DAYS.includes(day);
              const classes = [
                'dash-cal-day',
                isToday ? 'dash-cal-day--today' : '',
                hasEvent ? 'dash-cal-day--has-event' : '',
              ].filter(Boolean).join(' ');
              return (
                <span key={day} className={classes}>
                  {day}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarWidget;

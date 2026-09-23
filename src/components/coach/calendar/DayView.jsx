import TimeColumn from './TimeColumn';
import DayColumn from './DayColumn';

function DayView({ currentDate, events }) {
  const today = new Date();
  const isToday = currentDate.getDate() === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  const dayEvents = events?.filter((ev) => {
    const evDate = new Date(ev.date);
    return evDate.getDate() === currentDate.getDate() &&
      evDate.getMonth() === currentDate.getMonth() &&
      evDate.getFullYear() === currentDate.getFullYear();
  }) || [];

  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthNames = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  return (
    <div>
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-gray-100)' }}>
        <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-secondary)' }}>
          {dayNames[currentDate.getDay()]} {currentDate.getDate()} {monthNames[currentDate.getMonth()]}
        </span>
        {isToday && (
          <span className="cd-cal-badge cd-cal-badge--available" style={{ marginLeft: '0.5rem' }}>Aujourd&apos;hui</span>
        )}
      </div>
      <div className="cd-cal-day-view">
        <div className="cd-cal-days-header" style={{ gridTemplateColumns: '60px 1fr' }}>
          <div />
          <div className={`cd-cal-day-header ${isToday ? 'cd-cal-day-header--today' : ''}`}>
            <span className="cd-cal-day-header-name">{dayNames[currentDate.getDay()]}</span>
            <span className="cd-cal-day-header-num">{currentDate.getDate()}</span>
          </div>
        </div>
        <div className="cd-cal-week" style={{ gridTemplateColumns: '60px 1fr' }}>
          <TimeColumn />
          <DayColumn events={dayEvents} isToday={isToday} />
        </div>
      </div>
    </div>
  );
}

export default DayView;

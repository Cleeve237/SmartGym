import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';

function CalendarGrid({ view, currentDate, events }) {
  if (view === 'month') {
    return (
      <div className="cd-cal-card">
        <MonthView currentDate={currentDate} events={events} />
      </div>
    );
  }

  if (view === 'week') {
    return (
      <div className="cd-cal-card">
        <WeekView currentDate={currentDate} events={events} />
      </div>
    );
  }

  return (
    <div className="cd-cal-card">
      <DayView currentDate={currentDate} events={events} />
    </div>
  );
}

export default CalendarGrid;

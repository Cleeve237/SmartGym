import MiniCalendar from './MiniCalendar';
import UpcomingBookingsWidget from './UpcomingBookingsWidget';
import WorkingHoursCard from './WorkingHoursCard';
import BlockedSlotsCard from './BlockedSlotsCard';

function CalendarSidebar({ selectedDate, onSelectDate, onRemoveBlocked }) {
  return (
    <aside className="cd-cal-sidebar">
      <MiniCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
      <UpcomingBookingsWidget />
      <WorkingHoursCard />
      <BlockedSlotsCard onRemove={onRemoveBlocked} />
    </aside>
  );
}

export default CalendarSidebar;

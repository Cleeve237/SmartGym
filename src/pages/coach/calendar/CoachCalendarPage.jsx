import { useState, useMemo } from 'react';
import '../../../components/coach/calendar/Calendar.css';
import CalendarHeader from '../../../components/coach/calendar/CalendarHeader';
import CalendarToolbar from '../../../components/coach/calendar/CalendarToolbar';
import CalendarGrid from '../../../components/coach/calendar/CalendarGrid';
import CalendarSidebar from '../../../components/coach/calendar/CalendarSidebar';
import CalendarFilters from '../../../components/coach/calendar/CalendarFilters';
import CreateAvailabilityModal from '../../../components/coach/calendar/CreateAvailabilityModal';
import BlockSlotModal from '../../../components/coach/calendar/BlockSlotModal';

const MOCK_EVENTS = [
  { id: 'e1', date: '2026-07-24', time: '10:00-11:00', startHour: 10, startMin: 0, endHour: 11, endMin: 0, title: 'Marie Kamga', meta: 'Musculation', type: 'booked' },
  { id: 'e2', date: '2026-07-24', time: '14:00-15:00', startHour: 14, startMin: 0, endHour: 15, endMin: 0, title: 'Paul Njoya', meta: 'Cardio HIIT', type: 'booked' },
  { id: 'e3', date: '2026-07-24', time: '08:00-12:00', startHour: 8, startMin: 0, endHour: 12, endMin: 0, title: 'Disponible', meta: 'Creneau libre', type: 'available' },
  { id: 'e4', date: '2026-07-24', time: '12:00-13:00', startHour: 12, startMin: 0, endHour: 13, endMin: 0, title: 'Pause dejeuner', meta: '', type: 'blocked' },
  { id: 'e5', date: '2026-07-24', time: '15:00-18:00', startHour: 15, startMin: 0, endHour: 18, endMin: 0, title: 'Disponible', meta: 'Creneau libre', type: 'available' },
  { id: 'e6', date: '2026-07-25', time: '09:00-10:00', startHour: 9, startMin: 0, endHour: 10, endMin: 0, title: 'Sophie Bella', meta: 'Yoga', type: 'booked' },
  { id: 'e7', date: '2026-07-25', time: '10:00-12:00', startHour: 10, startMin: 0, endHour: 12, endMin: 0, title: 'Disponible', meta: 'Creneau libre', type: 'available' },
  { id: 'e8', date: '2026-07-25', time: '14:00-15:00', startHour: 14, startMin: 0, endHour: 15, endMin: 0, title: 'Jean Mbarga', meta: 'CrossFit', type: 'pending' },
  { id: 'e9', date: '2026-07-26', time: '08:00-10:00', startHour: 8, startMin: 0, endHour: 10, endMin: 0, title: 'Disponible', meta: 'Creneau libre', type: 'available' },
  { id: 'e10', date: '2026-07-26', time: '10:00-11:00', startHour: 10, startMin: 0, endHour: 11, endMin: 0, title: 'Claire Bella', meta: 'Boxe', type: 'booked' },
  { id: 'e11', date: '2026-07-23', time: '09:00-10:00', startHour: 9, startMin: 0, endHour: 10, endMin: 0, title: 'Thomas Nkomo', meta: 'Musculation', type: 'completed' },
  { id: 'e12', date: '2026-07-23', time: '14:00-15:00', startHour: 14, startMin: 0, endHour: 15, endMin: 0, title: 'Anne Messi', meta: 'Cardio', type: 'completed' },
  { id: 'e13', date: '2026-07-28', time: '08:00-18:00', startHour: 8, startMin: 0, endHour: 18, endMin: 0, title: 'Bloque', meta: 'Conge', type: 'blocked' },
];

const MONTH_NAMES = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

function CoachCalendarPage() {
  const [view, setView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [filters, setFilters] = useState({ available: true, booked: true, blocked: true, completed: true, pending: true, program: '' });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);

  const periodLabel = useMemo(() => {
    if (view === 'month') return `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    if (view === 'week') {
      const start = new Date(currentDate);
      const dow = (start.getDay() + 6) % 7;
      start.setDate(start.getDate() - dow);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      return `${start.getDate()} ${MONTH_NAMES[start.getMonth()].slice(0, 3)} — ${end.getDate()} ${MONTH_NAMES[end.getMonth()].slice(0, 3)} ${end.getFullYear()}`;
    }
    return `${currentDate.getDate()} ${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  }, [view, currentDate]);

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((ev) => {
      if (!filters[ev.type]) return false;
      if (filters.program && ev.meta?.toLowerCase() !== filters.program) return false;
      return true;
    });
  }, [filters]);

  const hasFilter = !filters.available || !filters.booked || !filters.blocked || !filters.completed || !filters.pending || !!filters.program;

  const navigate = (dir) => {
    const d = new Date(currentDate);
    if (view === 'month') d.setMonth(d.getMonth() + dir);
    else if (view === 'week') d.setDate(d.getDate() + dir * 7);
    else d.setDate(d.getDate() + dir);
    setCurrentDate(d);
  };

  const goToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  return (
    <div>
      <CalendarHeader
        onCreate={() => setShowCreateModal(true)}
        onBlock={() => setShowBlockModal(true)}
      />

      <CalendarToolbar
        periodLabel={periodLabel}
        view={view}
        onViewChange={setView}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        onToday={goToday}
      />

      <div className="cd-cal-layout">
        <div>
          <CalendarGrid
            view={view}
            currentDate={currentDate}
            events={filteredEvents}
          />
        </div>

        <CalendarSidebar
          selectedDate={selectedDate}
          onSelectDate={(d) => { setSelectedDate(d); setCurrentDate(d); }}
        />
      </div>

      <div style={{ marginTop: '1.25rem' }}>
        <CalendarFilters filters={filters} onChange={setFilters} />
      </div>

      <CreateAvailabilityModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onConfirm={() => setShowCreateModal(false)}
      />

      <BlockSlotModal
        show={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirm={() => setShowBlockModal(false)}
      />
    </div>
  );
}

export default CoachCalendarPage;

import { Link } from 'react-router-dom';
import SessionCard from './SessionCard';
import EmptyState from './EmptyState';
import SectionTitle from './SectionTitle';

const SESSIONS = [
  {
    id: 1,
    coach: 'Coach Ahmadou',
    discipline: 'Musculation',
    date: 'Ven 25 Juil',
    time: '08:00',
    city: 'Douala',
    status: 'Confirmee',
  },
  {
    id: 2,
    coach: 'Coach Celeste',
    discipline: 'Yoga',
    date: 'Sam 26 Juil',
    time: '10:00',
    city: 'Yaounde',
    status: 'En attente',
  },
  {
    id: 3,
    coach: 'Coach Michel',
    discipline: 'CrossFit',
    date: 'Lun 28 Juil',
    time: '07:30',
    city: 'Bafoussam',
    status: 'Confirmee',
  },
];

function UpcomingSessionsWidget() {
  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-calendar-week" />
          Prochaines seances
        </h2>
        <Link to="/client/bookings" className="dash-widget-link">
          Tout voir <i className="bi bi-arrow-right" />
        </Link>
      </div>
      <div className="dash-widget-body">
        {SESSIONS.length > 0 ? (
          SESSIONS.map((s) => <SessionCard key={s.id} {...s} />)
        ) : (
          <EmptyState
            icon="bi-calendar-x"
            title="Aucune seance a venir"
            description="Reservez une seance pour commencer."
            actionTo="/client/coaches"
            action="Trouver un coach"
          />
        )}
      </div>
    </div>
  );
}

export default UpcomingSessionsWidget;

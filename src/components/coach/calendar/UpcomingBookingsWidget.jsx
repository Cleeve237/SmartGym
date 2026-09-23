const UPCOMING = [
  { id: '1', client: 'Marie Kamga', program: 'Musculation', time: '10:00', date: '25 Juil.' },
  { id: '2', client: 'Paul Njoya', program: 'Cardio HIIT', time: '14:00', date: '25 Juil.' },
  { id: '3', client: 'Sophie Bella', program: 'Yoga', time: '09:00', date: '26 Juil.' },
  { id: '4', client: 'Jean Mbarga', program: 'CrossFit', time: '16:00', date: '27 Juil.' },
];

function UpcomingBookingsWidget() {
  return (
    <div className="cd-cal-widget">
      <div className="cd-cal-widget-header">
        <div className="cd-cal-widget-title">
          <i className="bi bi-calendar-check" />
          Prochaines seances
        </div>
        <a href="/coach/bookings" className="cd-cal-widget-link">
          Tout voir <i className="bi bi-arrow-right" />
        </a>
      </div>
      <div className="cd-cal-widget-body">
        {UPCOMING.length === 0 ? (
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', textAlign: 'center', padding: '1rem 0' }}>
            Aucune seance prevue.
          </p>
        ) : (
          UPCOMING.map((b) => (
            <div key={b.id} className="cd-cal-booking-item">
              <div className="cd-cal-booking-time">{b.time}</div>
              <div className="cd-cal-booking-info">
                <div className="cd-cal-booking-client">{b.client}</div>
                <div className="cd-cal-booking-program">{b.program} &middot; {b.date}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UpcomingBookingsWidget;

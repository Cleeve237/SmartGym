import CoachSessionCard from "./CoachSessionCard";

const SESSIONS = [
  { id: "s1", clientName: "Paul Njoya", clientPhoto: null, date: "2026-07-25T10:00:00", time: "10:00", program: "Musculation", status: "confirmed" },
  { id: "s2", clientName: "Marie Kamga", clientPhoto: null, date: "2026-07-25T14:00:00", time: "14:00", program: "Cardio & HIIT", status: "confirmed" },
  { id: "s3", clientName: "Jean Mbarga", clientPhoto: null, date: "2026-07-26T08:00:00", time: "08:00", program: "Yoga", status: "pending" },
  { id: "s4", clientName: "Sophie Bella", clientPhoto: null, date: "2026-07-27T16:00:00", time: "16:00", program: "Coaching Personnel", status: "confirmed" },
];

export default function UpcomingSessions() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-calendar-week" /> Prochaines séances
        </div>
        <a href="/coach/bookings" className="cd-widget-link">Toutes <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="cd-widget-body--flush">
        {SESSIONS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-calendar-x" /></div>
            <div className="cd-empty-title">Aucune séance prévue</div>
            <div className="cd-empty-text">Vos prochaines séances apparaîtront ici.</div>
          </div>
        ) : (
          SESSIONS.map((s) => <CoachSessionCard key={s.id} session={s} />)
        )}
      </div>
    </div>
  );
}

const AVAILABILITY = [
  { day: "Lundi", time: "08:00 – 12:00 / 14:00 – 18:00", active: true },
  { day: "Mardi", time: "08:00 – 12:00 / 14:00 – 18:00", active: true },
  { day: "Mercredi", time: "10:00 – 14:00", active: true },
  { day: "Jeudi", time: "08:00 – 12:00 / 14:00 – 18:00", active: true },
  { day: "Vendredi", time: "08:00 – 12:00", active: true },
  { day: "Samedi", time: "09:00 – 13:00", active: true },
  { day: "Dimanche", time: "—", active: false },
];

export default function AvailabilityWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-clock-history" /> Disponibilités
        </div>
        <a href="/coach/availability" className="cd-widget-link">Modifier</a>
      </div>
      <div className="cd-widget-body--flush">
        {AVAILABILITY.map((a) => (
          <div key={a.day} className="cd-avail-row">
            <span className="cd-avail-day">{a.day}</span>
            <span className="cd-avail-time">{a.time}</span>
            <span className={`cd-avail-dot ${a.active ? "cd-avail-dot--on" : "cd-avail-dot--off"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

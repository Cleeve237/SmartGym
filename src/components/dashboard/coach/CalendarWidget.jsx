import { useMemo } from "react";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const SESSION_DAYS = [1, 3, 4, 6];

function buildDays(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startDay = (first.getDay() + 6) % 7;
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  return days;
}

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

export default function CalendarWidget() {
  const today = new Date();
  const days = useMemo(() => buildDays(today.getFullYear(), today.getMonth()), []);

  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-calendar3" /> Calendrier
        </div>
        <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>
          {MONTHS[today.getMonth()]} {today.getFullYear()}
        </span>
      </div>
      <div className="cd-widget-body">
        <div className="cd-calendar-grid">
          {DAYS.map((d) => (
            <div key={d} className="cd-calendar-head">{d}</div>
          ))}
          {days.map((d, i) => {
            if (!d) return <div key={`e${i}`} className="cd-calendar-day cd-calendar-day--empty" />;
            const isToday = d === today.getDate();
            const hasSession = SESSION_DAYS.includes(d);
            return (
              <div
                key={d}
                className={[
                  "cd-calendar-day",
                  isToday ? "cd-calendar-day--today" : "",
                  hasSession ? "cd-calendar-day--session" : "",
                ].filter(Boolean).join(" ")}
              >
                {d}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", marginRight: 4 }} /> Aujourd&apos;hui</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--color-success)", marginRight: 4 }} /> Avec séance</span>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function buildDays(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startDay = (first.getDay() + 6) % 7;
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  return days;
}

export default function DateSelector({ selectedDate, onSelect }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const days = useMemo(() => buildDays(viewYear, viewMonth), [viewYear, viewMonth]);

  const isSelected = (d) => {
    if (!d || !selectedDate) return false;
    const sel = new Date(selectedDate);
    return sel.getFullYear() === viewYear && sel.getMonth() === viewMonth && sel.getDate() === d;
  };

  const isDisabled = (d) => {
    if (!d) return true;
    const dt = new Date(viewYear, viewMonth, d);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dt < todayStart;
  };

  const isToday = (d) => {
    if (!d) return false;
    return viewYear === today.getFullYear() && viewMonth === today.getMonth() && d === today.getDate();
  };

  const handleNav = (dir) => {
    let m = viewMonth + dir;
    let y = viewYear;
    if (m > 11) { m = 0; y++; }
    if (m < 0) { m = 11; y--; }
    setViewMonth(m);
    setViewYear(y);
  };

  const handleDay = (d) => {
    if (!d || isDisabled(d)) return;
    onSelect(new Date(viewYear, viewMonth, d).toISOString());
  };

  return (
    <div className="bk-calendar">
      <div className="bk-cal-header">
        <div className="bk-cal-month">{MONTHS[viewMonth]} {viewYear}</div>
        <div className="bk-cal-nav">
          <button type="button" onClick={() => handleNav(-1)}><i className="bi bi-chevron-left" /></button>
          <button type="button" onClick={() => handleNav(1)}><i className="bi bi-chevron-right" /></button>
        </div>
      </div>

      <div className="bk-cal-weekdays">
        {WEEKDAYS.map((w) => (
          <div key={w} className="bk-cal-weekday">{w}</div>
        ))}
      </div>

      <div className="bk-cal-days">
        {days.map((d, i) => (
          <div
            key={i}
            className={[
              "bk-cal-day",
              d ? "" : "bk-cal-day--empty",
              isToday(d) ? "bk-cal-day--today" : "",
              isSelected(d) ? "bk-cal-day--selected" : "",
              isDisabled(d) && d ? "bk-cal-day--disabled" : "",
            ].filter(Boolean).join(" ")}
            onClick={() => handleDay(d)}
          >
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

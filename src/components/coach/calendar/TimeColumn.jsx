function TimeColumn({ startHour = 8, endHour = 20 }) {
  const hours = [];
  for (let h = startHour; h <= endHour; h++) {
    hours.push(h);
  }

  return (
    <div className="cd-cal-time-col">
      {hours.map((h) => (
        <div key={h} className="cd-cal-time-slot">
          {h.toString().padStart(2, '0')}:00
        </div>
      ))}
    </div>
  );
}

export default TimeColumn;

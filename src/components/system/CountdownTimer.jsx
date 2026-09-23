import { useState, useEffect } from 'react';

function useCountdown(targetDate) {
  const calcRemaining = () => Math.max(0, Math.floor((new Date(targetDate) - Date.now()) / 1000));
  const [remaining, setRemaining] = useState(calcRemaining);

  useEffect(() => {
    const timer = setInterval(() => setRemaining(calcRemaining), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;

  return { days: d, hours: h, minutes: m, seconds: s, total: remaining };
}

export default function CountdownTimer({ targetDate = '2026-11-15T00:00:00' }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const items = [
    { value: String(days).padStart(2, '0'), label: 'Jours' },
    { value: String(hours).padStart(2, '0'), label: 'Heures' },
    { value: String(minutes).padStart(2, '0'), label: 'Minutes' },
    { value: String(seconds).padStart(2, '0'), label: 'Secondes' },
  ];

  return (
    <div className="sys-countdown" role="timer" aria-label="Compte à rebours">
      {items.map((item, i) => (
        <div key={i} className="sys-countdown-item">
          <span className="sys-countdown-value">{item.value}</span>
          <span className="sys-countdown-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

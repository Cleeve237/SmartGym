const BARS = [
  { label: "L", value: 60 },
  { label: "M", value: 85 },
  { label: "M", value: 45 },
  { label: "J", value: 95 },
  { label: "V", value: 70 },
  { label: "S", value: 100 },
  { label: "D", value: 30 },
];

export default function RevenueChart() {
  const max = Math.max(...BARS.map((b) => b.value));

  return (
    <div>
      <div className="cd-chart">
        {BARS.map((b, i) => (
          <div
            key={i}
            className={`cd-chart-bar ${i === 5 ? "cd-chart-bar--active" : ""}`}
            style={{ height: `${(b.value / max) * 100}%` }}
            title={`${b.label}: ${b.value}%`}
          />
        ))}
      </div>
      <div className="cd-chart-labels">
        {BARS.map((b, i) => (
          <div key={i} className="cd-chart-label">{b.label}</div>
        ))}
      </div>
    </div>
  );
}

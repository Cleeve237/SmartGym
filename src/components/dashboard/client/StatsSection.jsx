import StatCard from './StatCard';

const STATS = [
  {
    icon: 'bi-calendar-check',
    iconColor: 'primary',
    value: '12',
    label: 'Seances reservees',
    trend: '+2',
    trendDirection: 'up',
  },
  {
    icon: 'bi-heart-fill',
    iconColor: 'warning',
    value: '3',
    label: 'Coachs favoris',
    trend: null,
    trendDirection: null,
  },
  {
    icon: 'bi-bullseye',
    iconColor: 'info',
    value: '8/10',
    label: 'Objectifs atteints',
    trend: '+1',
    trendDirection: 'up',
  },
  {
    icon: 'bi-stopwatch',
    iconColor: 'success',
    value: '24h',
    label: "Heures d'entrainement",
    trend: '+4h',
    trendDirection: 'up',
  },
];

function StatsSection() {
  return (
    <div className="dash-stats">
      {STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

export default StatsSection;

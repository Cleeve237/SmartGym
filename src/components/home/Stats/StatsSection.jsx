import './Stats.css';
import StatsCard from './StatsCard';

const statsData = [
  {
    icon: 'bi-person-badge',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    value: '250+',
    label: 'Coachs disponibles',
    description: 'Des professionnels verifies partout au Cameroun.',
  },
  {
    icon: 'bi-geo-alt',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    value: '15+',
    label: 'Villes couvertes',
    description: 'Trouvez un coach pres de votre quartier.',
  },
  {
    icon: 'bi-calendar-check',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    value: '5000+',
    label: 'Seances realisees',
    description: 'Une communaute sportive en pleine croissance.',
  },
  {
    icon: 'bi-star-fill',
    iconBg: 'var(--color-warning-light)',
    iconColor: 'var(--color-warning)',
    value: '98%',
    label: 'Clients satisfaits',
    description: 'Une experience appreciee par nos utilisateurs.',
  },
];

function StatsSection() {
  return (
    <section className="stats-section" aria-label="Statistiques SmartGym">
      <div className="container">
        <div className="row g-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="col-12 col-sm-6 col-lg-3">
              <StatsCard
                icon={stat.icon}
                iconBg={stat.iconBg}
                iconColor={stat.iconColor}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

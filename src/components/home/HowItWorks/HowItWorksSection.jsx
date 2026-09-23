import './HowItWorks.css';
import StepCard from './StepCard';

const stepsData = [
  {
    number: '01',
    icon: 'bi-search',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    title: 'Trouvez votre coach',
    description:
      'Recherchez un coach sportif proche de chez vous selon votre ville, votre discipline et vos objectifs.',
  },
  {
    number: '02',
    icon: 'bi-calendar-event',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    title: 'Choisissez votre seance',
    description:
      'Consultez les programmes proposes, les disponibilites et les tarifs du coach.',
  },
  {
    number: '03',
    icon: 'bi-lightning-charge',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    title: 'Reservez et entrainez-vous',
    description:
      'Reservez votre seance et profitez d\'un accompagnement personnalise.',
  },
];

function HowItWorksSection() {
  return (
    <section className="hiw-section" aria-label="Comment ca marche">
      <div className="container">

        {/* En-tete */}
        <div className="hiw-header">
          <div className="hiw-badge">
            <i className="bi bi-lightning-charge-fill" />
            Simple et rapide
          </div>
          <h2 className="hiw-title">
            Votre seance sportive en 3 etapes simples
          </h2>
          <p className="hiw-subtitle">
            SmartGym vous accompagne pour trouver facilement le coach adapte
            a vos objectifs.
          </p>
        </div>

        {/* Etapes */}
        <div className="hiw-steps">
          <div className="hiw-connector" />
          <div className="row g-4">
            {stepsData.map((step) => (
              <div key={step.number} className="col-12 col-md-4">
                <StepCard
                  number={step.number}
                  icon={step.icon}
                  iconBg={step.iconBg}
                  iconColor={step.iconColor}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;

import './Disciplines.css';
import DisciplineCard from './DisciplineCard';

const disciplinesData = [
  {
    id: 1,
    name: 'Musculation',
    description: 'Developpez votre force et construisez votre masse musculaire.',
    icon: 'bi-barbell',
    color: '#16A34A',
  },
  {
    id: 2,
    name: 'Fitness',
    description: 'Ameliorez votre endurance et votre condition physique.',
    icon: 'bi-heart-pulse',
    color: '#EF4444',
  },
  {
    id: 3,
    name: 'Yoga',
    description: 'Travaillez votre souplesse et votre equilibre.',
    icon: 'bi-person-arms-up',
    color: '#8B5CF6',
  },
  {
    id: 4,
    name: 'CrossFit',
    description: 'Des entrainements intenses pour depasser vos limites.',
    icon: 'bi-fire',
    color: '#F97316',
  },
  {
    id: 5,
    name: 'Boxe',
    description: 'Developpez votre technique et votre confiance.',
    icon: 'bi-shield-check',
    color: '#DC2626',
  },
  {
    id: 6,
    name: 'Cardio',
    description: 'Renforcez votre energie et votre resistance.',
    icon: 'bi-activity',
    color: '#EC4899',
  },
  {
    id: 7,
    name: 'Pilates',
    description: 'Ameliorez votre posture et votre controle du corps.',
    icon: 'bi-person-standing',
    color: '#06B6D4',
  },
  {
    id: 8,
    name: 'Perte de poids',
    description: 'Atteignez vos objectifs grace a un programme personnalise.',
    icon: 'bi-graph-down',
    color: '#D946EF',
  },
];

function DisciplinesSection() {
  return (
    <section className="disciplines-section" aria-label="Disciplines sportives">
      <div className="container">

        {/* En-tete */}
        <div className="disciplines-header">
          <div className="disciplines-badge">
            <i className="bi bi-grid-3x3-gap-fill" />
            Diversifie
          </div>
          <h2 className="disciplines-title">
            Explorez nos disciplines sportives
          </h2>
          <p className="disciplines-subtitle">
            Quel que soit votre objectif, trouvez un programme adapte avec
            un coach specialise.
          </p>
        </div>

        {/* Grille */}
        <div className="row g-4">
          {disciplinesData.map((discipline) => (
            <div key={discipline.id} className="col-6 col-md-4 col-lg-3">
              <DisciplineCard
                name={discipline.name}
                description={discipline.description}
                icon={discipline.icon}
                color={discipline.color}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DisciplinesSection;

import ProgramCardPreview from './ProgramCardPreview';

const programsData = [
  {
    id: 1,
    name: 'Musculation Fondamentale',
    coach: 'Coach Jean Mbarga',
    duration: '8 semaines',
    level: 'D\u00e9butant',
    sessions: '3x / semaine',
    price: '15 000',
    rating: 4.8,
    icon: 'bi-trophy',
    gradient: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
  },
  {
    id: 2,
    name: 'Perte de Poids Express',
    coach: 'Coach Sarah Nkou',
    duration: '6 semaines',
    level: 'Interm\u00e9diaire',
    sessions: '4x / semaine',
    price: '12 000',
    rating: 4.9,
    icon: 'bi-heart-pulse',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
  },
  {
    id: 3,
    name: 'Cardio Intensif',
    coach: 'Coach Paul Atangana',
    duration: '4 semaines',
    level: 'Avanc\u00e9',
    sessions: '5x / semaine',
    price: '18 000',
    rating: 4.7,
    icon: 'bi-lightning-charge',
    gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
  },
  {
    id: 4,
    name: 'Yoga & Flexibilit\u00e9',
    coach: 'Coach Amina Belo',
    duration: '10 semaines',
    level: 'Tous niveaux',
    sessions: '3x / semaine',
    price: '10 000',
    rating: 4.9,
    icon: 'bi-circle',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  },
  {
    id: 5,
    name: 'CrossFit Challenge',
    coach: 'Coach Franck Fotso',
    duration: '8 semaines',
    level: 'Avanc\u00e9',
    sessions: '4x / semaine',
    price: '20 000',
    rating: 4.6,
    icon: 'bi-fire',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
  },
  {
    id: 6,
    name: 'Nutrition & Bien-\u00eatre',
    coach: 'Coach Clarisse Noubissi',
    duration: '12 semaines',
    level: 'D\u00e9butant',
    sessions: '2x / semaine',
    price: '8 000',
    rating: 4.8,
    icon: 'bi-egg-fried',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
  },
];

function PopularPrograms() {
  return (
    <section className="pl-popular" aria-label="Programmes populaires">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-fire" />
            Populaires
          </div>
          <h2 className="pl-section-title">
            Nos programmes les plus suivis
          </h2>
          <p className="pl-section-subtitle">
            D&eacute;couvrez les programmes pl\u00e9biscit\u00e9s par notre communaut\u00e9 et lancez-vous.
          </p>
        </div>

        <div className="row g-4">
          {programsData.map((program) => (
            <div key={program.id} className="col-12 col-md-6 col-lg-4">
              <ProgramCardPreview program={program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularPrograms;

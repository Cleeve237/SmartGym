import { useParams, Link } from 'react-router-dom';
import '../../components/program-details/ProgramDetails.css';
import ProgramHero from '../../components/program-details/ProgramHero';
import ProgramStats from '../../components/program-details/ProgramStats';
import ProgramDescription from '../../components/program-details/ProgramDescription';
import ProgramObjectives from '../../components/program-details/ProgramObjectives';
import ProgramBenefits from '../../components/program-details/ProgramBenefits';
import ProgramRequirements from '../../components/program-details/ProgramRequirements';
import ProgramSchedule from '../../components/program-details/ProgramSchedule';
import CoachSummary from '../../components/program-details/CoachSummary';
import RatingDistribution from '../../components/program-details/RatingDistribution';
import ProgramReviews from '../../components/program-details/ProgramReviews';
import RelatedPrograms from '../../components/program-details/RelatedPrograms';
import ProgramTags from '../../components/program-details/ProgramTags';
import ProgramFAQ from '../../components/program-details/ProgramFAQ';
import ProgramCTA from '../../components/program-details/ProgramCTA';
import ProgramStickyCard from '../../components/program-details/ProgramStickyCard';
import { programs } from '../../components/programs/catalog/mockPrograms';
import { MOCK_REVIEWS, MOCK_FAQ } from '../../components/program-details/mockDetails';

const ALL_PROGRAMS = [
  {
    id: '1', title: 'Musculation Fondamentale',
    description: 'Programme complet pour développer force et masse musculaire. Idéal pour les débutants souhaitant acquérir de solides bases. Ce programme couvre les exercices fondamentaux de la musculation, avec une progression méthodique sur 8 semaines. Vous apprendrez les techniques correctes, la gestion de la charge et les principes de l\'entraînement en force. Chaque séance est conçue pour optimiser vos résultats tout en minimisant les risques de blessure.',
    category: 'Musculation', difficulty: 'Débutant', weeks: 8, sessionsPerWeek: 3, sessionDuration: 60,
    price: 35000, oldPrice: 45000, coach: 'Jean-Pierre Mbarga', coachId: 'c1', city: 'Douala',
    rating: 4.8, reviews: 64, enrolled: 210, type: 'En présentiel', color: '#16A34A',
    objectives: ['Développer la force musculaire', 'Apprendre les mouvements fondamentaux', 'Construire une base solide', 'Améliorer la composition corporelle'],
    requirements: ['Avoir au moins 16 ans', 'Certificat médical requis', 'Aucune expérience requise', 'Motivation et régularité'],
    benefits: ['Suivi personnalisé coach', 'Plan nutritionnel inclus', 'Accès communauté SmartGym', 'Programme adapté à votre rythme', 'Certificat de réussite'],
    tags: ['Fitness', 'Musculation', 'Force', 'Débutant', 'Prise de masse'],
  },
  {
    id: '2', title: 'Cardio Intensif & HIIT',
    description: 'Programme haute intensité pour brûler les graisses et améliorer votre endurance cardiovasculaire. Combinaison de course à pied, burpees, jumping jacks et exercices de plyométrie. Chaque séance est conçue pour maximiser la dépense calorique en un minimum de temps, avec des intervalles de haute intensité qui stimulent votre métabolisme pendant des heures après l\'entraînement.',
    category: 'Cardio', difficulty: 'Intermédiaire', weeks: 6, sessionsPerWeek: 4, sessionDuration: 45,
    price: 28000, coach: 'Carine Atangana', coachId: 'c2', city: 'Yaoundé',
    rating: 4.6, reviews: 42, enrolled: 175, type: 'Mixte', color: '#F97316',
    objectives: ['Améliorer l\'endurance cardiovasculaire', 'Brûler les graisses efficacement', 'Augmenter la capacité pulmonaire', 'Maintenir la masse musculaire'],
    requirements: ['Condition physique de base', 'Avoir pratiqué du sport', 'Bonne santé cardiovasculaire'],
    benefits: ['Perte de poids accélérée', 'Amélioration de l\'endurance', 'Techniques de respiration', 'Suivi hebdomadaire'],
    tags: ['Cardio', 'HIIT', 'Perte de poids', 'Endurance'],
  },
  {
    id: '3', title: 'Yoga & Bien-être',
    description: 'Programme holistique combinant yoga, méditation et techniques de respiration pour un équilibre corps-esprit. Parfait pour réduire le stress et améliorer la souplesse.',
    category: 'Yoga', difficulty: 'Débutant', weeks: 10, sessionsPerWeek: 3, sessionDuration: 75,
    price: 40000, coach: 'Lydie Essomba', coachId: 'c3', city: 'Douala',
    rating: 4.9, reviews: 88, enrolled: 320, type: 'En présentiel', color: '#8B5CF6',
    objectives: ['Améliorer la souplesse', 'Réduire le stress', 'Développer la conscience corporelle', 'Trouver un équilibre mental'],
    requirements: ['Aucune expérience requise', 'Tapis de yoga recommandé', 'Tenue confortable'],
    benefits: ['Réduction du stress', 'Meilleur sommeil', 'Souplesse accrue', 'Communauté bienveillante', 'Vidéos exclusives'],
    tags: ['Yoga', 'Bien-être', 'Méditation', 'Souplesse', 'Relaxation'],
  },
  {
    id: '4', title: 'CrossFit Performance',
    description: 'Programme d\'entraînement fonctionnel pour développer force, vitesse, agilité et endurance. Prépare aux compétitions CrossFit.',
    category: 'CrossFit', difficulty: 'Avancé', weeks: 12, sessionsPerWeek: 5, sessionDuration: 90,
    price: 55000, oldPrice: 65000, coach: 'Samuel Tchinda', coachId: 'c4', city: 'Yaoundé',
    rating: 4.7, reviews: 35, enrolled: 95, type: 'En présentiel', color: '#DC2626',
    objectives: ['Développer la puissance globale', 'Améliorer les performances', 'Composer une silhouette athlétique', 'Préparation compétition'],
    requirements: ['Expérience en sport requise', 'Bonne condition physique', 'Aptitude médicale validée', 'Motivation extrême'],
    benefits: ['Transformation complète', 'Communauté compétitive', 'Préparation compétition', 'Coach certifié Level 2', 'Analyse de performance'],
    tags: ['CrossFit', 'Fonctionnel', 'Avancé', 'Compétition', 'Explosif'],
  },
];

function ProgramDetailsPage() {
  const { programId } = useParams();

  const program = programs.find((p) => String(p.id) === programId) ||
                  ALL_PROGRAMS.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="container py-5 text-center">
        <div className="pc-empty">
          <div className="pc-empty-icon"><i className="bi bi-exclamation-triangle" /></div>
          <h3>Programme non trouvé</h3>
          <p>Le programme que vous recherchez n&apos;existe pas ou a été supprimé.</p>
          <Link to="/programs/catalog" className="pc-card-btn pc-card-btn--primary">
            <i className="bi bi-arrow-left" /> Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  const objectives = program.objectives || [
    'Atteindre vos objectifs fitness', 'Progresser à votre rythme',
    'Développer de nouvelles compétences', 'Transformer votre corps',
  ];

  const requirements = program.requirements || [
    'Aucun pré-requis spécifique', 'Motivation et régularité', 'Tenue sportive adaptée',
  ];

  const benefits = program.benefits || [
    'Programme personnalisé', 'Suivi du coach', 'Nutrition incluse', 'Évaluation continue', 'Motivation garantie',
  ];

  const tags = program.tags || [program.category, program.difficulty, program.type, 'Fitness'];

  const relatedPrograms = programs
    .filter((p) => String(p.id) !== programId && p.category === program.category)
    .slice(0, 4);

  return (
    <div className="pd-page">
      <ProgramHero program={program} tags={tags} />

      <div className="container">
        <div className="pd-layout">
          <main className="pd-main">
            <div className="pd-card">
              <ProgramStats program={program} />
            </div>

            <ProgramDescription description={program.description} />
            <ProgramObjectives objectives={objectives} />
            <ProgramBenefits benefits={benefits} />
            <ProgramRequirements requirements={requirements} />
            <ProgramSchedule weeks={program.weeks} />

            <div className="pd-card">
              <div className="pd-card-header"><i className="bi bi-tags" /><h2>Tags</h2></div>
              <ProgramTags tags={tags} />
            </div>

            <CoachSummary program={program} />
            <RatingDistribution reviews={MOCK_REVIEWS} />
            <ProgramReviews reviews={MOCK_REVIEWS.slice(0, 5)} />
            <RelatedPrograms programs={relatedPrograms} />
            <ProgramFAQ faq={MOCK_FAQ} />
          </main>

          <ProgramStickyCard program={program} />
        </div>

        <ProgramCTA />
      </div>
    </div>
  );
}

export default ProgramDetailsPage;

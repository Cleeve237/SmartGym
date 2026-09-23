import { useParams, Link } from 'react-router-dom';
import '../../components/programs/Programs.css';
import ProgramDetailsHeader from '../../components/programs/ProgramDetailsHeader';
import ProgramOverview from '../../components/programs/ProgramOverview';
import ProgramObjectives from '../../components/programs/ProgramObjectives';
import ProgramContent from '../../components/programs/ProgramContent';
import ProgramSchedule from '../../components/programs/ProgramSchedule';
import ProgramRequirements from '../../components/programs/ProgramRequirements';
import ProgramBenefits from '../../components/programs/ProgramBenefits';
import ProgramCoachCard from '../../components/programs/ProgramCoachCard';
import ProgramPricingCard from '../../components/programs/ProgramPricingCard';
import ProgramReviews from '../../components/programs/ProgramReviews';
import RelatedPrograms from '../../components/programs/RelatedPrograms';

const ALL_PROGRAMS = [
  {
    id: '1',
    title: 'Musculation Fondamentale',
    description: 'Programme complet pour developing la force et la masse musculaire. Ideal pour les debutants souhaitant acquerir de solides bases. Ce programme couvre les exercices fondamentaux de la musculation, avec une progression methodique sur 8 semaines. Vous apprendrez les techniques correctes, la gestion de la charge et les principes de l\'entrainement en force.',
    category: 'Musculation',
    difficulty: 'debutant',
    weeks: 8,
    sessionsPerWeek: 3,
    sessionDuration: 60,
    type: 'En presentiel',
    price: 35000,
    coachId: 'c1',
    coachName: 'Jean-Pierre Mbarga',
    coachCity: 'Douala',
    coachRating: 4.9,
    coachReviewCount: 128,
    rating: 4.8,
    reviewCount: 64,
    enrolledCount: 210,
    objectives: [
      'Developper la force musculaire globale',
      'Apprendre les mouvements fondamentaux',
      'Construire une base solide en musculation',
      'Ameliorer la composition corporelle'
    ],
    content: [
      { title: 'Semaines 1-2 : Initiation', description: 'Technique des exercices de base, adaptation progressive. Squat, Developpe couché, Soulevé de terre.' },
      { title: 'Semaines 3-4 : Consolidation', description: 'Augmentation des charges, perfectionnement de la forme. Introduction aux super-series.' },
      { title: 'Semaines 5-6 : Progression', description: 'Intensification de l\'entrainement, nouvelles variantes. Programme split.' },
      { title: 'Semaines 7-8 : Depassement', description: 'Objectifs de force maximale, test final. Semaine de deload puis test.' }
    ],
    requirements: [
      'Avoir au moins 16 ans',
      'Certificat medical requis',
      'Aucune experience en musculation necessaire',
      'Motivation et regularite'
    ],
    benefits: [
      'Suivi personnalisé par un coach certifie',
      'Plan nutritionnel inclus',
      'Acces a la communaute SmartGym',
      'Programme adapte a votre rythme',
      'Certificat de reussite a la fin'
    ],
    reviews: [
      { author: 'Marie Ngo', rating: 5, date: '15 Mars 2026', text: 'Programme tres bien structure. Jean-Pierre est un excellent coach, tres pedagogue. J\'ai vu des resultats des la 3e semaine.' },
      { author: 'Paul Nkomo', rating: 4, date: '28 Fevrier 2026', text: 'Bon programme pour debuter. Les explications sont claires et le coach est toujours disponible pour repondre aux questions.' },
      { author: 'Sandrine Fotsing', rating: 5, date: '10 Janvier 2026', text: 'Je recommande vivement. J\'ai gagne 4kg de masse musculaire en 8 semaines. Le plan nutritionnel est un vrai plus.' }
    ],
    relatedIds: ['2', '5']
  },
  {
    id: '2',
    title: 'Cardio Intensif & HIIT',
    description: 'Programme haute intensite pour bruler les graisses et ameliorer votre endurance cardiovasculaire. Combinaison de course, burpees, jumping jacks et exercises de plyometrie.',
    category: 'Cardio',
    difficulty: 'intermediaire',
    weeks: 6,
    sessionsPerWeek: 4,
    sessionDuration: 45,
    type: 'Mixte',
    price: 28000,
    coachId: 'c2',
    coachName: 'Carine Atangana',
    coachCity: 'Yaounde',
    coachRating: 4.7,
    coachReviewCount: 89,
    rating: 4.6,
    reviewCount: 42,
    enrolledCount: 175,
    objectives: [
      'Ameliorer l\'endurance cardiovasculaire',
      'Bruler les graisses efficacement',
      'Augmenter la capacite pulmonaire',
      'Maintenir la masse musculaire existante'
    ],
    content: [
      { title: 'Semaines 1-2 : Preparation', description: 'Tests d\'aptitude, mise en route progressive. Estimation VO2max.' },
      { title: 'Semaines 3-4 : Intensification', description: 'Circuit training et intervalles. Seances de 45 min.' },
      { title: 'Semaines 5-6 : Phase finale', description: 'HIIT avance, depassement de soi. Tests de performance.' }
    ],
    requirements: [
      'Condition physique de base',
      'Avoir pratique du sport auparavant',
      'Bonne sante cardiovasculaire'
    ],
    benefits: [
      'Perte de poids acceleree',
      'Amelioration de l\'endurance',
      'Techniques de respiration',
      'Suivi hebdomadaire'
    ],
    reviews: [
      { author: 'David Kamga', rating: 5, date: '1 Avril 2026', text: 'Programme tres intense mais tres efficace. J\'ai perdu 6kg en 6 semaines.' },
      { author: 'Aimée Tchidjui', rating: 4, date: '20 Mars 2026', text: 'Excellente coach, tres motivee. Les seances sont variees et jamais ennuyeuses.' }
    ],
    relatedIds: ['4', '6']
  },
  {
    id: '3',
    title: 'Yoga & Bien-etre',
    description: 'Programme holistique combinant yoga, meditation et techniques de respiration pour un equilibre corps-esprit. Parfait pour reduire le stress et ameliorer la souplesse.',
    category: 'Yoga',
    difficulty: 'debutant',
    weeks: 10,
    sessionsPerWeek: 3,
    sessionDuration: 75,
    type: 'En presentiel',
    price: 40000,
    coachId: 'c3',
    coachName: 'Lydie Essomba',
    coachCity: 'Douala',
    coachRating: 4.9,
    coachReviewCount: 156,
    rating: 4.9,
    reviewCount: 88,
    enrolledCount: 320,
    featured: true,
    objectives: [
      'Ameliorer la souplesse et la mobilite',
      'Reduire le stress et l\'anxiete',
      'Developper la conscience corporelle',
      'Trouver un equilibre mental'
    ],
    content: [
      { title: 'Semaines 1-3 : Fondamentaux', description: 'Postures de base, respiration (pranayama), meditation guided.' },
      { title: 'Semaines 4-6 : Approfondissement', description: 'Asanas intermediaires, series dynamiques, Vinyasa.' },
      { title: 'Semaines 7-9 : Maitrise', description: 'Postures avancees, flux complet, yoga Nidra.' },
      { title: 'Semaine 10 : Integration', description: 'Pratique personnelle, routines a domicile, certifications.' }
    ],
    requirements: [
      'Aucune experience requise',
      'Tapis de yoga recommande',
      'Tenue confortable'
    ],
    benefits: [
      'Reduction du stress visible',
      'Meilleur sommeil',
      'Souplesse accrue',
      'Communaute bienveillante',
      'Acces a des videos exclusives'
    ],
    reviews: [
      { author: 'Helene Mbida', rating: 5, date: '10 Avril 2026', text: 'Lydie est une merveille. Ses cours sont apaisants et tres bien guides. Je recommande a 100%.' },
      { author: 'Thierry Bella', rating: 5, date: '5 Mars 2026', text: 'J\'avais des douleurs chroniques au dos. Apres 8 semaines, c\'est beaucoup mieux. Merci Lydie !' }
    ],
    relatedIds: ['6', '1']
  },
  {
    id: '4',
    title: 'CrossFit Performance',
    description: 'Programme d\'entrainement fonctionnel pour developper force, vitesse, agilite et endurance. Prepare aux competitions CrossFit.',
    category: 'CrossFit',
    difficulty: 'avance',
    weeks: 12,
    sessionsPerWeek: 5,
    sessionDuration: 90,
    type: 'En presentiel',
    price: 55000,
    coachId: 'c4',
    coachName: 'Samuel Tchinda',
    coachCity: 'Yaounde',
    coachRating: 4.8,
    coachReviewCount: 72,
    rating: 4.7,
    reviewCount: 35,
    enrolledCount: 95,
    objectives: [
      'Developper la puissance globale',
      'Ameliorer les performances sportives',
      'Composer une silhouette athletique',
      'Se preparer aux competitions'
    ],
    content: [
      { title: 'Semaines 1-3 : Base', description: 'Mouvements olympiques (snatch, clean & jerk), technique pure.' },
      { title: 'Semaines 4-6 : Construction', description: 'WODs progressifs, mise en charge, endurance musculaire.' },
      { title: 'Semaines 7-9 : Intensite', description: 'Competitions simulees, PRs, mental training.' },
      { title: 'Semaines 10-12 : Peak', description: 'Performance maximale, test final, deload strategique.' }
    ],
    requirements: [
      'Experience en sport requis',
      'Bonne condition physique',
      'Aptitude medicale validee',
      'Motivation extreme'
    ],
    benefits: [
      'Transformation corporelle complete',
      'Communaute competitive',
      'Preparation competition',
      'Coach certifie Level 2',
      'Analyse de performance'
    ],
    reviews: [
      { author: 'Olivier Ngoumou', rating: 5, date: '14 Fevrier 2026', text: 'Le meilleur programme que j\'ai suivi. Samuel connait son metier. J\'ai battu tous mes records.' }
    ],
    relatedIds: ['1', '2']
  },
  {
    id: '5',
    title: 'Boxe & Self-Defense',
    description: 'Apprenez les bases de la boxe anglaise tout en developpant vos capacites de self-defense. Programme complet technique + physique.',
    category: 'Boxe',
    difficulty: 'debutant',
    weeks: 8,
    sessionsPerWeek: 3,
    sessionDuration: 60,
    type: 'En presentiel',
    price: 30000,
    coachId: 'c5',
    coachName: 'Patrick Elokobi',
    coachCity: 'Douala',
    coachRating: 4.6,
    coachReviewCount: 45,
    rating: 4.5,
    reviewCount: 28,
    enrolledCount: 130,
    objectives: [
      'Apprendre les bases de la boxe',
      'Developper reflexes et coordination',
      'Acquerir confiance en soi',
      'Techniques de self-defense'
    ],
    content: [
      { title: 'Semaines 1-2 : Stance & Guard', description: 'Position de garde, deplacement, garde defensive.' },
      { title: 'Semaines 3-4 : Coups de poing', description: 'Direct, crochet, uppercut, combinaisons.' },
      { title: 'Semaines 5-6 : Defense', description: 'Esquive, parade, contres, contre-attaque.' },
      { title: 'Semaines 7-8 : Combat', description: 'Sparring controle, self-defense appliquee.' }
    ],
    requirements: [
      'Gants de boxe requis',
      'Bande de mains recommandees',
      'Tenue sportive'
    ],
    benefits: [
      'Confiance en soi accrue',
      'Condition physique excellente',
      'Techniques de vie',
      'Sport et divertissement'
    ],
    reviews: [
      { author: 'Franck Messi', rating: 4, date: '28 Mars 2026', text: 'Tres bon cours, Patrick est tres patient. Le sport est addictif !' }
    ],
    relatedIds: ['4', '2']
  },
  {
    id: '6',
    title: 'Danse & Cardio',
    description: 'Programme de danse fitness pour bruler des calories en s\'amusant avec des choregraphies variees. Afrobeat, zouk, hip-hop.',
    category: 'Danse',
    difficulty: 'debutant',
    weeks: 6,
    sessionsPerWeek: 3,
    sessionDuration: 50,
    type: 'En presentiel',
    price: 22000,
    coachId: 'c6',
    coachName: 'Sarah Ndjock',
    coachCity: 'Yaounde',
    coachRating: 4.8,
    coachReviewCount: 98,
    rating: 4.7,
    reviewCount: 52,
    enrolledCount: 245,
    objectives: [
      'Bruler des calories en s\'amusant',
      'Ameliorer le cardio',
      'S\'exprimer a travers la danse',
      'Renforcer la confiance'
    ],
    content: [
      { title: 'Semaines 1-2 : Bases', description: 'Pas simples, coordination, rythme.' },
      { title: 'Semaines 3-4 : Varietes', description: 'Afrobeat, zouk, hip-hop, makossa.' },
      { title: 'Semaines 5-6 : Choregraphies', description: 'Sequences completes, performance finale.' }
    ],
    requirements: [
      'Chaussures de sport',
      'Tenue confortable',
      'Envie de bouger'
    ],
    benefits: [
      'Ambiance garantie',
      'Perte de poids ludique',
      'Nouvelles competences',
      'Communaute joyeuse'
    ],
    reviews: [
      { author: 'Cynthia Bella', rating: 5, date: '5 Avril 2026', text: 'Le meilleur cours de danse de Douala ! Sarah est incroyable, on s\'amuse tout en brulant des calories.' }
    ],
    relatedIds: ['3', '2']
  }
];

function ProgramDetailsPage() {
  const { programId } = useParams();

  const program = ALL_PROGRAMS.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="container py-5 text-center">
        <div className="pg-empty">
          <div className="pg-empty-icon">
            <i className="bi bi-exclamation-triangle" />
          </div>
          <h3 className="pg-empty-title">Programme non trouve</h3>
          <p className="pg-empty-text">
            Le programme que vous recherchez n&apos;existe pas ou a ete supprime.
          </p>
          <Link to="/programs" className="btn btn-primary">
            <i className="bi bi-arrow-left me-2" />
            Retour aux programmes
          </Link>
        </div>
      </div>
    );
  }

  const relatedPrograms = (program.relatedIds || [])
    .map((id) => ALL_PROGRAMS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div>
      <ProgramDetailsHeader program={program} />

      <div className="container">
        <nav className="py-3" aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ fontSize: 'var(--font-size-sm)' }}>
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">Accueil</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/programs" className="text-decoration-none">Programmes</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {program.title}
            </li>
          </ol>
        </nav>

        <div className="pg-detail-body">
          <div>
            <ProgramOverview program={program} />
            <ProgramObjectives objectives={program.objectives} />
            <ProgramContent weeks={program.content} />
            <ProgramSchedule program={program} />
            <ProgramRequirements requirements={program.requirements} />
            <ProgramBenefits benefits={program.benefits} />
            <ProgramReviews reviews={program.reviews} />
          </div>

          <div className="pg-detail-sidebar">
            <ProgramPricingCard program={program} />

            <div className="mt-3">
              <ProgramCoachCard program={program} />
            </div>
          </div>
        </div>

        <RelatedPrograms programs={relatedPrograms} />

        <div className="py-4">
          <Link to="/programs" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left me-2" />
            Retour a tous les programmes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetailsPage;

import { useState, useMemo } from 'react';
import '../../components/programs/Programs.css';
import ProgramsHero from '../../components/programs/ProgramsHero';
import ProgramSearchBar from '../../components/programs/ProgramSearchBar';
import ProgramFilters from '../../components/programs/ProgramFilters';
import ProgramsGrid from '../../components/programs/ProgramsGrid';
import FeaturedProgramCard from '../../components/programs/FeaturedProgramCard';
import ProgramCTA from '../../components/programs/ProgramCTA';
import EmptyPrograms from '../../components/programs/EmptyPrograms';

const ALL_PROGRAMS = [
  {
    id: '1',
    title: 'Musculation Fondamentale',
    description: 'Programme complet pour developing la force et la masse musculaire. Ideal pour les debutants souhaitant acquerir de solides bases.',
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
    featured: true,
    objectives: [
      'Developper la force musculaire globale',
      'Apprendre les mouvements fondamentaux',
      'Construire une base solide en musculation',
      'Ameliorer la composition corporelle'
    ],
    content: [
      { title: 'Semaines 1-2 : Initiation', description: 'Technique des exercices de base, adaptation progressive' },
      { title: 'Semaines 3-4 : Consolidation', description: 'Augmentation des charges, perfectionnement de la forme' },
      { title: 'Semaines 5-6 : Progression', description: 'Intensification de l\'entrainement, nouvelles variantes' },
      { title: 'Semaines 7-8 : Depassement', description: 'Objectifs de force maximale, test final' }
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
      { author: 'Marie Ngo', rating: 5, date: '2026-03-15', text: 'Programme tres bien structure. Jean-Pierre est un excellent coach, tres pedagogue. J\'ai vu des resultats des la 3e semaine.' },
      { author: 'Paul Nkomo', rating: 4, date: '2026-02-28', text: 'Bon programme pour debuter. Les explications sont claires et le coach est toujours disponible pour repondre aux questions.' },
      { author: 'Sandrine Fotsing', rating: 5, date: '2026-01-10', text: 'Je recommande vivement. J\'ai gagne 4kg de masse musculaire en 8 semaines. Le plan nutritionnel est un vrai plus.' }
    ]
  },
  {
    id: '2',
    title: 'Cardio Intensif & HIIT',
    description: 'Programme haute intensite pour bruler les graisses et ameliorer votre endurance cardiovasculaire.',
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
      { title: 'Semaines 1-2 : Preparation', description: 'Tests d\'aptitude, mise en route progressive' },
      { title: 'Semaines 3-4 : Intensification', description: 'Circuit training et intervalles' },
      { title: 'Semaines 5-6 : Phase finale', description: 'HIIT avance, depassement de soi' }
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
      { author: 'David Kamga', rating: 5, date: '2026-04-01', text: ' programme tres intense mais tres efficace. J\'ai perdu 6kg en 6 semaines.' },
      { author: 'Aimée Tchidjui', rating: 4, date: '2026-03-20', text: 'Excellente coach, tres motivee. Les seances sont variees et jamais ennuyeuses.' }
    ]
  },
  {
    id: '3',
    title: 'Yoga & Bien-etre',
    description: 'Programme holistique combinant yoga, meditation et techniques de respiration pour un equilibre corps-esprit.',
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
      { title: 'Semaines 1-3 : Fondamentaux', description: 'Postures de base, respiration, meditation' },
      { title: 'Semaines 4-6 : Approfondissement', description: 'Asanas intermediaires, series dynamiques' },
      { title: 'Semaines 7-9 : Maitrise', description: 'Postures avancees, flux complet' },
      { title: 'Semaine 10 : Integration', description: 'Pratique personnelle, routines a domicile' }
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
      { author: 'Helene Mbida', rating: 5, date: '2026-04-10', text: 'Lydie est une merveille. Ses cours sont apaisants et tres bien guides. Je recommande a 100%.' },
      { author: 'Thierry Bella', rating: 5, date: '2026-03-05', text: 'J\'avais des douleurs chroniques au dos. Apres 8 semaines, c\'est beaucoup mieux. Merci Lydie !' }
    ]
  },
  {
    id: '4',
    title: 'CrossFit Performance',
    description: 'Programme d\'entrainement fonctionnel pour developper force, vitesse, agilite et endurance.',
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
      { title: 'Semaines 1-3 : Base', description: 'Mouvements olympiques, technique pure' },
      { title: 'Semaines 4-6 : Construction', description: 'WODs progressifs, mise en charge' },
      { title: 'Semaines 7-9 : Intensite', description: 'Competitions simulées, PRs' },
      { title: 'Semaines 10-12 : Peak', description: 'Performance maximale, test final' }
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
      { author: 'Olivier Ngoumou', rating: 5, date: '2026-02-14', text: 'Le meilleur programme que j\'ai suivi. Samuel connait son metier. J\'ai battu tous mes records.' }
    ]
  },
  {
    id: '5',
    title: 'Boxe & Self-Defense',
    description: 'Apprenez les bases de la boxe anglaise tout en developpant vos capacites de self-defense.',
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
      { title: 'Semaines 1-2 : Stance & Guard', description: 'Position de garde, deplacement, garde' },
      { title: 'Semaines 3-4 : Coups de poing', description: 'Direct, crochet, uppercut' },
      { title: 'Semaines 5-6 : Defense', description: 'Esquive, parade, contres' },
      { title: 'Semaines 7-8 : Combat', description: 'Sparring controle, self-defense' }
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
      { author: 'Franck Messi', rating: 4, date: '2026-03-28', text: 'Tres bon cours, Patrick est tres patient. Le sport est addictif !' }
    ]
  },
  {
    id: '6',
    title: 'Danse & Cardio',
    description: 'Programme de danse fitness pour bruler des calories en s\'amusant avec des choregraphies variées.',
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
      { title: 'Semaines 1-2 : Bases', description: 'Pas simples, coordination' },
      { title: 'Semaines 3-4 : Varietes', description: 'Afrobeat, zouk, hip-hop' },
      { title: 'Semaines 5-6 : Choregraphies', description: 'Sequences completes, performance' }
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
      { author: 'Cynthia Bella', rating: 5, date: '2026-04-05', text: 'Le meilleur cours de danse de Douala ! Sarah est incroyable, on s\'amuse tout en brulant des calories.' }
    ]
  }
];

function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    difficulty: '',
    duration: '',
    maxPrice: 100000
  });
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const featured = ALL_PROGRAMS.filter((p) => p.featured);

  const filtered = useMemo(() => {
    let result = [...ALL_PROGRAMS];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.coachName.toLowerCase().includes(q)
      );
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.difficulty) {
      result = result.filter((p) => p.difficulty === filters.difficulty);
    }

    if (filters.duration) {
      result = result.filter((p) => {
        if (filters.duration === 'short') return p.weeks < 4;
        if (filters.duration === 'medium') return p.weeks >= 4 && p.weeks <= 8;
        return p.weeks > 8;
      });
    }

    result = result.filter((p) => p.price <= filters.maxPrice);

    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => (b.enrolledCount || 0) - (a.enrolledCount || 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.weeks || 0) - (a.weeks || 0));
        break;
      case 'duration':
        result.sort((a, b) => a.weeks - b.weeks);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, filters, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeChips = [];
  if (filters.category) activeChips.push({ key: 'category', label: filters.category, value: filters.category });
  if (filters.difficulty) activeChips.push({ key: 'difficulty', label: filters.difficulty, value: filters.difficulty });
  if (filters.duration) {
    const labels = { short: '< 4 sem.', medium: '4-8 sem.', long: '8+ sem.' };
    activeChips.push({ key: 'duration', label: labels[filters.duration], value: filters.duration });
  }
  if (filters.maxPrice < 100000) {
    activeChips.push({ key: 'maxPrice', label: `Max ${filters.maxPrice.toLocaleString()} FCFA`, value: filters.maxPrice });
  }

  const handleClearChip = (chip) => {
    if (chip.key === 'maxPrice') {
      setFilters((f) => ({ ...f, maxPrice: 100000 }));
    } else {
      setFilters((f) => ({ ...f, [chip.key]: '' }));
    }
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setFilters({ category: '', difficulty: '', duration: '', maxPrice: 100000 });
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div>
      <ProgramsHero />

      <div className="container">
        <div style={{ marginTop: '-1.5rem', position: 'relative', zIndex: 2 }}>
          <ProgramSearchBar onSearch={(q) => { setSearchQuery(q); setCurrentPage(1); }} />
        </div>

        {featured.length > 0 && (
          <div className="mt-4 mb-4">
            {featured.map((p) => (
              <FeaturedProgramCard key={p.id} program={p} />
            ))}
          </div>
        )}

        <div className="pg-layout">
          <aside className="pg-layout-sidebar">
            <ProgramFilters filters={filters} onChange={(f) => { setFilters(f); setCurrentPage(1); }} onClear={handleClearAll} />
          </aside>

          <div>
            <button className="pg-mobile-filter-btn" onClick={() => {}}>
              <i className="bi bi-funnel" />
              Filtres
            </button>

            {activeChips.length > 0 && (
              <div className="pg-chips">
                {activeChips.map((chip) => (
                  <button key={chip.key} className="pg-chip" onClick={() => handleClearChip(chip)}>
                    {chip.label}
                    <span className="pg-chip-close"><i className="bi bi-x" /></span>
                  </button>
                ))}
              </div>
            )}

            <div className="pg-results-header">
              <span className="pg-results-count">
                <strong>{filtered.length}</strong> programme{filtered.length !== 1 ? 's' : ''} trouve{filtered.length !== 1 ? 's' : ''}
              </span>
              <div className="pg-sort">
                <span className="pg-sort-label">Trier par :</span>
                <select className="pg-sort-select" value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
                  <option value="popular">Popularite</option>
                  <option value="rating">Meilleure note</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix decroissant</option>
                  <option value="newest">Plus recents</option>
                  <option value="duration">Duree</option>
                </select>
              </div>
            </div>

            {paginated.length > 0 ? (
              <ProgramsGrid programs={paginated} />
            ) : (
              <EmptyPrograms query={searchQuery} />
            )}

            {totalPages > 1 && (
              <nav className="pg-pagination">
                <button
                  className="pg-pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  <i className="bi bi-chevron-left" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`pg-pagination-btn ${page === currentPage ? 'pg-pagination-btn--active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="pg-pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  <i className="bi bi-chevron-right" />
                </button>
              </nav>
            )}
          </div>
        </div>

        <ProgramCTA />
      </div>
    </div>
  );
}

export default ProgramsPage;

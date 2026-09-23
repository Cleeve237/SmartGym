import { Link } from 'react-router-dom';
import './PopularCoaches.css';
import CoachCard from './CoachCard';

const coachesData = [
  {
    id: 1,
    name: 'Jean Mbarga',
    photo: null,
    speciality: 'Musculation & Conditionnement',
    city: 'Yaounde',
    price: '8 000 FCFA / seance',
    rating: 4.9,
    reviewsCount: 124,
    availability: "Aujourd'hui",
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Nguema',
    photo: null,
    speciality: 'Fitness & Cardio',
    city: 'Douala',
    price: '7 000 FCFA / seance',
    rating: 4.8,
    reviewsCount: 98,
    availability: 'Demain',
    verified: true,
  },
  {
    id: 3,
    name: 'Paul Fotso',
    photo: null,
    speciality: 'CrossFit & HIIT',
    city: 'Bafoussam',
    price: '9 000 FCFA / seance',
    rating: 4.9,
    reviewsCount: 154,
    availability: "Aujourd'hui",
    verified: true,
  },
  {
    id: 4,
    name: 'Claire Bella',
    photo: null,
    speciality: 'Yoga & Pilates',
    city: 'Douala',
    price: '6 500 FCFA / seance',
    rating: 4.7,
    reviewsCount: 82,
    availability: 'Cette semaine',
    verified: true,
  },
  {
    id: 5,
    name: 'Marc Tchinda',
    photo: null,
    speciality: 'Boxe & MMA',
    city: 'Yaounde',
    price: '10 000 FCFA / seance',
    rating: 4.8,
    reviewsCount: 112,
    availability: 'Demain',
    verified: false,
  },
  {
    id: 6,
    name: 'Amina Bello',
    photo: null,
    speciality: 'Perte de poids & Nutrition',
    city: 'Bamenda',
    price: '5 500 FCFA / seance',
    rating: 4.6,
    reviewsCount: 67,
    availability: 'Cette semaine',
    verified: true,
  },
];

function PopularCoachesSection() {
  return (
    <section className="pc-section" aria-label="Coachs populaires">
      <div className="container">

        {/* En-tete */}
        <div className="pc-header">
          <div>
            <div className="pc-badge">
              <i className="bi bi-trophy-fill" />
              Top coachs
            </div>
            <h2 className="pc-header-title">
              Rencontrez nos coachs experts
            </h2>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: 0, marginTop: '0.5rem' }}>
              Des professionnels passionnes prets a vous accompagner dans vos objectifs.
            </p>
          </div>
          <Link to="/coachs" className="btn btn-outline-primary">
            Voir tous les coachs
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>

        {/* Grille */}
        <div className="row g-4">
          {coachesData.map((coach) => (
            <div key={coach.id} className="col-12 col-sm-6 col-lg-4">
              <CoachCard coach={coach} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCoachesSection;

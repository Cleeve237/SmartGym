import { Link } from 'react-router-dom';
import CoachCard from '../../home/PopularCoaches/CoachCard';
import '../../home/PopularCoaches/PopularCoaches.css';
import SectionTitle from './SectionTitle';

const COACHES = [
  {
    id: 10,
    name: 'Coach Sarah',
    photo: null,
    speciality: 'Yoga & Pilates',
    city: 'Yaounde',
    price: '5 000 FCFA/seance',
    rating: 4.8,
    reviewsCount: 47,
    availability: 'Disponible',
    verified: true,
  },
  {
    id: 11,
    name: 'Coach Emmanuel',
    photo: null,
    speciality: 'CrossFit & HIIT',
    city: 'Douala',
    price: '4 500 FCFA/seance',
    rating: 4.7,
    reviewsCount: 32,
    availability: 'Disponible',
    verified: true,
  },
  {
    id: 12,
    name: 'Coach Brigitte',
    photo: null,
    speciality: 'Perte de poids',
    city: 'Bafoussam',
    price: '4 000 FCFA/seance',
    rating: 4.9,
    reviewsCount: 61,
    availability: 'Limite',
    verified: true,
  },
];

function RecommendedCoachesWidget() {
  return (
    <div className="dash-animate">
      <SectionTitle
        icon="bi-stars"
        title="Recommandes pour vous"
        action={
          <Link to="/client/coaches" className="dash-widget-link">
            Voir tous <i className="bi bi-arrow-right" />
          </Link>
        }
      />
      <div className="dash-recommended-grid">
        {COACHES.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedCoachesWidget;

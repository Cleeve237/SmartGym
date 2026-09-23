import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInformation from '../../components/profile/ProfileInformation';
import ProfileStats from '../../components/profile/ProfileStats';
import ClientGoalsCard from '../../components/profile/client/ClientGoalsCard';
import SportPreferences from '../../components/profile/client/SportPreferences';
import FitnessLevelCard from '../../components/profile/client/FitnessLevelCard';
import SecuritySection from '../../components/profile/SecuritySection';
import '../../components/profile/Profile.css';

const MOCK_CLIENT = {
  firstName: 'Jean',
  lastName: 'Kamga',
  email: 'jean.kamga@email.com',
  phone: '+237 699 123 456',
  city: 'Douala',
  avatar: null,
  createdAt: '15 Janvier 2025',
};

const MOCK_GOALS = {
  objective: 'Perte de poids',
  fitnessLevel: 'Intermediaire',
  targetWeight: 75,
  sessionsPerWeek: 3,
};

const MOCK_SPORTS = ['Musculation', 'Cardio & HIIT', 'Boxe'];
const MOCK_AVAILANCE = ['Lundi matin', 'Mercredi soir', 'Vendredi matin', 'Samedi apres-midi'];

function ClientProfilePage() {
  const stats = [
    { icon: 'bi-calendar-check', value: 24, label: 'Seances effectuees' },
    { icon: 'bi-heart', value: 2, label: 'Coachs favoris' },
    { icon: 'bi-graph-up-arrow', value: '+18%', label: 'Progression' },
  ];

  return (
    <div className="prf-page">
      <div className="prf-container">
        <Link to="/client/dashboard" className="prf-back">
          <i className="bi bi-arrow-left" />
          Retour au tableau de bord
        </Link>

        <div className="prf-grid" style={{ marginBottom: '1.5rem' }}>
          <div className="prf-grid-full">
            <ProfileHeader
              user={MOCK_CLIENT}
              role="client"
              editPath="/client/profile/edit"
              badgeLabel="Client"
            />
          </div>
        </div>

        <div className="prf-grid">
          <div className="d-flex flex-column gap-4">
            <ProfileInformation user={MOCK_CLIENT} />

            <ClientGoalsCard goals={MOCK_GOALS} />

            <FitnessLevelCard level={MOCK_GOALS.fitnessLevel} />
          </div>

          <div className="d-flex flex-column gap-4">
            <ProfileStats stats={stats} />

            <SportPreferences
              sports={MOCK_SPORTS}
              availability={MOCK_AVAILANCE}
            />

            <SecuritySection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientProfilePage;

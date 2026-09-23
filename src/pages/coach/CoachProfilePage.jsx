import { Link } from 'react-router-dom';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileStats from '../../components/profile/ProfileStats';
import CoachPresentation from '../../components/profile/coach/CoachPresentation';
import CoachSpecialties from '../../components/profile/coach/CoachSpecialties';
import CoachCertificates from '../../components/profile/coach/CoachCertificates';
import CoachExperience from '../../components/profile/coach/CoachExperience';
import CoachPricing from '../../components/profile/coach/CoachPricing';
import CoachAvailability from '../../components/profile/coach/CoachAvailability';
import CoachRating from '../../components/profile/coach/CoachRating';
import SecuritySection from '../../components/profile/SecuritySection';
import '../../components/profile/Profile.css';

const MOCK_COACH = {
  firstName: 'Patrick',
  lastName: 'Njoya',
  email: 'patrick.njoya@email.com',
  phone: '+237 677 987 654',
  city: 'Yaounde',
  avatar: null,
  createdAt: '3 Mars 2024',
};

const MOCK_COACH_DETAIL = {
  bio: 'Coach sportif certifie avec 8 ans d\'experience en preparation physique. Specialise en musculation, cardio et remise en forme. Je vous accompagne atteindre vos objectifs avec des programmes personnalises et un suivi rigoureux.',
  experience: 8,
  languages: ['Francais', 'Anglais'],
  specialties: ['Musculation', 'Cardio & HIIT', 'CrossFit', 'Remise en forme'],
  certificates: [
    { name: 'Certified Personal Trainer', issuer: 'ACE', year: '2018' },
    { name: 'Specialiste Fitness & Nutrition', issuer: 'ISSA', year: '2019' },
    { name: 'Coach CrossFit Level 2', issuer: 'CrossFit Inc.', year: '2021' },
    { name: 'First Aid & CPR', issuer: 'Croix-Rouge', year: '2024' },
  ],
  pricePerSession: 15000,
  sessionDuration: 60,
  availability: [
    { day: 'Lundi', active: true, time: '8h - 12h' },
    { day: 'Mardi', active: true, time: '14h - 18h' },
    { day: 'Mercredi', active: true, time: '8h - 12h' },
    { day: 'Jeudi', active: true, time: '14h - 18h' },
    { day: 'Vendredi', active: true, time: '8h - 12h' },
    { day: 'Samedi', active: true, time: '9h - 13h' },
    { day: 'Dimanche', active: false, time: '' },
  ],
  rating: 4.8,
  reviewCount: 47,
  reviews: [
    {
      id: 1,
      author: 'Marie Tchinda',
      date: '10 Juin 2025',
      rating: 5,
      text: 'Excellent coach ! Tres professionnel et a l\'ecoute. J\'ai atteint mes objectifs en 3 mois.',
    },
    {
      id: 2,
      author: 'Paul Mbarga',
      date: '28 Mai 2025',
      rating: 5,
      text: 'Programme tres bien adapte a mon niveau. Je recommande vivement.',
    },
    {
      id: 3,
      author: 'Sophie Nkomo',
      date: '15 Mai 2025',
      rating: 4,
      text: 'Tres bon coach, always motivated. Sessions intenses et efficaces.',
    },
  ],
};

function CoachProfilePage() {
  const stats = [
    { icon: 'bi-people', value: 47, label: 'Clients actifs' },
    { icon: 'bi-calendar-check', value: 312, label: 'Seances donnees' },
    { icon: 'bi-star', value: '4.8', label: 'Note moyenne' },
  ];

  return (
    <div className="prf-page">
      <div className="prf-container">
        <Link to="/coach/dashboard" className="prf-back">
          <i className="bi bi-arrow-left" />
          Retour au tableau de bord
        </Link>

        <div className="prf-grid" style={{ marginBottom: '1.5rem' }}>
          <div className="prf-grid-full">
            <ProfileHeader
              user={MOCK_COACH}
              role="coach"
              editPath="/coach/profile/edit"
              badgeLabel="Coach"
            />
          </div>
        </div>

        <div className="prf-grid">
          <div className="d-flex flex-column gap-4">
            <CoachPresentation
              bio={MOCK_COACH_DETAIL.bio}
              experience={MOCK_COACH_DETAIL.experience}
              languages={MOCK_COACH_DETAIL.languages}
            />

            <CoachSpecialties specialties={MOCK_COACH_DETAIL.specialties} />

            <CoachCertificates certificates={MOCK_COACH_DETAIL.certificates} />

            <CoachExperience
              experience={MOCK_COACH_DETAIL.experience}
              specializations={MOCK_COACH_DETAIL.specialties}
              languages={MOCK_COACH_DETAIL.languages}
            />

            <SecuritySection />
          </div>

          <div className="d-flex flex-column gap-4">
            <ProfileStats stats={stats} />

            <CoachPricing
              pricePerSession={MOCK_COACH_DETAIL.pricePerSession}
              sessionDuration={MOCK_COACH_DETAIL.sessionDuration}
            />

            <CoachAvailability availability={MOCK_COACH_DETAIL.availability} />

            <CoachRating
              rating={MOCK_COACH_DETAIL.rating}
              reviewCount={MOCK_COACH_DETAIL.reviewCount}
              reviews={MOCK_COACH_DETAIL.reviews}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachProfilePage;

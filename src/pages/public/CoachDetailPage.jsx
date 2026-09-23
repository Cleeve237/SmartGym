import '../../components/home/PopularCoaches/PopularCoaches.css';
import '../../components/coach/details/CoachDetails.css';
import CoachHeader from '../../components/coach/details/CoachHeader';
import CoachBiography from '../../components/coach/details/CoachBiography';
import CoachSpecialties from '../../components/coach/details/CoachSpecialties';
import CoachPrograms from '../../components/coach/details/CoachPrograms';
import CoachAvailability from '../../components/coach/details/CoachAvailability';
import CoachGallery from '../../components/coach/details/CoachGallery';
import CoachReviews from '../../components/coach/details/CoachReviews';
import CoachSidebar from '../../components/coach/details/CoachSidebar';
import BookingCTA from '../../components/coach/details/BookingCTA';
import SimilarCoaches from '../../components/coach/details/SimilarCoaches';

const coachData = {
  id: 1,
  name: 'Jean Mbarga',
  photo: null,
  speciality: 'Musculation & Coaching personnel',
  city: 'Yaounde',
  price: '8 000 FCFA',
  sessionDuration: '1h00',
  rating: 4.9,
  reviewsCount: 124,
  sessionsCount: 580,
  yearsExperience: 8,
  verified: true,
  nextAvailability: "Aujourd'hui",
  biography:
    "Coach sportif certifie depuis 8 ans, je specialise dans l'accompagnement personnalise en musculation et en remise en forme. Diplome en Education Physique et Sportive de l'Universite de Yaounde I, j'ai eu l'opportunite de travailler avec des centaines de clients aux objectifs varies : perte de poids, prise de masse, preparation physique ou bien-etre general. Ma philosophie est simple : chaque individu est unique et merite un programme adapte a son mode de vie, ses capacites et ses ambitions. Je place l'ecoute, la bienveillance et la rigueur au coeur de mes seances. Que vous soyez debutant ou sportif confirme, je m'engage a vous guider pas a pas vers l'atteinte de vos objectifs, en toute securite et avec le plaisir de progresser ensemble. Ensemble, transformons vos ambitions en realites.",
  specialties: [
    'Musculation',
    'Fitness',
    'Perte de poids',
    'Cardio',
    'Preparation physique',
    'CrossFit',
  ],
  programs: [
    {
      id: 1,
      name: 'Programme Mise en forme',
      description:
        'Programme complet pour retrouver une bonne condition physique. Comprend des exercices cardios, de la musculation legere et des exercices de souplesse.',
      duration: '8 semaines',
      frequency: '3x par semaine',
      price: '25 000 FCFA',
    },
    {
      id: 2,
      name: 'Programme Prise de masse',
      description:
        'Programme intensif de musculation vise a developper la masse musculaire avec des exercices composes et un suivi nutritionnel.',
      duration: '12 semaines',
      frequency: '4x par semaine',
      price: '40 000 FCFA',
    },
    {
      id: 3,
      name: 'Programme Perte de poids',
      description:
        'Programme HYT combine cardio et musculation pour maximiser la combustion des graisses tout en preservant la masse musculaire.',
      duration: '10 semaines',
      frequency: '4x par semaine',
      price: '35 000 FCFA',
    },
  ],
  availability: [
    { name: 'Lundi', slots: ['08h00', '10h00', '14h00'] },
    { name: 'Mardi', slots: ['09h00', '16h00'] },
    { name: 'Mercredi', slots: ['08h00', '10h00', '17h00'] },
    { name: 'Jeudi', slots: ['09h00', '14h00'] },
    { name: 'Vendredi', slots: ['08h00', '16h00', '18h00'] },
    { name: 'Samedi', slots: ['09h00', '10h00'] },
    { name: 'Dimanche', slots: [] },
  ],
  photos: [
    { id: 1, src: null, alt: 'Coach en seance de musculation' },
    { id: 2, src: null, alt: 'Salle d\'entrainement' },
    { id: 3, src: null, alt: 'Coach avec un client' },
    { id: 4, src: null, alt: 'Exercice de CrossFit' },
    { id: 5, src: null, alt: 'Seance de cardio' },
  ],
  reviews: [
    {
      id: 1,
      name: 'Clarisse Noubissi',
      date: 'Juin 2026',
      message:
        "Jean est un coach exceptionnel. Grâce à ses conseils et à sa motivation, j'ai perdu 12 kilos en 3 mois. Je le recommande vivement à tous ceux qui veulent des résultats concrets.",
      rating: 5,
      photo: null,
    },
    {
      id: 2,
      name: 'Franck Fotso',
      date: 'Mai 2026',
      message:
        "Très professionnel et à l'écoute. Les programmes sont bien structurés et adaptés à mon niveau. J'ai gagné 5 kg de masse musculaire en 2 mois.",
      rating: 5,
      photo: null,
    },
    {
      id: 3,
      name: 'Amina Bello',
      date: 'Avril 2026',
      message:
        "Enfin un coach qui comprend mes objectifs. Les seances sont variées et jamais ennuyeuses. Mon endurance a vraiment improve.",
      rating: 4,
      photo: null,
    },
    {
      id: 4,
      name: 'Paul Tchinda',
      date: 'Mars 2026',
      message:
        "Je recommande Jean pour sa patience et sa pedagogie. Même en tant que debutant, je me suis senti à l'aise dès la première seance.",
      rating: 5,
      photo: null,
    },
    {
      id: 5,
      name: 'Sarah Djomo',
      date: 'Février 2026',
      message:
        "Excellent suivi nutritionnel en plus de l'entrainement. Jean prend le temps d'expliquer chaque mouvement et d'adapter l'intensité.",
      rating: 5,
      photo: null,
    },
  ],
};

const similarCoaches = [
  { id: 2, name: 'Sarah Nguema', photo: null, speciality: 'Fitness', city: 'Douala', price: '7 000 FCFA/seance', rating: 4.8, reviewsCount: 98, verified: true, availability: 'Demain' },
  { id: 3, name: 'Paul Fotso', photo: null, speciality: 'CrossFit', city: 'Bafoussam', price: '9 000 FCFA/seance', rating: 4.9, reviewsCount: 154, verified: true, availability: "Aujourd'hui" },
  { id: 7, name: 'David Nguele', photo: null, speciality: 'Musculation', city: 'Yaounde', price: '8 500 FCFA/seance', rating: 4.7, reviewsCount: 91, verified: true, availability: "Aujourd'hui" },
];

function CoachDetailPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container cd-breadcrumb">
        <nav className="cd-breadcrumb-nav" aria-label="Fil d'Ariane">
          <a href="/" className="cd-breadcrumb-link">Accueil</a>
          <span className="cd-breadcrumb-sep" aria-hidden="true">/</span>
          <a href="/coaches" className="cd-breadcrumb-link">Coachs</a>
          <span className="cd-breadcrumb-sep" aria-hidden="true">/</span>
          <span className="cd-breadcrumb-current" aria-current="page">Profil du coach</span>
        </nav>
      </div>

      <div className="container pb-5">
        {/* Header */}
        <CoachHeader coach={coachData} />

        {/* Layout principal */}
        <div className="cd-layout">

          {/* Contenu principal */}
          <div className="cd-layout-main">
            <CoachBiography biography={coachData.biography} />
            <CoachSpecialties specialties={coachData.specialties} />
            <CoachPrograms programs={coachData.programs} />
            <CoachAvailability availability={coachData.availability} />
            <CoachGallery photos={coachData.photos} />
            <CoachReviews
              reviews={coachData.reviews}
              rating={coachData.rating}
              reviewsCount={coachData.reviewsCount}
            />
          </div>

          {/* Sidebar */}
          <div className="cd-layout-sidebar">
            <CoachSidebar coach={coachData} />
          </div>

        </div>

        {/* CTA */}
        <BookingCTA />

        {/* Coachs similaires */}
        <SimilarCoaches coaches={similarCoaches} />
      </div>
    </div>
  );
}

export default CoachDetailPage;

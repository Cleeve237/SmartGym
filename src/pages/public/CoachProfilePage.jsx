import { useParams, Link } from 'react-router-dom';
import { COACHES } from '../../components/coach-profile/mockCoaches';
import '../../components/coach-profile/CoachProfile.css';
import CoachHero from '../../components/coach-profile/CoachHero';
import CoachStats from '../../components/coach-profile/CoachStats';
import CoachBiography from '../../components/coach-profile/CoachBiography';
import CoachSpecialties from '../../components/coach-profile/CoachSpecialties';
import CoachCertifications from '../../components/coach-profile/CoachCertifications';
import CoachExperience from '../../components/coach-profile/CoachExperience';
import CoachEducation from '../../components/coach-profile/CoachEducation';
import CoachLanguages from '../../components/coach-profile/CoachLanguages';
import CoachAvailability from '../../components/coach-profile/CoachAvailability';
import CoachPrograms from '../../components/coach-profile/CoachPrograms';
import CoachGallery from '../../components/coach-profile/CoachGallery';
import CoachReviews from '../../components/coach-profile/CoachReviews';
import CoachRatingDistribution from '../../components/coach-profile/CoachRatingDistribution';
import CoachAchievements from '../../components/coach-profile/CoachAchievements';
import CoachMap from '../../components/coach-profile/CoachMap';
import CoachSocialLinks from '../../components/coach-profile/CoachSocialLinks';
import CoachContact from '../../components/coach-profile/CoachContact';
import CoachFAQ from '../../components/coach-profile/CoachFAQ';
import CoachCTA from '../../components/coach-profile/CoachCTA';
import CoachSidebar from '../../components/coach-profile/CoachSidebar';
import SimilarCoaches from '../../components/coach-profile/SimilarCoaches';

export default function CoachProfilePage() {
  const { id } = useParams();
  const coach = COACHES.find(c => c.id === Number(id));

  if (!coach) {
    return (
      <div className="cp-page d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <i className="bi bi-person-x-fill" style={{ fontSize: '4rem', color: 'var(--color-gray-300)' }} />
          <h3 className="mt-3 fw-bold">Coach introuvable</h3>
          <p className="text-muted">Ce coach n'existe pas ou a été retiré.</p>
          <Link to="/coaches" className="btn btn-primary mt-2">
            <i className="bi bi-arrow-left me-2" />Voir tous les coaches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cp-page">
      <CoachHero coach={coach} />
      <div className="container py-4">
        <div className="cp-layout">
          <div className="cp-main">
            <CoachStats coach={coach} />
            <CoachBiography bio={coach.bio} />
            <CoachSpecialties specialties={coach.specialties} />
            <CoachCertifications certifications={coach.certifications} />
            <CoachExperience experience={coach.experience} />
            <CoachEducation education={coach.education} />
            <CoachLanguages languages={coach.languages} />
            <CoachAvailability availability={coach.availability} />
            <CoachPrograms programs={coach.programs} />
            <CoachGallery name={coach.name} />
            <CoachAchievements achievements={coach.achievements} />
            <CoachRatingDistribution reviews={coach.reviews} />
            <CoachReviews reviews={coach.reviews} />
            <CoachFAQ />
          </div>
          <CoachSidebar coach={coach} />
        </div>
        <CoachContact coach={coach} />
        <CoachMap city={coach.city} district={coach.district} />
        <CoachSocialLinks social={coach.social} />
        <SimilarCoaches currentId={coach.id} coaches={COACHES} />
        <CoachCTA coach={coach} />
      </div>
    </div>
  );
}

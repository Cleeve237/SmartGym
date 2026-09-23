import CoachAvatar from './CoachAvatar';
import CoachBadge from './CoachBadge';
import CoachRating from './CoachRating';
import CoachPrice from './CoachPrice';
import { Link } from 'react-router-dom';

export default function CoachHero({ coach }) {
  return (
    <section className="cp-hero">
      <div className="cp-hero-blob cp-hero-blob--1" />
      <div className="cp-hero-blob cp-hero-blob--2" />
      <div className="container cp-hero-content">
        <div className="cp-hero-row">
          <CoachAvatar name={coach.name} size={120} />
          <div className="cp-hero-info">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <h1>{coach.name}</h1>
              <CoachBadge verified={coach.verified} />
            </div>
            <div className="cp-hero-specialty">{coach.speciality}</div>
            <div className="cp-hero-meta">
              <span><i className="bi bi-geo-alt" /> {coach.city}, {coach.district}</span>
              <CoachRating rating={coach.rating} count={coach.reviewsCount} />
              <span><i className="bi bi-people" /> {coach.clientsCount} clients</span>
              <span><i className="bi bi-calendar-check" /> {coach.yearsExp} ans d'exp.</span>
              <CoachPrice price={coach.price} sessionMinutes={coach.sessionMinutes} />
            </div>
          </div>
        </div>
        <nav className="mt-3" style={{ fontSize: '.8rem' }}>
          <Link to="/" className="text-white-50 text-decoration-none">Accueil</Link>
          <span className="text-white-50 mx-2">/</span>
          <Link to="/coaches" className="text-white-50 text-decoration-none">Coaches</Link>
          <span className="text-white-50 mx-2">/</span>
          <span className="text-white">{coach.name}</span>
        </nav>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

function WelcomeBanner() {
  return (
    <div className="dash-banner dash-animate">
      <div className="dash-banner-blob dash-banner-blob--1" />
      <div className="dash-banner-blob dash-banner-blob--2" />
      <div className="dash-banner-content">
        <h2 className="dash-banner-title">Bonjour Jean !</h2>
        <p className="dash-banner-sub">
          Continuez vos entrainements et rapprochez-vous de vos objectifs.
        </p>
      </div>
      <div className="dash-banner-actions">
        <Link to="/client/coaches" className="dash-banner-btn dash-banner-btn--primary">
          <i className="bi bi-search" />
          Trouver un coach
        </Link>
        <Link to="/client/bookings" className="dash-banner-btn dash-banner-btn--ghost">
          <i className="bi bi-calendar-check" />
          Mes reservations
        </Link>
      </div>
    </div>
  );
}

export default WelcomeBanner;

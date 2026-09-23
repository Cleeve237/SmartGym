import { Link } from "react-router-dom";

export default function CoachWelcomeBanner() {
  return (
    <div className="cd-banner">
      <h2 className="cd-banner-title">Développez votre activité avec SmartGym</h2>
      <p className="cd-banner-text">
        Gérez vos clients, vos séances et vos revenus depuis un seul espace.
      </p>
      <div className="cd-banner-actions">
        <Link to="/coach/programmes/create" className="cd-banner-btn cd-banner-btn--white">
          <i className="bi bi-plus-lg" /> Ajouter un programme
        </Link>
        <Link to="/coach/profile" className="cd-banner-btn cd-banner-btn--outline">
          <i className="bi bi-person" /> Voir mon profil
        </Link>
      </div>
    </div>
  );
}

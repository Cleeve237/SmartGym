import { Link } from "react-router-dom";

export default function EmptyBookings() {
  return (
    <div className="bk-empty">
      <div className="bk-empty-icon">
        <i className="bi bi-calendar-x" />
      </div>
      <div className="bk-empty-title">Aucune réservation</div>
      <p className="bk-empty-text">
        Vous n'avez pas encore réservé de séance. Trouvez un coach et commencez votre transformation !
      </p>
      <Link to="/coaches" className="btn btn-primary btn-sm">
        <i className="bi bi-search me-1" /> Trouver un coach
      </Link>
    </div>
  );
}

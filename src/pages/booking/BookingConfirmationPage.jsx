import { Link } from "react-router-dom";
import "../../components/booking/Booking.css";

export default function BookingConfirmationPage() {
  const bookingRef = "SG-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div className="bk-page">
      <div className="bk-container">
        <div className="bk-confirm">
          <div className="bk-confirm-icon">
            <i className="bi bi-check-lg" />
          </div>

          <h1 className="bk-confirm-title">Réservation confirmée !</h1>
          <p className="bk-confirm-text">
            Votre séance a été réservée avec succès. Vous recevrez une confirmation par SMS et un rappel 24h avant votre séance.
          </p>

          <div className="bk-confirm-card">
            <div className="bk-summary">
              <div className="bk-summary-row">
                <span className="bk-summary-label"><i className="bi bi-upc" /> Référence</span>
                <span className="bk-summary-value" style={{ fontFamily: "var(--font-family-mono)" }}>{bookingRef}</span>
              </div>
              <div className="bk-summary-row">
                <span className="bk-summary-label"><i className="bi bi-person" /> Coach</span>
                <span className="bk-summary-value">Marc Bella</span>
              </div>
              <div className="bk-summary-row">
                <span className="bk-summary-label"><i className="bi bi-tag" /> Programme</span>
                <span className="bk-summary-value">Musculation</span>
              </div>
              <div className="bk-summary-row">
                <span className="bk-summary-label"><i className="bi bi-calendar" /> Date</span>
                <span className="bk-summary-value">
                  {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div className="bk-summary-row">
                <span className="bk-summary-label"><i className="bi bi-clock" /> Heure</span>
                <span className="bk-summary-value">10:00</span>
              </div>
            </div>
          </div>

          <div className="bk-confirm-actions">
            <Link to="/client/bookings" className="bk-btn bk-btn--primary" style={{ textDecoration: "none" }}>
              <i className="bi bi-list-ul" /> Voir mes réservations
            </Link>
            <Link to="/client/dashboard" className="bk-btn bk-btn--secondary" style={{ textDecoration: "none" }}>
              <i className="bi bi-house" /> Retour au tableau de bord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

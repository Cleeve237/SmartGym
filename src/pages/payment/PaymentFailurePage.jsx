import { Link } from "react-router-dom";
import "../../components/payment/Payment.css";

export default function PaymentFailurePage() {
  return (
    <div className="pay-page">
      <div className="pay-container">
        <div className="pay-failure">
          <div className="pay-failure-icon">
            <i className="bi bi-x-lg" />
          </div>

          <h1 className="pay-failure-title">Paiement échoué</h1>
          <p className="pay-failure-text">
            Le paiement n&apos;a pas pu être traité. Veuillez réessayer ou choisir un autre moyen de paiement.
          </p>

          <div className="pay-failure-causes">
            <div className="pay-failure-causes-title">Causes possibles</div>
            <div className="pay-failure-cause">
              <i className="bi bi-exclamation-circle" /> Solde insuffisant sur votre compte
            </div>
            <div className="pay-failure-cause">
              <i className="bi bi-exclamation-circle" /> Erreur réseau ou de connexion
            </div>
            <div className="pay-failure-cause">
              <i className="bi bi-exclamation-circle" /> Paiement annulé par l&apos;utilisateur
            </div>
          </div>

          <div className="pay-failure-actions">
            <Link
              to="/payment"
              className="pay-btn pay-btn--primary"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-arrow-repeat" /> Réessayer
            </Link>
            <Link
              to="/client/bookings"
              className="pay-btn pay-btn--secondary"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-arrow-left" /> Retour à mes réservations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

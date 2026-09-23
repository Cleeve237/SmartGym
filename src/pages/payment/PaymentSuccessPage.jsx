import { Link } from "react-router-dom";
import "../../components/payment/Payment.css";
import TransactionReceipt from "../../components/payment/TransactionReceipt";

const MOCK_TRANSACTION = {
  ref: "SG-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
  amount: 5250,
  date: new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  coachName: "Marc Bella",
  bookingRef: "BK-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
  method: "MTN MoMo",
};

export default function PaymentSuccessPage() {
  return (
    <div className="pay-page">
      <div className="pay-container">
        <div className="pay-success">
          <div className="pay-success-icon">
            <i className="bi bi-check-lg" />
          </div>

          <h1 className="pay-success-title">Paiement réussi</h1>
          <p className="pay-success-text">
            Votre paiement a été traité avec succès. Vous recevrez une confirmation par SMS.
          </p>

          <TransactionReceipt transaction={MOCK_TRANSACTION} />

          <div className="pay-success-actions" style={{ marginTop: "2rem" }}>
            <Link
              to="/client/bookings"
              className="pay-btn pay-btn--primary"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-calendar-check" /> Voir mes réservations
            </Link>
            <Link
              to="/client/dashboard"
              className="pay-btn pay-btn--secondary"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-house" /> Retour au tableau de bord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

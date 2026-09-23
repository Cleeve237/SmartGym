import { Link } from "react-router-dom";

export default function EmptyPayments() {
  return (
    <div className="pay-empty">
      <div className="pay-empty-icon">
        <i className="bi bi-wallet2" />
      </div>
      <div className="pay-empty-title">Aucune transaction disponible</div>
      <p className="pay-empty-text">
        Vous n&apos;avez pas encore effectué de paiement. Réservez une séance pour commencer !
      </p>
      <Link to="/coaches" className="btn btn-primary btn-sm">
        <i className="bi bi-search me-1" /> Trouver un coach
      </Link>
    </div>
  );
}

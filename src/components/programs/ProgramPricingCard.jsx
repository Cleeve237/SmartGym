import { Link } from 'react-router-dom';

function ProgramPricingCard({ program }) {
  return (
    <div className="pg-pricing">
      <div className="pg-pricing-body">
        <div className="pg-pricing-amount">
          <span className="pg-pricing-currency">FCFA </span>
          {program.price?.toLocaleString()}
        </div>
        <div className="pg-pricing-period">Paiement unique</div>

        <div className="pg-pricing-details">
          <div className="pg-pricing-detail">
            <i className="bi bi-calendar3" />
            {program.weeks} semaines
          </div>
          <div className="pg-pricing-detail">
            <i className="bi bi-camera-video" />
            {program.sessionsPerWeek * program.weeks} seances
          </div>
          <div className="pg-pricing-detail">
            <i className="bi bi-chat-dots" />
            Suivi personnalisé
          </div>
          <div className="pg-pricing-detail">
            <i className="bi bi-file-earmark-text" />
            Plan nutritionnel inclus
          </div>
        </div>
      </div>

      <div className="pg-pricing-footer">
        <Link
          to={`/booking/program/${program.id}`}
          className="btn btn-primary w-100 mb-2"
        >
          <i className="bi bi-cart-plus me-2" />
          S&apos;inscrire au programme
        </Link>
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)', textAlign: 'center', margin: 0 }}>
          Annulation gratuite sous 7 jours
        </p>
      </div>
    </div>
  );
}

export default ProgramPricingCard;

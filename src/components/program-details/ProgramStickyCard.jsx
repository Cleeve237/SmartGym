import FavoriteProgramButton from './FavoriteProgramButton';
import ShareProgram from './ShareProgram';
import BookingPreview from './BookingPreview';
import PaymentPreview from './PaymentPreview';

function ProgramStickyCard({ program }) {
  const discount = program.oldPrice ? Math.round((1 - program.price / program.oldPrice) * 100) : 0;

  return (
    <div className="pd-sticky">
      <div className="pd-card">
        <div className="pd-price-box">
          <div>
            <span className="pd-price-current">{program.price?.toLocaleString()} FCFA</span>
            {program.oldPrice && <span className="pd-price-old">{program.oldPrice?.toLocaleString()} FCFA</span>}
            {discount > 0 && <span className="pd-price-badge">-{discount}%</span>}
          </div>
          <div className="pd-price-period">Paiement unique · Accès complet</div>
        </div>

        <div className="pd-btn-group" style={{flexDirection:'column'}}>
          <button className="pd-btn pd-btn--primary"><i className="bi bi-calendar-check" /> Réserver maintenant</button>
          <FavoriteProgramButton />
        </div>

        <ul className="pd-price-features">
          <li className="pd-price-feature"><i className="bi bi-check-circle-fill" />{program.weeks} semaines de programme</li>
          <li className="pd-price-feature"><i className="bi bi-check-circle-fill" />{program.sessionsPerWeek * program.weeks} séances</li>
          <li className="pd-price-feature"><i className="bi bi-check-circle-fill" />Suivi personnalisé coach</li>
          <li className="pd-price-feature"><i className="bi bi-check-circle-fill" />Plan nutritionnel inclus</li>
          <li className="pd-price-feature"><i className="bi bi-check-circle-fill" />Annulation gratuite 7 jours</li>
        </ul>

        <ShareProgram />

        <hr style={{margin:'1rem 0'}} />

        <BookingPreview program={program} />

        <hr style={{margin:'1rem 0'}} />

        <PaymentPreview />
      </div>
    </div>
  );
}
export default ProgramStickyCard;

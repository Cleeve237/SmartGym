import CPButton from './CPButton';
import { Link } from 'react-router-dom';

export default function CoachCTA({ coach }) {
  return (
    <div className="cp-cta">
      <h2>Prêt(e) à transformer votre corps ?</h2>
      <p>Rejoignez {coach.name} dès aujourd'hui et commencez votre transformation.</p>
      <div className="cp-cta-actions">
        <Link to={`/booking/${coach.id}`} className="cp-cta-btn cp-cta-btn--primary">
          <i className="bi bi-calendar-check" /> Réserver une séance
        </Link>
        <Link to="/programs/catalog" className="cp-cta-btn cp-cta-btn--outline">
          <i className="bi bi-journal-text" /> Voir les programmes
        </Link>
      </div>
    </div>
  );
}

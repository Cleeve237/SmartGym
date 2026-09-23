import { Link } from 'react-router-dom';

function ProgramCTA() {
  return (
    <div className="pd-cta">
      <h2>Commencez votre transformation dès aujourd'hui</h2>
      <p>Rejoignez des milliers de personnes qui ont déjà atteint leurs objectifs avec SmartGym.</p>
      <div className="pd-cta-actions">
        <button className="pd-cta-btn pd-cta-btn--primary"><i className="bi bi-calendar-check" /> Réserver maintenant</button>
        <Link to="/coaches" className="pd-cta-btn pd-cta-btn--outline"><i className="bi bi-search" /> Trouver un coach</Link>
      </div>
    </div>
  );
}
export default ProgramCTA;

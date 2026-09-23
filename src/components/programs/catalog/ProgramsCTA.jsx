import { Link } from 'react-router-dom';

function ProgramsCTA() {
  return (
    <div className="pc-cta">
      <h2>Prêt à transformer votre quotidien ?</h2>
      <p>Rejoignez des milliers de sportifs qui ont déjà trouvé leur programme idéal.</p>
      <div className="pc-cta-actions">
        <Link to="/coaches" className="pc-cta-btn pc-cta-btn--primary"><i className="bi bi-search" /> Trouver un coach</Link>
        <Link to="/register" className="pc-cta-btn pc-cta-btn--outline"><i className="bi bi-person-plus" /> Créer un compte</Link>
      </div>
    </div>
  );
}
export default ProgramsCTA;

import { Link } from 'react-router-dom';

function EmptyPrograms({ query }) {
  return (
    <div className="pg-empty">
      <div className="pg-empty-icon">
        <i className="bi bi-inbox" />
      </div>
      <h3 className="pg-empty-title">Aucun programme trouve</h3>
      <p className="pg-empty-text">
        {query
          ? `Aucun resultat pour "${query}". Essayez avec d'autres criteres.`
          : "Aucun programme n'est disponible pour le moment. Revenez bientot !"}
      </p>
      <Link to="/" className="btn btn-primary">
        <i className="bi bi-house me-2" />
        Retour a l&apos;accueil
      </Link>
    </div>
  );
}

export default EmptyPrograms;

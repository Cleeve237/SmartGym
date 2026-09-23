import { Link } from 'react-router-dom';

function EmptyPrograms({ hasFilter }) {
  return (
    <div className="cd-pgm-empty">
      <div className="cd-pgm-empty-icon">
        <i className="bi bi-folder2-open" aria-hidden="true" />
      </div>
      <h3 className="cd-pgm-empty-title">
        {hasFilter ? 'Aucun resultat' : 'Aucun programme'}
      </h3>
      <p className="cd-pgm-empty-text">
        {hasFilter
          ? 'Aucun programme ne correspond a vos criteres de recherche. Essayez avec d\'autres filtres.'
          : 'Vous n\'avez pas encore cree de programme. Commencez par en creer un !'}
      </p>
      {!hasFilter && (
        <Link to="/coach/programs/create" className="btn btn-primary">
          <i className="bi bi-plus-lg me-2" />
          Nouveau Programme
        </Link>
      )}
    </div>
  );
}

export default EmptyPrograms;

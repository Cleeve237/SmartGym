import Button from '../ui/Button';

function NoCoachFound({ onReset }) {
  return (
    <div className="mp-empty">
      <div className="mp-empty-icon">
        <i className="bi bi-search" />
      </div>
      <h3 className="mp-empty-title">
        Aucun coach ne correspond a vos criteres
      </h3>
      <p className="mp-empty-text">
        Essayez de modifier vos criteres de recherche ou d&apos;elargir vos filtres.
      </p>
      {onReset && (
        <Button variant="primary" icon="bi-arrow-counterclockwise" onClick={onReset}>
          Reinitialiser les filtres
        </Button>
      )}
    </div>
  );
}

export default NoCoachFound;

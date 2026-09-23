function EmptyPrograms({ onReset }) {
  return (
    <div className="pc-empty">
      <div className="pc-empty-icon"><i className="bi bi-inbox" /></div>
      <h3>Aucun programme trouvé</h3>
      <p>Essayez de modifier vos filtres ou votre recherche.</p>
      <button className="pc-card-btn pc-card-btn--primary" onClick={onReset}>
        <i className="bi bi-arrow-counterclockwise" /> Réinitialiser les filtres
      </button>
    </div>
  );
}
export default EmptyPrograms;

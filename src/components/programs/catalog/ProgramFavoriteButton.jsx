function ProgramFavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      className={`pc-card-fav ${isFavorite ? 'active' : ''}`}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggle?.(); }}
      aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`} />
    </button>
  );
}
export default ProgramFavoriteButton;

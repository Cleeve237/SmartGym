import { useState } from 'react';

function FavoriteProgramButton() {
  const [fav, setFav] = useState(false);
  return (
    <button className={`pd-btn pd-btn--outline ${fav ? 'pd-fav active' : ''}`} onClick={() => setFav(!fav)} aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
      <i className={`bi ${fav ? 'bi-heart-fill' : 'bi-heart'}`} />
      {fav ? 'Favori' : 'Ajouter aux favoris'}
    </button>
  );
}
export default FavoriteProgramButton;

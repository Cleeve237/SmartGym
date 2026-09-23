import { useState } from 'react';

export default function CoachFavorite({ coach }) {
  const [fav, setFav] = useState(false);
  return (
    <button
      className={`cp-social-btn cp-fav-btn ${fav ? 'active' : ''}`}
      onClick={() => setFav(!fav)}
      style={{ border: '1px solid var(--color-gray-200)', cursor: 'pointer' }}
      title={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <i className={`bi ${fav ? 'bi-heart-fill' : 'bi-heart'}`} />
    </button>
  );
}

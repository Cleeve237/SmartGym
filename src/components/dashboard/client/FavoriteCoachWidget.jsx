import { Link } from 'react-router-dom';
import CoachMiniCard from './CoachMiniCard';
import EmptyState from './EmptyState';

function FavoriteCoachWidget() {
  const hasFavorite = true;
  const coach = {
    id: 1,
    name: 'Coach Ahmadou',
    specialty: 'Musculation & Fitness',
    city: 'Douala',
    rating: 4.9,
  };

  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-heart-fill" />
          Coach favori
        </h2>
        {hasFavorite && (
          <Link to="/client/favorites" className="dash-widget-link">
            Voir tous <i className="bi bi-arrow-right" />
          </Link>
        )}
      </div>
      <div className="dash-widget-body">
        {hasFavorite ? (
          <>
            <CoachMiniCard {...coach} />
            <div style={{ marginTop: '0.85rem' }}>
              <Link to={`/coaches/${coach.id}`} className="dash-fav-coach-btn" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                Voir le profil
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState
            icon="bi-heart"
            title="Aucun coach favori"
            description="Ajoutez un coach a vos favoris."
            actionTo="/client/coaches"
            action="Explorer les coachs"
          />
        )}
      </div>
    </div>
  );
}

export default FavoriteCoachWidget;

function CoachRating({ rating, reviewsCount }) {
  return (
    <div className="coach-rating" aria-label={`${rating} sur 5, ${reviewsCount} avis`}>
      <div className="coach-rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`bi bi-star-fill coach-rating-star${star > Math.round(rating) ? ' coach-rating-star--empty' : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="coach-rating-value">{rating}</span>
      <span className="coach-rating-count">({reviewsCount})</span>
    </div>
  );
}

export default CoachRating;

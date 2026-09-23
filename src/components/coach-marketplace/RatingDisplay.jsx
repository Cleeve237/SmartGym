function RatingDisplay({ rating, reviewsCount }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="mp-rating" aria-label={`${rating} sur 5, ${reviewsCount} avis`}>
      <div className="mp-rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`bi bi-star-fill mp-rating-star ${
              star <= fullStars ? '' : star === fullStars + 1 && hasHalf ? '' : 'mp-rating-star--empty'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="mp-rating-value">{rating}</span>
      <span className="mp-rating-count">({reviewsCount})</span>
    </div>
  );
}

export default RatingDisplay;

import ProfileSection from '../ProfileSection';

function CoachRating({ rating = 0, reviewCount = 0, reviews = [] }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <ProfileSection title="Avis clients" icon="bi-chat-quote">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="prf-rating">
          <div className="prf-rating-stars">
            {Array.from({ length: fullStars }, (_, i) => (
              <i className="bi bi-star-fill prf-rating-star" key={`full-${i}`} />
            ))}
            {hasHalf && <i className="bi bi-star-half prf-rating-star" key="half" />}
            {Array.from({ length: emptyStars }, (_, i) => (
              <i className="bi bi-star-fill prf-rating-star prf-rating-star--empty" key={`empty-${i}`} />
            ))}
          </div>
          <span className="prf-rating-value">{rating.toFixed(1)}</span>
          <span className="prf-rating-count">({reviewCount} avis)</span>
        </div>
      </div>

      {reviews.length > 0 ? (
        <div>
          {reviews.slice(0, 3).map((review, idx) => (
            <div className="prf-review-card" key={review.id || idx}>
              <div className="prf-review-header">
                <div className="prf-review-author">
                  <div className="prf-review-avatar">
                    {review.author?.[0] || '?'}
                  </div>
                  <span className="prf-review-name">{review.author}</span>
                </div>
                <span className="prf-review-date">{review.date}</span>
              </div>
              <div className="prf-rating-stars mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    className={`bi bi-star-fill prf-rating-star ${i < review.rating ? '' : 'prf-rating-star--empty'}`}
                    key={i}
                  />
                ))}
              </div>
              <p className="prf-review-text">{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="prf-info-value--empty mb-0">
          Aucun avis pour le moment
        </p>
      )}
    </ProfileSection>
  );
}

export default CoachRating;

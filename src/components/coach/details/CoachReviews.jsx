import CoachReviewCard from './CoachReviewCard';

function CoachReviews({ reviews, rating, reviewsCount }) {
  const distribution = [
    { stars: 5, count: 89 },
    { stars: 4, count: 24 },
    { stars: 3, count: 8 },
    { stars: 2, count: 2 },
    { stars: 1, count: 1 },
  ];

  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-chat-dots" />
        Avis clients
      </h2>

      <div className="cd-reviews-summary">
        <div className="cd-reviews-avg">
          <div className="cd-reviews-avg-value">{rating}</div>
          <div className="cd-reviews-avg-label">sur 5</div>
        </div>
        <div className="cd-reviews-bars">
          {distribution.map((item) => (
            <div key={item.stars} className="cd-reviews-bar">
              <span className="cd-reviews-bar-label">{item.stars}</span>
              <div className="cd-reviews-bar-track">
                <div
                  className="cd-reviews-bar-fill"
                  style={{ width: `${(item.count / reviewsCount) * 100}%` }}
                />
              </div>
              <span className="cd-reviews-bar-count">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {reviews.map((review) => (
        <CoachReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default CoachReviews;

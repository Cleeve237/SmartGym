function ProgramReviewCard({ review }) {
  const initials = review.author
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="pg-review">
      <div className="pg-review-header">
        <div className="pg-review-author">
          <div className="pg-review-avatar">{initials}</div>
          <span className="pg-review-name">{review.author}</span>
        </div>
        <span className="pg-review-date">{review.date}</span>
      </div>

      <div className="pg-review-stars">
        {[1, 2, 3, 4, 5].map((s) => (
          <i
            key={s}
            className={`bi ${
              s <= review.rating ? 'bi-star-fill' : 'pg-star-empty bi-star'
            }`}
          />
        ))}
      </div>

      <p className="pg-review-text">{review.text}</p>
    </div>
  );
}

export default ProgramReviewCard;

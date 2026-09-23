function CoachReviewCard({ review }) {
  const { name, date, message, rating, photo } = review;

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const avatarColors = [
    'linear-gradient(135deg, #EC4899, #F472B6)',
    'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'linear-gradient(135deg, #F97316, #FB923C)',
    'linear-gradient(135deg, #16A34A, #4ADE80)',
  ];

  return (
    <article className="cd-review-card">
      <div className="cd-review-header">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="cd-review-avatar"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div
            className="cd-review-avatar"
            style={{ background: avatarColors[name.length % avatarColors.length] }}
          >
            {initials}
          </div>
        )}
        <div className="cd-review-info">
          <div className="cd-review-name">{name}</div>
          <div className="cd-review-date">{date}</div>
        </div>
        <div className="cd-review-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={`bi ${star <= rating ? 'bi-star-fill' : 'bi-star'}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <p className="cd-review-message">{message}</p>
    </article>
  );
}

export default CoachReviewCard;

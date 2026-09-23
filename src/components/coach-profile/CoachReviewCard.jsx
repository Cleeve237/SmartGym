export default function CoachReviewCard({ review }) {
  const initials = review.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="cp-review">
      <div className="cp-review-header">
        <div className="cp-review-avatar" style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary)' }}>
          <span style={{ fontSize: 11 }}>{initials}</span>
        </div>
        <div>
          <div className="cp-review-author">{review.author}</div>
          <div className="d-flex align-items-center gap-2">
            <span className="d-inline-flex align-items-center" style={{ color: '#F59E0B', fontSize: '.75rem' }}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <i key={i} className="bi bi-star-fill" style={{ fontSize: 10 }} />
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <i key={i} className="bi bi-star" style={{ fontSize: 10, color: 'var(--color-gray-300)' }} />
              ))}
            </span>
            <span className="cp-review-date">{review.city} · {review.date}</span>
          </div>
        </div>
      </div>
      <div className="cp-review-text">"{review.text}"</div>
    </div>
  );
}

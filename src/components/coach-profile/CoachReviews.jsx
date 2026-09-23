import CoachReviewCard from './CoachReviewCard';

export default function CoachReviews({ reviews }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-chat-quote-fill" />
        <h2>Avis clients ({reviews.length})</h2>
      </div>
      <div>
        {reviews.map((r) => (
          <CoachReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  );
}

import ProgramReviewCard from './ProgramReviewCard';

function ProgramReviews({ reviews }) {
  if (!reviews?.length) return null;

  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-chat-quote" />
          Avis ({reviews.length})
        </h2>
      </div>
      <div className="pg-section-body">
        {reviews.map((review, i) => (
          <ProgramReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ProgramReviews;

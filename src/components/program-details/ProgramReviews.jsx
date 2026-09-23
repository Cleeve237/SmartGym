import ReviewCard from './ReviewCard';

function ProgramReviews({ reviews }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-chat-quote" /><h2>Avis ({reviews.length})</h2>
      </div>
      <div>
        {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
      </div>
    </div>
  );
}
export default ProgramReviews;

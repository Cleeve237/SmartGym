export default function ReviewCard({ review }) {
  return (
    <div className="cd-review">
      <div className="cd-review-top">
        <span className="cd-review-author">{review.author}</span>
        <div className="cd-review-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <i key={s} className={`bi ${s <= review.rating ? "bi-star-fill" : "bi-star"}`} />
          ))}
        </div>
      </div>
      <div className="cd-review-text">{review.text}</div>
      <div className="cd-review-date">{review.date}</div>
    </div>
  );
}

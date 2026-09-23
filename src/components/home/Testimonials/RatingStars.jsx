function RatingStars({ rating, maxStars = 5 }) {
  return (
    <span className="testimonial-card-rating">
      <span className="testimonial-card-rating-stars">
        {Array.from({ length: maxStars }, (_, i) => (
          <i
            key={i}
            className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
          />
        ))}
      </span>
      <span className="testimonial-card-rating-value">{rating}.0</span>
    </span>
  );
}

export default RatingStars;

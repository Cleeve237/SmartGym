import RatingStars from './RatingStars';

function TestimonialCard({ name, city, goal, message, rating, photo, avatarClass }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <article className="testimonial-card">
      <div className="testimonial-card-quote" aria-hidden="true">
        <i className="bi bi-quote" />
      </div>

      <div className="testimonial-card-header">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="testimonial-card-avatar"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={`testimonial-card-avatar ${avatarClass}`}>
            {initials}
          </div>
        )}
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">{name}</h3>
          <p className="testimonial-card-meta">
            {city}
            {goal && (
              <span className="testimonial-card-meta-badge">{goal}</span>
            )}
          </p>
        </div>
      </div>

      <div className="testimonial-card-body">
        <p className="testimonial-card-message">{message}</p>
      </div>

      <footer className="testimonial-card-footer">
        <RatingStars rating={rating} />
      </footer>
    </article>
  );
}

export default TestimonialCard;

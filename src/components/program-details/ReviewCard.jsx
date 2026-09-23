function ReviewCard({ review }) {
  const initials = review.author.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  return (
    <div className="pd-review">
      <div className="pd-review-header">
        <div className="pd-review-avatar">{initials}</div>
        <div>
          <div className="pd-review-author">{review.author}</div>
          <div className="pd-review-date">{review.date} · {review.city}</div>
        </div>
        <div style={{marginLeft:'auto',display:'flex',gap:'.15rem'}}>
          {[1,2,3,4,5].map(s => (
            <i key={s} className={`bi ${s <= review.rating ? 'bi-star-fill' : 'bi-star'}`} style={{color:'#F59E0B',fontSize:'.75rem'}} />
          ))}
        </div>
      </div>
      <p className="pd-review-text">{review.text}</p>
    </div>
  );
}
export default ReviewCard;

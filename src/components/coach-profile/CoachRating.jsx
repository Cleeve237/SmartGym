export default function CoachRating({ rating, count, showCount = true }) {
  return (
    <span className="d-inline-flex align-items-center gap-1" style={{ color: '#F59E0B', fontSize: '.85rem' }}>
      <i className="bi bi-star-fill" />
      <strong>{rating}</strong>
      {showCount && <small className="text-muted">({count})</small>}
    </span>
  );
}

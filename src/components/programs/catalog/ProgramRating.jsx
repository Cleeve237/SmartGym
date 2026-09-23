function ProgramRating({ rating, reviews }) {
  return (
    <div className="pc-rating">
      <i className="bi bi-star-fill" />
      <span>{rating?.toFixed(1)}</span>
      {reviews !== undefined && <span style={{color:'var(--color-gray-400)',marginLeft:'.15rem'}}>({reviews})</span>}
    </div>
  );
}
export default ProgramRating;

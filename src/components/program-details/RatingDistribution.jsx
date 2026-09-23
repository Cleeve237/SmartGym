function RatingDistribution({ reviews }) {
  const dist = [0,0,0,0,0];
  reviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) dist[5 - r.rating]++; });
  const max = Math.max(...dist, 1);

  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-star" style={{color:'#F59E0B'}} /><h2>Avis des clients</h2>
      </div>
      <div className="pd-rating-dist">
        {[5,4,3,2,1].map((star) => (
          <div key={star} className="pd-rating-row">
            <span className="pd-rating-label">{'★'.repeat(star)}{'☆'.repeat(5-star)}</span>
            <div className="pd-rating-bar">
              <div className="pd-rating-fill" style={{width:`${(dist[5-star]/max)*100}%`}} />
            </div>
            <span className="pd-rating-count">{dist[5-star]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RatingDistribution;

export default function CoachRatingDistribution({ reviews }) {
  const dist = [0, 0, 0, 0, 0];
  reviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) dist[5 - r.rating]++; });
  const max = Math.max(...dist, 1);
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-bar-chart-fill" />
        <h2>Répartition des notes</h2>
      </div>
      <div className="cp-rating-dist">
        {dist.map((count, i) => (
          <div key={i} className="cp-rating-row">
            <span className="cp-rating-label">{5 - i} ★</span>
            <div className="cp-rating-bar">
              <div className="cp-rating-fill" style={{ width: `${(count / max) * 100}%` }} />
            </div>
            <span className="cp-rating-count">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

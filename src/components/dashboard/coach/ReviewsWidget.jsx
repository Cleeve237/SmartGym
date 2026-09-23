import ReviewCard from "./ReviewCard";

const REVIEWS = [
  { id: "rv1", author: "Paul Njoya", rating: 5, text: "Excellent coach ! Très professionnel et motivant. Les séances sont variées et adaptées à mon niveau.", date: "Il y a 2 jours" },
  { id: "rv2", author: "Marie Kamga", rating: 5, text: "Je recommande vivement. Mon coach a su comprendre mes objectifs et m'accompagner efficacement.", date: "Il y a 5 jours" },
  { id: "rv3", author: "Jean Mbarga", rating: 4, text: "Très bon programme, resultats visibles en peu de temps. Juste un peu court parfois.", date: "Il y a 1 semaine" },
];

export default function ReviewsWidget() {
  const avg = REVIEWS.length
    ? (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1)
    : "0.0";

  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-star" /> Avis clients
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <i className="bi bi-star-fill" style={{ color: "var(--color-warning)", fontSize: "0.75rem" }} />
          <span style={{ fontSize: "var(--font-size-sm)", fontWeight: 700, color: "var(--color-dark)" }}>{avg}</span>
          <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>({REVIEWS.length})</span>
        </div>
      </div>
      <div className="cd-widget-body--flush">
        {REVIEWS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-star" /></div>
            <div className="cd-empty-title">Aucun avis</div>
            <div className="cd-empty-text">Les avis de vos clients apparaîtront ici.</div>
          </div>
        ) : (
          REVIEWS.map((r) => <ReviewCard key={r.id} review={r} />)
        )}
      </div>
    </div>
  );
}

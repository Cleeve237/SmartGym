const REVIEWS = [
  { id: "r1", author: "Paul Njoya", rating: 5, text: "Excellent coach, très professionnel. Je recommande vivement.", coach: "Marc Bella", status: "approved" },
  { id: "r2", author: "Marie Kamga", rating: 2, text: "Séance correcte mais en retard de 15 minutes.", coach: "Jean Mbarga", status: "pending" },
  { id: "r3", author: "David Ngono", rating: 1, text: "Très déçu, coach non préparé.", coach: "Claire Fouda", status: "flagged" },
];

export default function ReviewModerationWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-star" /> Modération des avis
        </div>
        <span className="adm-badge adm-badge--warning">{REVIEWS.filter((r) => r.status === "pending").length} en attente</span>
      </div>
      <div className="adm-widget-body--flush">
        {REVIEWS.length === 0 ? (
          <div className="adm-empty">
            <div className="adm-empty-icon"><i className="bi bi-star" /></div>
            <div className="adm-empty-title">Aucun avis</div>
            <div className="adm-empty-text">Les avis à modérer apparaîtront ici.</div>
          </div>
        ) : (
          REVIEWS.map((r) => (
            <div key={r.id} className="adm-review">
              <div className="adm-review-avatar"><i className="bi bi-person-fill" /></div>
              <div className="adm-review-info">
                <div className="adm-review-top">
                  <span className="adm-review-author">{r.author} → {r.coach}</span>
                  <div className="adm-review-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i key={s} className={`bi ${s <= r.rating ? "bi-star-fill" : "bi-star"}`} />
                    ))}
                  </div>
                </div>
                <div className="adm-review-text">{r.text}</div>
                <span className={`adm-badge adm-badge--${r.status === "approved" ? "success" : r.status === "flagged" ? "danger" : "warning"}`} style={{ marginTop: "0.3rem" }}>
                  {r.status === "approved" ? "Approuvé" : r.status === "flagged" ? "Signalé" : "En attente"}
                </span>
              </div>
              {r.status === "pending" && (
                <div className="adm-review-actions">
                  <button className="adm-btn-sm adm-btn-sm--success" title="Approuver"><i className="bi bi-check-lg" /></button>
                  <button className="adm-btn-sm adm-btn-sm--ghost" title="Masquer"><i className="bi bi-eye-slash" /></button>
                  <button className="adm-btn-sm adm-btn-sm--danger" title="Supprimer"><i className="bi bi-trash" /></button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

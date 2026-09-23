const REQUESTS = [
  { id: "r1", clientName: "David Ngono", date: "2026-07-29", program: "Musculation", time: "10:00" },
  { id: "r2", clientName: "Claire Fouda", date: "2026-07-30", program: "Yoga & Flexibilité", time: "16:00" },
  { id: "r3", clientName: "Patrick Tchinda", date: "2026-07-31", program: "Cardio & HIIT", time: "08:00" },
];

export default function BookingRequestsWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-inbox" /> Demandes de réservation
        </div>
        <span className="cd-badge cd-badge--warning">{REQUESTS.length} en attente</span>
      </div>
      <div className="cd-widget-body--flush">
        {REQUESTS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-inbox" /></div>
            <div className="cd-empty-title">Aucune demande</div>
            <div className="cd-empty-text">Les nouvelles demandes de réservation apparaîtront ici.</div>
          </div>
        ) : (
          REQUESTS.map((r) => {
            const fmtDate = new Date(r.date).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
            return (
              <div key={r.id} className="cd-session">
                <div className="cd-session-avatar"><i className="bi bi-person-fill" /></div>
                <div className="cd-session-info">
                  <div className="cd-session-top">
                    <span className="cd-session-client">{r.clientName}</span>
                    <span className="cd-badge cd-badge--warning">Nouvelle</span>
                  </div>
                  <div className="cd-session-details">
                    <span><i className="bi bi-calendar3" /> {fmtDate}</span>
                    <span><i className="bi bi-clock" /> {r.time}</span>
                    <span><i className="bi bi-tag" /> {r.program}</span>
                  </div>
                </div>
                <div className="cd-session-actions">
                  <button className="cd-btn-sm cd-btn-sm--success"><i className="bi bi-check-lg" /></button>
                  <button className="cd-btn-sm cd-btn-sm--danger"><i className="bi bi-x-lg" /></button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

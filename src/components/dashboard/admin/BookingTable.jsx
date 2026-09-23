const BOOKINGS = [
  { id: "b1", client: "Paul Njoya", coach: "Marc Bella", date: "2026-07-28", amount: 5000, status: "confirmed" },
  { id: "b2", client: "Marie Kamga", coach: "Jean Mbarga", date: "2026-07-29", amount: 4000, status: "pending" },
  { id: "b3", client: "Sophie Bella", coach: "Marc Bella", date: "2026-07-25", amount: 8000, status: "completed" },
  { id: "b4", client: "David Ngono", coach: "Claire Fouda", date: "2026-07-24", amount: 4500, status: "cancelled" },
];

export default function BookingTable() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-calendar-check" /> Réservations récentes
        </div>
        <a href="/admin/bookings" className="adm-widget-link">Voir tout <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="adm-widget-body--flush">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Coach</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {BOOKINGS.map((b) => {
                const fmtDate = new Date(b.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
                return (
                  <tr key={b.id}>
                    <td style={{ fontWeight: 600, color: "var(--color-dark)" }}>{b.client}</td>
                    <td>{b.coach}</td>
                    <td>{fmtDate}</td>
                    <td style={{ fontWeight: 600 }}>{b.amount.toLocaleString()} FCFA</td>
                    <td>
                      <span className={`adm-badge adm-badge--${b.status === "confirmed" ? "success" : b.status === "pending" ? "warning" : b.status === "completed" ? "info" : "danger"}`}>
                        {b.status === "confirmed" ? "Confirmée" : b.status === "pending" ? "En attente" : b.status === "completed" ? "Terminée" : "Annulée"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

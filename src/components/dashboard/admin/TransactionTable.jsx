const TRANSACTIONS = [
  { id: "t1", user: "Paul Njoya", amount: 5250, method: "MTN MoMo", date: "2026-07-28", status: "success" },
  { id: "t2", user: "Marie Kamga", amount: 4200, method: "Orange Money", date: "2026-07-27", status: "success" },
  { id: "t3", user: "David Ngono", amount: 8400, method: "Carte bancaire", date: "2026-07-26", status: "failed" },
  { id: "t4", user: "Sophie Bella", amount: 4725, method: "MTN MoMo", date: "2026-07-25", status: "success" },
];

export default function TransactionTable() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-credit-card" /> Transactions récentes
        </div>
        <a href="/admin/payments" className="adm-widget-link">Voir tout <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="adm-widget-body--flush">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Utilisateur</th>
                <th>Montant</th>
                <th>Méthode</th>
                <th>Date</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.map((t) => {
                const fmtDate = new Date(t.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
                return (
                  <tr key={t.id}>
                    <td style={{ fontWeight: 600, color: "var(--color-dark)" }}>{t.user}</td>
                    <td style={{ fontWeight: 600 }}>{t.amount.toLocaleString()} FCFA</td>
                    <td>{t.method}</td>
                    <td>{fmtDate}</td>
                    <td>
                      <span className={`adm-badge adm-badge--${t.status === "success" ? "success" : "danger"}`}>
                        {t.status === "success" ? "Réussi" : "Échoué"}
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

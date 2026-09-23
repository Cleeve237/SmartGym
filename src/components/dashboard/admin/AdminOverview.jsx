export default function AdminOverview() {
  const items = [
    { value: "1 248", label: "Utilisateurs totaux", icon: "bi-people" },
    { value: "86", label: "Coachs actifs", icon: "bi-person-workspace" },
    { value: "3 847", label: "Réservations", icon: "bi-calendar-check" },
    { value: "2.4M", label: "Revenus (FCFA)", icon: "bi-wallet2" },
  ];

  return (
    <div className="adm-overview">
      {items.map((item) => (
        <div key={item.label} className="adm-overview-card">
          <i className={`bi ${item.icon}`} style={{ fontSize: "1.25rem", color: "var(--adm-accent)", marginBottom: "0.5rem", display: "block" }} />
          <div className="adm-overview-value">{item.value}</div>
          <div className="adm-overview-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

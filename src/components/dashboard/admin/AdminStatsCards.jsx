import AdminStatCard from "./AdminStatCard";

const STATS = [
  { icon: "bi-people-fill", iconColor: "blue", label: "Clients", value: "1 162", change: "+48 ce mois", changeDir: "up" },
  { icon: "bi-person-workspace", iconColor: "indigo", label: "Coachs", value: "86", change: "+5 en attente", changeDir: "up" },
  { icon: "bi-calendar-check-fill", iconColor: "green", label: "Réservations aujourd'hui", value: "24", change: "+8 vs hier", changeDir: "up" },
  { icon: "bi-wallet2", iconColor: "purple", label: "Revenus mensuels", value: "2.4M", change: "+15% vs mois dernier", changeDir: "up" },
  { icon: "bi-check-circle-fill", iconColor: "teal", label: "Paiements réussis", value: "3 612", change: "97.8% taux", changeDir: "up" },
  { icon: "bi-x-circle-fill", iconColor: "red", label: "Paiements échoués", value: "78", change: "-12% vs mois dernier", changeDir: "down" },
  { icon: "bi-star-fill", iconColor: "yellow", label: "Avis publiés", value: "892", change: "+34 cette semaine", changeDir: "up" },
  { icon: "bi-flag-fill", iconColor: "orange", label: "Signalements", value: "7", change: "3 en attente", changeDir: "up" },
];

export default function AdminStatsCards() {
  return (
    <div className="adm-stats">
      {STATS.map((s) => (
        <AdminStatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

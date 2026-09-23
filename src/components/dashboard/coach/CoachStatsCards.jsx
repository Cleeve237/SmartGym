import CoachStatCard from "./CoachStatCard";

const STATS = [
  { icon: "bi-people-fill", iconColor: "green", label: "Clients actifs", value: "24", change: "+3 ce mois", changeDir: "up" },
  { icon: "bi-calendar-check-fill", iconColor: "blue", label: "Séances cette semaine", value: "8", change: "+2 vs semaine dernière", changeDir: "up" },
  { icon: "bi-hourglass-split", iconColor: "orange", label: "Réservations en attente", value: "3", change: "À traiter", changeDir: "up" },
  { icon: "bi-star-fill", iconColor: "yellow", label: "Note moyenne", value: "4.9", change: "+0.1", changeDir: "up" },
  { icon: "bi-wallet2", iconColor: "purple", label: "Revenus mensuels", value: "385K", change: "+12% vs mois dernier", changeDir: "up" },
  { icon: "bi-eye-fill", iconColor: "red", label: "Vues du profil", value: "1.2K", change: "+180 cette semaine", changeDir: "up" },
];

export default function CoachStatsCards() {
  return (
    <div className="cd-stats">
      {STATS.map((s) => (
        <CoachStatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

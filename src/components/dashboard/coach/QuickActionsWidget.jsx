import { Link } from "react-router-dom";

const ACTIONS = [
  { icon: "bi-plus-circle", label: "Ajouter programme", to: "/coach/programmes/create" },
  { icon: "bi-clock-history", label: "Modifier disponibilité", to: "/coach/availability" },
  { icon: "bi-calendar-check", label: "Voir réservations", to: "/coach/bookings" },
  { icon: "bi-person", label: "Voir profil public", to: "/coach/profile" },
  { icon: "bi-people", label: "Gérer clients", to: "/coach/dashboard#clients" },
];

export default function QuickActionsWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-lightning" /> Actions rapides
        </div>
      </div>
      <div className="cd-widget-body">
        <div className="cd-quick-actions">
          {ACTIONS.map((a) => (
            <Link key={a.label} to={a.to} className="cd-quick-action">
              <i className={`bi ${a.icon}`} />
              <span>{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

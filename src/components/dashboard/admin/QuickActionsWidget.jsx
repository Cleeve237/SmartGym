import { Link } from "react-router-dom";

const ACTIONS = [
  { icon: "bi-person-plus", label: "Ajouter coach", to: "/admin/coaches" },
  { icon: "bi-people", label: "Voir utilisateurs", to: "/admin/users" },
  { icon: "bi-download", label: "Exporter données", to: "#" },
  { icon: "bi-gear", label: "Configurer plateforme", to: "/admin/settings" },
];

export default function QuickActionsWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-lightning" /> Actions rapides
        </div>
      </div>
      <div className="adm-widget-body">
        <div className="adm-quick-grid">
          {ACTIONS.map((a) => (
            <Link key={a.label} to={a.to} className="adm-quick-action">
              <i className={`bi ${a.icon}`} />
              <span>{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

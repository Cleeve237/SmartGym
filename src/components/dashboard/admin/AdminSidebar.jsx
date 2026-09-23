import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "Dashboard", icon: "bi-grid-1x2", to: "/admin/dashboard" },
  { label: "Utilisateurs", icon: "bi-people", to: "/admin/users" },
  { label: "Coachs", icon: "bi-person-workspace", to: "/admin/coaches" },
  { label: "Réservations", icon: "bi-calendar-check", to: "/admin/bookings" },
  { divider: true },
  { label: "Paiements", icon: "bi-wallet2", to: "/admin/payments" },
  { label: "Avis", icon: "bi-star", to: "/admin/statistics" },
  { label: "Catégories", icon: "bi-tags", to: "/admin/categories" },
  { divider: true },
  { label: "Paramètres", icon: "bi-gear", to: "/admin/settings" },
];

export default function AdminSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`adm-sidebar-overlay ${open ? "adm-sidebar-overlay--visible" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`adm-sidebar ${open ? "adm-sidebar--open" : ""}`}>
        <Link to="/admin/dashboard" className="adm-sidebar-logo">
          <div className="adm-sidebar-logo-icon"><i className="bi bi-shield-lock" /></div>
          <span className="adm-sidebar-logo-text">Admin Panel</span>
        </Link>
        <ul className="adm-sidebar-nav">
          {NAV.map((item, i) =>
            item.divider ? (
              <div key={i} className="adm-sidebar-divider" />
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`adm-sidebar-link ${location.pathname === item.to ? "adm-sidebar-link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <i className={`bi ${item.icon}`} />
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
      <button className="adm-sidebar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
      </button>
    </>
  );
}

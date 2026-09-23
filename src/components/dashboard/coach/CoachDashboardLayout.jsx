import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "bi-grid-1x2", to: "/coach/dashboard" },
  { label: "Réservations", icon: "bi-calendar-check", to: "/coach/bookings" },
  { label: "Clients", icon: "bi-people", to: "/coach/dashboard#clients" },
  { label: "Programmes", icon: "bi-journal-richtext", to: "/coach/programmes" },
  { divider: true },
  { label: "Calendrier", icon: "bi-calendar3", to: "/coach/availability" },
  { label: "Revenus", icon: "bi-wallet2", to: "/coach/revenue" },
  { label: "Avis", icon: "bi-star", to: "/coach/reviews" },
  { divider: true },
  { label: "Profil", icon: "bi-person", to: "/coach/profile" },
  { label: "Paramètres", icon: "bi-gear", to: "/coach/settings" },
];

export default function CoachDashboardLayout({ children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="cd-layout">
      <div
        className={`cd-sidebar-overlay ${sidebarOpen ? "cd-sidebar-overlay--visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside className={`cd-sidebar ${sidebarOpen ? "cd-sidebar--open" : ""}`}>
        <Link to="/coach/dashboard" className="cd-sidebar-logo">
          <div className="cd-sidebar-logo-icon"><i className="bi bi-trophy" /></div>
          <span className="cd-sidebar-logo-text">Coach Space</span>
        </Link>
        <ul className="cd-sidebar-nav">
          {NAV_ITEMS.map((item, i) =>
            item.divider ? (
              <div key={i} className="cd-sidebar-divider" />
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`cd-sidebar-link ${location.pathname === item.to ? "cd-sidebar-link--active" : ""}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className={`bi ${item.icon}`} />
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>

      <main className="cd-main">{children}</main>

      <aside className="cd-right" />

      <button className="cd-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menu">
        <i className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"}`} />
      </button>
    </div>
  );
}

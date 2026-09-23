export default function AdminHeader({ notifCount }) {
  return (
    <div className="adm-header">
      <div className="adm-header-left">
        <div className="adm-header-avatar"><i className="bi bi-shield-lock" /></div>
        <div>
          <div className="adm-header-greeting">
            Bonjour Administrateur <span role="img" aria-label="salut">&#x1F44B;</span>
          </div>
          <div className="adm-header-sub">Vue d&apos;ensemble de la plateforme SmartGym</div>
        </div>
      </div>
      <div className="adm-header-right">
        <div className="adm-search">
          <i className="bi bi-search" />
          <input type="text" placeholder="Rechercher..." aria-label="Recherche globale" />
        </div>
        <button className="adm-icon-btn" aria-label="Notifications">
          <i className="bi bi-bell" />
          {notifCount > 0 && <span className="adm-icon-btn-badge">{notifCount}</span>}
        </button>
        <a href="/admin/settings" className="adm-icon-btn" aria-label="Profil">
          <i className="bi bi-person-circle" />
        </a>
      </div>
    </div>
  );
}

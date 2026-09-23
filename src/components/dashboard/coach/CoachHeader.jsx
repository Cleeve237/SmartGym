export default function CoachHeader({ coach, notifCount }) {
  return (
    <div className="cd-header">
      <div className="cd-header-left">
        <div className="cd-header-avatar">
          {coach.photo ? (
            <img src={coach.photo} alt="" width="48" height="48" style={{ borderRadius: "50%", objectFit: "cover" }} />
          ) : (
            <i className="bi bi-person-fill" />
          )}
        </div>
        <div>
          <div className="cd-header-greeting">
            Bonjour Coach <span role="img" aria-label="salut">&#x1F44B;</span>
          </div>
          <div className="cd-header-sub">
            {coach.name} &middot; {coach.speciality} &middot; {coach.city}
          </div>
        </div>
      </div>
      <div className="cd-header-right">
        <button className="cd-icon-btn" aria-label="Notifications">
          <i className="bi bi-bell" />
          {notifCount > 0 && <span className="cd-icon-btn-badge">{notifCount}</span>}
        </button>
        <a href="/coach/settings" className="cd-icon-btn" aria-label="Paramètres">
          <i className="bi bi-gear" />
        </a>
      </div>
    </div>
  );
}

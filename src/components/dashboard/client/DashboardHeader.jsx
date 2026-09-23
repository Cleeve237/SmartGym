import { Link } from 'react-router-dom';

function DashboardHeader() {
  return (
    <div className="dash-header">
      <div className="dash-header-left">
        <div className="dash-header-avatar" aria-hidden="true">J</div>
        <div>
          <h1 className="dash-header-greeting">Bonjour Jean 👋</h1>
          <p className="dash-header-date">Jeudi 24 juillet 2026</p>
        </div>
      </div>
      <div className="dash-header-right">
        <div className="dash-search">
          <i className="bi bi-search" />
          <input type="text" placeholder="Rechercher..." aria-label="Rechercher" />
        </div>
        <Link to="/client/notifications" className="dash-header-btn" aria-label="Notifications">
          <i className="bi bi-bell" />
          <span className="dash-header-btn-badge">3</span>
        </Link>
        <Link to="/client/settings" className="dash-header-btn" aria-label="Parametres">
          <i className="bi bi-gear" />
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;

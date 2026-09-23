import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function ProfileHeader({ user, role, editPath, badgeLabel }) {
  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()
    : '?';

  return (
    <div className="prf-header">
      <div className="prf-header-banner" />
      <div className="prf-header-body">
        <div className="prf-header-avatar-wrapper">
          <div className="prf-avatar">
            {user?.avatar ? (
              <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
            ) : (
              <div className="prf-avatar-placeholder">{initials}</div>
            )}
          </div>
        </div>

        <div className="prf-header-info">
          <div>
            <h1 className="prf-header-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <div className="prf-header-meta">
              {user?.city && (
                <span className="prf-header-meta-item">
                  <i className="bi bi-geo-alt" />
                  {user.city}
                </span>
              )}
              {user?.email && (
                <span className="prf-header-meta-item">
                  <i className="bi bi-envelope" />
                  {user.email}
                </span>
              )}
              {badgeLabel && (
                <span className={`prf-header-badge prf-header-badge--${role}`}>
                  <i className={`bi ${role === 'coach' ? 'bi-mortarboard' : 'bi-person'}`} />
                  {badgeLabel}
                </span>
              )}
            </div>
          </div>

          {editPath && (
            <Link to={editPath}>
              <Button variant="outline-primary" icon="bi-pencil">
                Modifier
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;

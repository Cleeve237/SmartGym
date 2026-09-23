import { Link } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { DASHBOARD_PATHS } from '../../utils/roles';

function AccessDeniedPage() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const dashboardPath =
    isAuthenticated && user ? DASHBOARD_PATHS[user.role] || '/client/dashboard' : '/login';

  const dashboardLabel =
    isAuthenticated && user ? 'Retour au tableau de bord' : 'Se connecter';

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <i
              className="bi bi-shield-lock"
              style={{
                fontSize: '6rem',
                color: 'var(--color-danger)',
                lineHeight: 1,
              }}
            />
          </div>

          <h1
            className="display-1 fw-bold mb-0"
            style={{ color: 'var(--color-secondary)' }}
          >
            403
          </h1>

          <h2 className="mb-3">Accès refusé</h2>

          <p
            className="text-muted mb-4"
            style={{ maxWidth: '420px', margin: '0 auto 1.5rem' }}
          >
            Vous n&apos;avez pas l&apos;autorisation d&apos;accéder à cette
            page.
          </p>

          <Link to={dashboardPath} className="btn btn-primary btn-lg">
            <i className="bi bi-arrow-left me-2" />
            {dashboardLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccessDeniedPage;

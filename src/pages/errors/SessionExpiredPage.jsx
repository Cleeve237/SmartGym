import { Link } from 'react-router-dom';

function SessionExpiredPage() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#F8FAFC' }}>
      <div className="text-center px-4" style={{ maxWidth: 440 }}>
        <div
          className="d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: '#FEF2F2',
            color: '#DC2626',
            fontSize: 36,
          }}
        >
          <i className="bi bi-shield-exclamation" />
        </div>

        <h1 className="fw-bold mb-2" style={{ color: '#0F172A', fontSize: '1.75rem' }}>
          Votre session a expir\u00e9
        </h1>

        <p className="mb-4" style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Votre session de connexion a expir\u00e9. Veuillez vous reconnecter pour continuer \u00e0 utiliser SmartGym.
        </p>

        <div className="d-flex flex-column gap-2">
          <Link
            to="/login"
            className="btn btn-lg border-0 text-white fw-semibold py-2 px-4"
            style={{
              background: '#16A34A',
              borderRadius: 12,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#15803D';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#16A34A';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <i className="bi bi-box-arrow-in-right me-2" />
            Se reconnecter
          </Link>
          <Link
            to="/"
            className="btn btn-lg fw-semibold py-2 px-4"
            style={{
              borderRadius: 12,
              border: '1px solid #CBD5E1',
              color: '#475569',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#94A3B8';
              e.currentTarget.style.background = '#F1F5F9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <i className="bi bi-house me-2" />
            Retour \u00e0 l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SessionExpiredPage;

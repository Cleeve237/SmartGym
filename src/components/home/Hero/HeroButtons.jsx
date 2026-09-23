import { Link } from 'react-router-dom';

function HeroButtons() {
  return (
    <div className="d-flex flex-wrap gap-3 mb-5" style={{ animation: 'fadeInUp 0.6s ease 0.3s forwards', opacity: 0 }}>
      <Link
        to="/coaches"
        className="btn btn-primary btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
        style={{ fontWeight: 'var(--font-weight-semibold)' }}
      >
        <i className="bi bi-search" />
        Trouver un coach
      </Link>
      <Link
        to="/programmes"
        className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2"
        style={{
          backgroundColor: 'transparent',
          color: 'var(--color-white)',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          fontWeight: 'var(--font-weight-medium)',
        }}
      >
        Voir les programmes
        <i className="bi bi-arrow-right" />
      </Link>
    </div>
  );
}

export default HeroButtons;

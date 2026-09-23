import { Link } from 'react-router-dom';

export default function CoachPrograms({ programs }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-journal-text" />
        <h2>Programmes ({programs.length})</h2>
      </div>
      <div className="cp-prog-grid">
        {programs.map((p) => (
          <Link key={p.id} to={`/programs/${p.id}`} className="text-decoration-none">
            <div className="cp-prog-card">
              <div className="cp-prog-card-body">
                <div className="cp-prog-card-title">{p.name}</div>
                <div className="cp-prog-card-desc">{p.desc}</div>
                <div className="cp-prog-card-meta">
                  <span><i className="bi bi-calendar" /> {p.weeks} sem.</span>
                  <span><i className="bi bi-clock" /> {p.sessions}</span>
                </div>
              </div>
              <div className="cp-prog-card-footer">
                <span className="cp-prog-card-price">{p.price.toLocaleString()} FCFA</span>
                <i className="bi bi-arrow-right" style={{ color: 'var(--color-primary)' }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

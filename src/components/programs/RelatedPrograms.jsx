import { Link } from 'react-router-dom';

function RelatedPrograms({ programs }) {
  if (!programs?.length) return null;

  return (
    <div className="mt-4">
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-secondary)',
        marginBottom: '1rem'
      }}>
        Programmes similaires
      </h3>
      <div className="row g-3">
        {programs.map((p) => (
          <div key={p.id} className="col-md-4">
            <div className="pg-card">
              <div className="pg-card-image" style={{ height: 120 }}>
                <div className="pg-card-image-placeholder">
                  <i className="bi bi-trophy" />
                </div>
              </div>
              <div className="pg-card-body" style={{ padding: '0.85rem' }}>
                <span className="pg-card-category" style={{ fontSize: '0.6rem' }}>
                  {p.category}
                </span>
                <h4 className="pg-card-title" style={{ fontSize: 'var(--font-size-base)' }}>
                  {p.title}
                </h4>
                <div className="pg-card-meta" style={{ paddingTop: '0.5rem' }}>
                  <span className="pg-card-meta-item">
                    <i className="bi bi-calendar3" />
                    {p.weeks} sem.
                  </span>
                  <div className="pg-card-rating">
                    <i className="bi bi-star-fill" />
                    <span>{p.rating?.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="pg-card-footer" style={{ padding: '0.5rem 0.85rem' }}>
                <span className="pg-card-price" style={{ fontSize: 'var(--font-size-base)' }}>
                  {p.price?.toLocaleString()} <small>FCFA</small>
                </span>
                <Link to={`/programs/${p.id}`} className="btn btn-sm btn-outline-primary">
                  Voir
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPrograms;

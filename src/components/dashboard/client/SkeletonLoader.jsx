function SkeletonLoader({ rows = 3 }) {
  return (
    <div className="dash-skeleton" aria-busy="true" aria-label="Chargement">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="dash-skeleton-row">
          <div className="dash-skeleton-circle" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div className={`dash-skeleton-line ${i === 0 ? 'dash-skeleton-line--lg' : 'dash-skeleton-line--md'}`} />
            <div className="dash-skeleton-line dash-skeleton-line--sm" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;

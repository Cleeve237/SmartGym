import './Skeleton.css';

export function Skeleton({ variant = 'text', width, height, className = '', ...props }) {
  const variantClass = variant.startsWith('avatar') ? `ds-skeleton--${variant}` : `ds-skeleton--${variant}`;

  return (
    <div
      className={`ds-skeleton ${variantClass} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonCard({ lines = 3, header = true }) {
  return (
    <div className="ds-skeleton--card">
      {header && (
        <div className="ds-skeleton--card-header">
          <Skeleton variant="avatar-md" />
          <div style={{ flex: 1 }}>
            <Skeleton variant="title" />
          </div>
        </div>
      )}
      <div className="ds-skeleton--card-body">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} variant="text" style={{ width: `${70 + Math.random() * 30}%` }} />
        ))}
      </div>
    </div>
  );
}

export function SkeletonList({ items = 5 }) {
  return (
    <div className="ds-skeleton-list" aria-hidden="true">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Skeleton variant="avatar-sm" />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" style={{ width: `${40 + Math.random() * 40}%` }} />
            <Skeleton variant="text" style={{ width: `${50 + Math.random() * 30}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonTable({ rows = 5, cols = 4 }) {
  return (
    <div className="ds-skeleton-table" aria-hidden="true">
      <div className="ds-skeleton-table-row">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="ds-skeleton-table-cell" style={{ height: '1.25rem' }} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="ds-skeleton-table-row">
          {Array.from({ length: cols }).map((_, c) => (
            <div key={c} className="ds-skeleton-table-cell">
              <Skeleton variant="text" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonProfile() {
  return (
    <div className="ds-skeleton-profile" aria-hidden="true">
      <Skeleton variant="avatar-xl" />
      <div className="ds-skeleton-profile-info">
        <Skeleton variant="title" />
        <Skeleton variant="text" style={{ width: '40%' }} />
        <div style={{ marginTop: '1rem' }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="pc-skeleton">
      <div className="pc-skeleton-img" />
      <div className="pc-skeleton-body">
        <div className="pc-skeleton-line pc-skeleton-line--sm" />
        <div className="pc-skeleton-line pc-skeleton-line--md" />
        <div className="pc-skeleton-line" />
        <div className="pc-skeleton-line pc-skeleton-line--sm" />
      </div>
    </div>
  );
}

function ProgramsSkeleton({ count = 6 }) {
  return (
    <div className="pc-grid">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
export default ProgramsSkeleton;

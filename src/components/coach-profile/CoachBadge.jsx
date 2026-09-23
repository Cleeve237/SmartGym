export default function CoachBadge({ verified }) {
  if (!verified) return null;
  return (
    <span className="cp-hero-badge">
      <i className="bi bi-patch-check-fill" /> Vérifié
    </span>
  );
}

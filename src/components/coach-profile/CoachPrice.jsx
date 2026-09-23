export default function CoachPrice({ price, sessionMinutes, size = 'md' }) {
  const sizeClass = size === 'lg' ? 'fs-4' : size === 'sm' ? 'fs-6' : '';
  return (
    <div>
      <span className={`fw-bold text-primary ${sizeClass}`}>{price.toLocaleString()} FCFA</span>
      <span className="text-muted small"> / {sessionMinutes} min</span>
    </div>
  );
}

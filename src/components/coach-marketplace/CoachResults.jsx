function CoachResults({ total }) {
  return (
    <div className="mp-results-count">
      <strong>{total}</strong> coach{total !== 1 ? 's' : ''} trouv{total !== 1 ? 'es' : ''}
    </div>
  );
}

export default CoachResults;

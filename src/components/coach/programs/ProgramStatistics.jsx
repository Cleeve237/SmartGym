function ProgramStatistics({ stats }) {
  const items = [
    { key: 'views', icon: 'bi-eye', className: 'cd-pgm-stat-icon--views', value: stats?.views || 0, label: 'Vues' },
    { key: 'bookings', icon: 'bi-people', className: 'cd-pgm-stat-icon--bookings', value: stats?.bookings || 0, label: 'Reservations' },
    { key: 'conversion', icon: 'bi-graph-up', className: 'cd-pgm-stat-icon--conversion', value: `${stats?.conversion || 0}%`, label: 'Taux de conversion' },
    { key: 'rating', icon: 'bi-star-fill', className: 'cd-pgm-stat-icon--rating', value: stats?.rating?.toFixed(1) || '—', label: 'Note moyenne' },
  ];

  return (
    <div className="cd-pgm-stats">
      {items.map((item) => (
        <div key={item.key} className="cd-pgm-stat">
          <div className={`cd-pgm-stat-icon ${item.className}`}>
            <i className={`bi ${item.icon}`} aria-hidden="true" />
          </div>
          <div className="cd-pgm-stat-value">{item.value}</div>
          <div className="cd-pgm-stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default ProgramStatistics;

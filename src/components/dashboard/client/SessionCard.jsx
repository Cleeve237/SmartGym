function SessionCard({ coach, discipline, date, time, city, status }) {
  const statusClass = {
    Confirmee: 'confirmed',
    'En attente': 'pending',
    Terminee: 'completed',
  }[status] || 'pending';

  return (
    <div className="dash-session">
      <div className="dash-session-avatar">
        <i className="bi bi-person-fill" />
      </div>
      <div className="dash-session-info">
        <div className="dash-session-coach">{coach}</div>
        <div className="dash-session-details">
          <span><i className="bi bi-trophy" />{discipline}</span>
          <span><i className="bi bi-calendar3" />{date}</span>
          <span><i className="bi bi-clock" />{time}</span>
          <span><i className="bi bi-geo-alt" />{city}</span>
        </div>
      </div>
      <span className={`dash-session-status dash-session-status--${statusClass}`}>
        {status}
      </span>
      <button type="button" className="dash-session-action">
        <i className="bi bi-eye" />
        Voir
      </button>
    </div>
  );
}

export default SessionCard;

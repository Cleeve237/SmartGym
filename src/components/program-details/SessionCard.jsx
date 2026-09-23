function SessionCard({ session }) {
  return (
    <div className="pd-session">
      <div className="pd-session-num">{session.num}</div>
      <div className="pd-session-info">
        <div className="pd-session-title">{session.title}</div>
        <div className="pd-session-meta">
          <span><i className="bi bi-clock" /> {session.duration}</span>
          <span><i className="bi bi-bar-chart" /> {session.intensity}</span>
        </div>
      </div>
      <span className="pd-session-duration">{session.duration}</span>
    </div>
  );
}
export default SessionCard;

function TimelineItem({ type, text, time }) {
  const iconMap = {
    booking: 'bi-calendar-plus',
    payment: 'bi-credit-card',
    review: 'bi-star',
    session: 'bi-check-circle',
    favorite: 'bi-heart',
  };

  return (
    <div className="dash-timeline-item">
      <div className={`dash-timeline-dot dash-timeline-dot--${type}`}>
        <i className={`bi ${iconMap[type] || 'bi-circle'}`} />
      </div>
      <div>
        <div className="dash-timeline-text">{text}</div>
        <div className="dash-timeline-time">{time}</div>
      </div>
    </div>
  );
}

export default TimelineItem;

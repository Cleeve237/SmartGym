export default function CoachTimelineItem({ item }) {
  return (
    <div className="cp-timeline-item">
      <div className="cp-timeline-dot" />
      <div className="cp-timeline-title">{item.title}</div>
      <div className="cp-timeline-sub">{item.sub}</div>
      {item.date && <div className="cp-timeline-date">{item.date}</div>}
    </div>
  );
}

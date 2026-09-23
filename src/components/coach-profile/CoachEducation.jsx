import CoachTimelineItem from './CoachTimelineItem';

export default function CoachEducation({ education }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-mortarboard-fill" />
        <h2>Formation</h2>
      </div>
      <div className="cp-timeline">
        {education.map((edu, i) => (
          <CoachTimelineItem key={i} item={{ title: edu.title, sub: edu.sub }} />
        ))}
      </div>
    </div>
  );
}

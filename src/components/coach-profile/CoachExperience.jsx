import CoachTimelineItem from './CoachTimelineItem';

export default function CoachExperience({ experience }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-briefcase-fill" />
        <h2>Expérience</h2>
      </div>
      <div className="cp-timeline">
        {experience.map((exp, i) => (
          <CoachTimelineItem key={i} item={exp} />
        ))}
      </div>
    </div>
  );
}

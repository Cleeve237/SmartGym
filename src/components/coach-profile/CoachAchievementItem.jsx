export default function CoachAchievementItem({ text, icon }) {
  return (
    <div className="cp-achieve-item">
      <span className="cp-achieve-icon">{icon || <i className="bi bi-trophy-fill" />}</span>
      {text}
    </div>
  );
}

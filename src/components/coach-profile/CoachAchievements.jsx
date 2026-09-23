import CoachAchievementItem from './CoachAchievementItem';

const ICONS = ['bi bi-trophy-fill', 'bi bi-clock-fill', 'bi bi-patch-check-fill', 'bi bi-cup-hot-fill', 'bi bi-emoji-smile-fill', 'bi bi-gem', 'bi bi-stars', 'bi bi-heart-fill'];

export default function CoachAchievements({ achievements }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-trophy" />
        <h2>Achievements</h2>
      </div>
      <div className="cp-achieve-grid">
        {achievements.map((a, i) => (
          <CoachAchievementItem key={i} text={a} icon={<i className={ICONS[i % ICONS.length]} />} />
        ))}
      </div>
    </div>
  );
}

import { getCoachAvatar } from './mockCoaches';

export default function CoachAvatar({ name, size = 80, className = '' }) {
  const src = getCoachAvatar(name);
  return (
    <div
      className={`cp-hero-avatar ${className}`}
      style={{ width: size, height: size, background: '#16A34A' }}
    >
      <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

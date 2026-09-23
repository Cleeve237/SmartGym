export default function UserAvatar({ name, role, size = 32 }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const colors = { client: '#3B82F6', coach: '#16A34A', admin: '#EF4444', visitor: '#94A3B8' };
  return (
    <span className="hd-profile-avatar" style={{ width: size, height: size, fontSize: size * 0.375, background: colors[role] || colors.visitor }}>
      {initials}
    </span>
  );
}

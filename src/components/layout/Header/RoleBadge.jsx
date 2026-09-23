const labels = { client: 'Client', coach: 'Coach', admin: 'Admin', visitor: 'Visiteur' };

export default function RoleBadge({ role = 'visitor' }) {
  return (
    <span className={`hd-role-badge hd-role-badge--${role}`}>
      <i className={`bi bi-${role === 'coach' ? 'person-badge' : role === 'admin' ? 'shield' : role === 'client' ? 'person' : 'eye'}`} />
      {labels[role] || role}
    </span>
  );
}

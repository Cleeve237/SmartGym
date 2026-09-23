function RoleSelector({ selected, onChange }) {
  const roles = [
    {
      id: 'client',
      icon: 'bi-person-running',
      title: 'Client',
      desc: 'Trouvez un coach, r\u00e9servez des s\u00e9ances et suivez vos programmes sportifs.',
      badge: 'Je veux m\'entra\u00eener',
    },
    {
      id: 'coach',
      icon: 'bi-person-badge',
      title: 'Coach sportif',
      desc: 'Proposez vos services, g\u00e9rez vos clients et d\u00e9veloppez votre activit\u00e9.',
      badge: 'Je veux coacher',
    },
  ];

  return (
    <div className="auth-role-selector" role="radiogroup" aria-label="S\u00e9lection du r\u00f4le">
      {roles.map((role) => (
        <button
          key={role.id}
          type="button"
          className={`auth-role-card${selected === role.id ? ' auth-role-card--selected' : ''}`}
          onClick={() => onChange(role.id)}
          role="radio"
          aria-checked={selected === role.id}
          aria-label={role.title}
        >
          <div className="auth-role-card-icon">
            <i className={`bi ${role.icon}`} />
          </div>
          <span className="auth-role-card-title">{role.title}</span>
          <span className="auth-role-card-desc">{role.desc}</span>
          <span className="auth-role-card-badge">
            <i className="bi bi-arrow-right" />
            {role.badge}
          </span>
        </button>
      ))}
    </div>
  );
}

export default RoleSelector;

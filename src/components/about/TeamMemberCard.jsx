function TeamMemberCard({ member }) {
  return (
    <div className="ab-team-card">
      <div className="ab-team-avatar" style={{ backgroundColor: member.color }}>
        <i className="bi bi-person-fill" />
      </div>
      <h3 className="ab-team-name">{member.name}</h3>
      <p className="ab-team-role">{member.role}</p>
      <p className="ab-team-bio">{member.bio}</p>
      <div className="ab-team-socials">
        <a href="#" className="ab-team-social" aria-label={`LinkedIn de ${member.name}`} tabIndex={0}>
          <i className="bi bi-linkedin" />
        </a>
        <a href="#" className="ab-team-social" aria-label={`Twitter de ${member.name}`} tabIndex={0}>
          <i className="bi bi-twitter-x" />
        </a>
        <a href="#" className="ab-team-social" aria-label={`Email de ${member.name}`} tabIndex={0}>
          <i className="bi bi-envelope" />
        </a>
      </div>
    </div>
  );
}

export default TeamMemberCard;

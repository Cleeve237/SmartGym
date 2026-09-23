import CoachSocialButton from './CoachSocialButton';

export default function CoachSocialLinks({ social }) {
  const links = [
    { key: 'facebook', icon: 'facebook' },
    { key: 'instagram', icon: 'instagram' },
    { key: 'linkedin', icon: 'linkedin' },
    { key: 'tiktok', icon: 'tiktok' },
    { key: 'youtube', icon: 'youtube' },
    { key: 'website', icon: 'globe2' },
  ];
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-share" />
        <h2>Réseaux sociaux</h2>
      </div>
      <div className="cp-social">
        {links.filter(l => social[l.key]).map((l, i) => (
          <CoachSocialButton key={i} icon={l.icon} url={social[l.key]} />
        ))}
      </div>
    </div>
  );
}

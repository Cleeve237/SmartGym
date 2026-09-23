export default function CoachSocialButton({ icon, url }) {
  return (
    <a href={url} className="cp-social-btn" target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${icon}`} />
    </a>
  );
}

export default function CoachShare({ url }) {
  const shareUrl = url || window.location.href;
  const shareText = 'Découvrez ce coach sur SmartGym !';
  return (
    <div className="cp-share">
      <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="cp-social-btn" style={{ color: '#1877F2' }}>
        <i className="bi bi-facebook" />
      </a>
      <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="cp-social-btn" style={{ color: '#25D366' }}>
        <i className="bi bi-whatsapp" />
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="cp-social-btn" style={{ color: '#0A66C2' }}>
        <i className="bi bi-linkedin" />
      </a>
      <button
        className="cp-social-btn"
        onClick={() => { navigator.clipboard?.writeText(shareUrl); }}
        style={{ color: 'var(--color-gray-600)', border: '1px solid var(--color-gray-200)', cursor: 'pointer' }}
      >
        <i className="bi bi-link-45deg" />
      </button>
    </div>
  );
}

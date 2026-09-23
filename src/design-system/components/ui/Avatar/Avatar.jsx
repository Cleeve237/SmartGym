import { useState } from 'react';
import './Avatar.css';

export default function Avatar({
  src, alt = '', name, size = 'md', status, color, className = '', ...props
}) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  const cls = [
    'ds-avatar',
    size !== 'md' ? `ds-avatar--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={color ? { background: color } : undefined} role="img" aria-label={alt || name || 'Avatar'} {...props}>
      {src && !imgError ? (
        <img src={src} alt={alt || name || ''} onError={() => setImgError(true)} />
      ) : (
        <span>{initials}</span>
      )}
      {status && <span className={`ds-avatar-status ds-avatar-status--${status}`} />}
    </div>
  );
}

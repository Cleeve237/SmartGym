import { useRef } from 'react';

function AvatarUploader({ src, onChange, firstName, lastName }) {
  const inputRef = useRef(null);
  const initials = `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();

  const handleClick = () => inputRef.current?.click();

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onChange) {
      onChange(file);
    }
  };

  return (
    <div className="prf-avatar-uploader">
      <div className="prf-avatar" role="img" aria-label="Photo de profil">
        {src ? (
          <img src={src} alt={`${firstName} ${lastName}`} />
        ) : (
          <div className="prf-avatar-placeholder">{initials}</div>
        )}
      </div>

      <div
        className="prf-avatar-uploader-overlay"
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        role="button"
        tabIndex={0}
        aria-label="Changer la photo de profil"
      >
        <i className="bi bi-camera" />
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="prf-avatar-uploader-input"
        onChange={handleChange}
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}

export default AvatarUploader;

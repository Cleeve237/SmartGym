import { useRef } from 'react';

function ProfilePhotoStep({ data, onChange }) {
  const hasPhoto = !!data.photoPreview;
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        onChange('photoPreview', ev.target.result);
        onChange('photoName', file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onChange('photoPreview', null);
    onChange('photoName', null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Photo de profil</h2>
        <p className="cr-step-subtitle">
          Une photo professionnelle inspire confiance aux clients. Ajoutez votre meilleure photo.
        </p>
      </div>

      <div
        className={`cr-photo-zone${hasPhoto ? ' cr-photo-zone--has-image' : ''}`}
        onClick={() => !hasPhoto && inputRef.current?.click()}
        onKeyDown={(e) => !hasPhoto && e.key === 'Enter' && inputRef.current?.click()}
        role={hasPhoto ? undefined : 'button'}
        tabIndex={hasPhoto ? undefined : 0}
      >
        {hasPhoto ? (
          <>
            <img
              src={data.photoPreview}
              alt="Apercu de la photo de profil"
              className="cr-photo-preview"
            />
            <p className="cr-photo-text">{data.photoName}</p>
          </>
        ) : (
          <>
            <div className="cr-photo-icon">
              <i className="bi bi-camera" />
            </div>
            <p className="cr-photo-text">
              <strong>Cliquez pour ajouter</strong> ou glissez une photo
            </p>
            <p className="cr-photo-hint">JPG, PNG. Taille maximale : 5 Mo.</p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        aria-label="Choisir une photo de profil"
      />

      {hasPhoto && (
        <div className="cr-photo-actions">
          <button
            type="button"
            className="cr-photo-btn"
            onClick={() => inputRef.current?.click()}
          >
            <i className="bi bi-pencil" /> Modifier
          </button>
          <button
            type="button"
            className="cr-photo-btn"
            onClick={handleRemove}
          >
            <i className="bi bi-trash" /> Supprimer
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoStep;

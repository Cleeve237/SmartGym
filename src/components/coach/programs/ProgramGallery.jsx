import GalleryUploader from './GalleryUploader';

function ProgramGallery({ images, onRemove, onAdd }) {
  return (
    <div className="cd-pgm-form-group">
      <p className="cd-pgm-form-hint" style={{ marginBottom: '0.75rem' }}>
        Ajoutez des images pour illustrer votre programme. Format recommande : 800x600px.
      </p>
      <div className="cd-pgm-gallery">
        {images?.map((img, i) => (
          <div key={i} className="cd-pgm-gallery-item cd-pgm-gallery-item--filled">
            {img.url ? (
              <img src={img.url} alt={img.alt || `Image ${i + 1}`} />
            ) : (
              <>
                <i className="bi bi-image" />
                <span>{img.name || `Image ${i + 1}`}</span>
              </>
            )}
            <button
              type="button"
              className="cd-pgm-gallery-item-remove"
              onClick={() => onRemove?.(i)}
              aria-label={`Supprimer l'image ${i + 1}`}
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
        ))}
        <GalleryUploader onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ProgramGallery;

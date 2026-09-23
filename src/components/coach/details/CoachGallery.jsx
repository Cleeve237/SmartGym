function CoachGallery({ photos }) {
  return (
    <div className="cd-section">
      <h2 className="cd-section-title">
        <i className="bi bi-images" />
        Galerie photos
      </h2>
      <div className="cd-gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="cd-gallery-item">
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            ) : (
              <div className="cd-gallery-placeholder">
                <i className="bi bi-image" aria-hidden="true" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachGallery;

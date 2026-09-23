function GalleryUploader({ onAdd }) {
  return (
    <button
      type="button"
      className="cd-pgm-gallery-item"
      onClick={onAdd}
      aria-label="Ajouter une image"
    >
      <i className="bi bi-plus-lg" />
      <span>Ajouter</span>
    </button>
  );
}

export default GalleryUploader;

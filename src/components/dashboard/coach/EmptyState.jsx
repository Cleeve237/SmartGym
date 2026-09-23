export default function EmptyState({ icon, title, text }) {
  return (
    <div className="cd-empty">
      <div className="cd-empty-icon">
        <i className={`bi ${icon || "bi-inbox"}`} />
      </div>
      <div className="cd-empty-title">{title || "Aucune donnée"}</div>
      <div className="cd-empty-text">{text || "Les informations apparaîtront ici."}</div>
    </div>
  );
}

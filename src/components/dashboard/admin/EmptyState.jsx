export default function EmptyState({ icon, title, text }) {
  return (
    <div className="adm-empty">
      <div className="adm-empty-icon">
        <i className={`bi ${icon || "bi-inbox"}`} />
      </div>
      <div className="adm-empty-title">{title || "Aucune donnée"}</div>
      <div className="adm-empty-text">{text || "Les informations apparaîtront ici."}</div>
    </div>
  );
}

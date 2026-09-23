import CoachValidationCard from "./CoachValidationCard";

const COACHES = [
  { id: "co1", name: "David Ngono", city: "Yaoundé", rating: 4.7, photo: null, status: "pending" },
  { id: "co2", name: "Marc Bella", city: "Douala", rating: 4.9, photo: null, status: "validated" },
  { id: "co3", name: "Claire Fouda", city: "Bafoussam", rating: 4.5, photo: null, status: "pending" },
  { id: "co4", name: "Jean Mbarga", city: "Douala", rating: 4.3, photo: null, status: "validated" },
];

export default function CoachManagementWidget() {
  return (
    <div className="adm-widget">
      <div className="adm-widget-header">
        <div className="adm-widget-title">
          <i className="bi bi-person-workspace" /> Gestion des coachs
        </div>
        <a href="/admin/coaches" className="adm-widget-link">Voir tout <i className="bi bi-arrow-right" /></a>
      </div>
      <div className="adm-widget-body--flush">
        {COACHES.length === 0 ? (
          <div className="adm-empty">
            <div className="adm-empty-icon"><i className="bi bi-person-workspace" /></div>
            <div className="adm-empty-title">Aucun coach</div>
            <div className="adm-empty-text">Les coachs inscrits apparaîtront ici.</div>
          </div>
        ) : (
          COACHES.map((c) => <CoachValidationCard key={c.id} coach={c} />)
        )}
      </div>
    </div>
  );
}

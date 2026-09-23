import { Link } from "react-router-dom";
import ProgramCard from "./ProgramCard";

const PROGRAMS = [
  { id: "p1", name: "Musculation", icon: "bi-lightning", duration: 60, price: 5000, clients: 18 },
  { id: "p2", name: "Cardio & HIIT", icon: "bi-fire", duration: 45, price: 4000, clients: 12 },
  { id: "p3", name: "Yoga & Flexibilité", icon: "bi-balloon", duration: 60, price: 4500, clients: 8 },
  { id: "p4", name: "Coaching Personnel", icon: "bi-person-check", duration: 90, price: 8000, clients: 6 },
];

export default function ProgramManagementWidget() {
  return (
    <div className="cd-widget">
      <div className="cd-widget-header">
        <div className="cd-widget-title">
          <i className="bi bi-journal-richtext" /> Mes programmes
        </div>
        <Link to="/coach/programmes/create" className="cd-widget-link">
          <i className="bi bi-plus-lg" /> Ajouter
        </Link>
      </div>
      <div className="cd-widget-body--flush">
        {PROGRAMS.length === 0 ? (
          <div className="cd-empty">
            <div className="cd-empty-icon"><i className="bi bi-journal-richtext" /></div>
            <div className="cd-empty-title">Aucun programme</div>
            <div className="cd-empty-text">Créez votre premier programme pour attirer des clients.</div>
          </div>
        ) : (
          PROGRAMS.map((p) => <ProgramCard key={p.id} program={p} />)
        )}
      </div>
    </div>
  );
}

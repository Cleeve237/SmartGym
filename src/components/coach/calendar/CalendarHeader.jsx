import CalendarLegend from './CalendarLegend';

function CalendarHeader({ onCreate, onBlock }) {
  return (
    <div className="cd-cal-header">
      <div className="cd-cal-header-left">
        <h1>Calendrier</h1>
        <p>Gerez vos disponibilites et visualisez vos seances.</p>
      </div>
      <div className="cd-cal-header-actions">
        <CalendarLegend />
        <button className="btn btn-outline-secondary btn-sm" onClick={onBlock}>
          <i className="bi bi-lock me-1" />
          Bloquer un creneau
        </button>
        <button className="btn btn-primary btn-sm" onClick={onCreate}>
          <i className="bi bi-plus-lg me-1" />
          Ajouter un creneau
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;

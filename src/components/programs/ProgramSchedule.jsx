function ProgramSchedule({ program }) {
  return (
    <div className="pg-section">
      <div className="pg-section-header">
        <h2 className="pg-section-title">
          <i className="bi bi-calendar-event" />
          Planning
        </h2>
      </div>
      <div className="pg-section-body">
        <div className="pg-schedule-grid">
          <div className="pg-schedule-item">
            <span className="pg-schedule-label">Duree totale</span>
            <span className="pg-schedule-value">{program.weeks} semaines</span>
          </div>
          <div className="pg-schedule-item">
            <span className="pg-schedule-label">Seances / semaine</span>
            <span className="pg-schedule-value">{program.sessionsPerWeek} seances</span>
          </div>
          <div className="pg-schedule-item">
            <span className="pg-schedule-label">Duree / seance</span>
            <span className="pg-schedule-value">{program.sessionDuration || 60} min</span>
          </div>
          <div className="pg-schedule-item">
            <span className="pg-schedule-label">Type</span>
            <span className="pg-schedule-value">{program.type || 'Mixte'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramSchedule;

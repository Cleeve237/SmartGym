function CalendarToolbar({ periodLabel, view, onViewChange, onPrev, onNext, onToday }) {
  return (
    <div className="cd-cal-toolbar">
      <div className="cd-cal-toolbar-left">
        <button className="cd-cal-today-btn" onClick={onToday}>
          Aujourd&apos;hui
        </button>
        <button className="cd-cal-nav-btn" onClick={onPrev} aria-label="Precedent">
          <i className="bi bi-chevron-left" />
        </button>
        <button className="cd-cal-nav-btn" onClick={onNext} aria-label="Suivant">
          <i className="bi bi-chevron-right" />
        </button>
        <span className="cd-cal-period-label">{periodLabel}</span>
      </div>

      <div className="cd-cal-toolbar-right">
        <div className="cd-cal-view-toggle" role="group" aria-label="Vue du calendrier">
          <button
            className={`cd-cal-view-btn ${view === 'month' ? 'cd-cal-view-btn--active' : ''}`}
            onClick={() => onViewChange?.('month')}
            aria-pressed={view === 'month'}
          >
            Mois
          </button>
          <button
            className={`cd-cal-view-btn ${view === 'week' ? 'cd-cal-view-btn--active' : ''}`}
            onClick={() => onViewChange?.('week')}
            aria-pressed={view === 'week'}
          >
            Semaine
          </button>
          <button
            className={`cd-cal-view-btn ${view === 'day' ? 'cd-cal-view-btn--active' : ''}`}
            onClick={() => onViewChange?.('day')}
            aria-pressed={view === 'day'}
          >
            Jour
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarToolbar;

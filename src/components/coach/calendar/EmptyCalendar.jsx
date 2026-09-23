function EmptyCalendar({ hasFilter }) {
  return (
    <div className="cd-cal-empty">
      <div className="cd-cal-empty-icon">
        <i className="bi bi-calendar-x" aria-hidden="true" />
      </div>
      <h3 className="cd-cal-empty-title">
        {hasFilter ? 'Aucun evenement' : 'Calendrier vide'}
      </h3>
      <p className="cd-cal-empty-text">
        {hasFilter
          ? 'Aucun evenement ne correspond a vos filtres. Essayez avec d\'autres criteres.'
          : 'Aucun evenement prevu. Ajoutez des disponibilites pour commencer.'}
      </p>
    </div>
  );
}

export default EmptyCalendar;

function BlockedSlotsCard({ slots, onRemove }) {
  const defaultSlots = slots?.length ? slots : [
    { id: 'b1', label: 'Pause dejeuner', date: '24 Juil. 12:00 - 13:00' },
    { id: 'b2', label: 'Reunion equipement', date: '25 Juil. 09:00 - 10:00' },
  ];

  return (
    <div className="cd-cal-widget">
      <div className="cd-cal-widget-header">
        <div className="cd-cal-widget-title">
          <i className="bi bi-lock" />
          Creneaux bloques
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>
          {defaultSlots.length}
        </span>
      </div>
      <div className="cd-cal-widget-body">
        {defaultSlots.length === 0 ? (
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', textAlign: 'center', padding: '1rem 0' }}>
            Aucun creneau bloque.
          </p>
        ) : (
          defaultSlots.map((s) => (
            <div key={s.id} className="cd-cal-blocked-item">
              <div className="cd-cal-blocked-info">
                <div className="cd-cal-blocked-icon">
                  <i className="bi bi-lock" />
                </div>
                <div>
                  <div className="cd-cal-blocked-text">{s.label}</div>
                  <div className="cd-cal-blocked-date">{s.date}</div>
                </div>
              </div>
              {onRemove && (
                <button
                  className="cd-cal-blocked-remove"
                  onClick={() => onRemove(s.id)}
                  aria-label={`Supprimer ${s.label}`}
                >
                  <i className="bi bi-x-lg" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlockedSlotsCard;

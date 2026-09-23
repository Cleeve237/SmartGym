function CalendarSkeleton() {
  return (
    <div>
      <div className="cd-cal-skeleton cd-cal-skeleton-header" />
      <div className="cd-cal-card">
        <div className="cd-cal-skeleton-row">
          <div className="cd-cal-skeleton cd-cal-skeleton-cell" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div className="cd-cal-skeleton" style={{ height: 24, borderRadius: 'var(--radius-sm)' }} />
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="cd-cal-skeleton" style={{ height: 40, borderRadius: 'var(--radius-sm)' }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSkeleton;

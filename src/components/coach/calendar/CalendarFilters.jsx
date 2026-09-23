import { useState } from 'react';

function CalendarFilters({ filters, onChange }) {
  const toggle = (key) => {
    onChange?.({ ...filters, [key]: !filters[key] });
  };

  return (
    <div className="cd-cal-filters">
      <div className="cd-cal-filters-title">
        <i className="bi bi-funnel" />
        Filtres
      </div>

      <label className="cd-cal-filter-item">
        <input type="checkbox" checked={filters.available} onChange={() => toggle('available')} />
        <span className="cd-cal-filter-dot cd-cal-filter-dot--available" />
        Disponibles
      </label>

      <label className="cd-cal-filter-item">
        <input type="checkbox" checked={filters.booked} onChange={() => toggle('booked')} />
        <span className="cd-cal-filter-dot cd-cal-filter-dot--booked" />
        Reserves
      </label>

      <label className="cd-cal-filter-item">
        <input type="checkbox" checked={filters.blocked} onChange={() => toggle('blocked')} />
        <span className="cd-cal-filter-dot cd-cal-filter-dot--blocked" />
        Bloques
      </label>

      <label className="cd-cal-filter-item">
        <input type="checkbox" checked={filters.completed} onChange={() => toggle('completed')} />
        <span className="cd-cal-filter-dot cd-cal-filter-dot--completed" />
        Termines
      </label>

      <label className="cd-cal-filter-item">
        <input type="checkbox" checked={filters.pending} onChange={() => toggle('pending')} />
        <span className="cd-cal-filter-dot cd-cal-filter-dot--pending" />
        En attente
      </label>

      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--color-gray-100)' }}>
        <label className="cd-cal-filters-title" style={{ marginBottom: '0.5rem' }}>
          Programme
        </label>
        <select
          className="form-select form-select-sm"
          value={filters.program || ''}
          onChange={(e) => onChange?.({ ...filters, program: e.target.value })}
          style={{ fontSize: 'var(--font-size-sm)' }}
        >
          <option value="">Tous les programmes</option>
          <option value="musculation">Musculation</option>
          <option value="cardio">Cardio & HIIT</option>
          <option value="yoga">Yoga</option>
          <option value="crossfit">CrossFit</option>
          <option value="boxe">Boxe</option>
        </select>
      </div>
    </div>
  );
}

export default CalendarFilters;

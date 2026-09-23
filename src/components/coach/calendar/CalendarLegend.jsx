function CalendarLegend() {
  const items = [
    { color: 'var(--color-success)', label: 'Disponible' },
    { color: 'var(--color-info)', label: 'Reserve' },
    { color: 'var(--color-gray-500)', label: 'Bloque' },
    { color: '#eab308', label: 'En attente' },
    { color: 'var(--color-danger)', label: 'Annule' },
  ];

  return (
    <div className="cd-cal-legend">
      {items.map((item) => (
        <div key={item.label} className="cd-cal-legend-item">
          <span className="cd-cal-legend-dot" style={{ background: item.color }} />
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default CalendarLegend;

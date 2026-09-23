import WeekAccordion from './WeekAccordion';

function generateWeeks(weeks) {
  const labels = ['Sprint de démarrage', 'Construction & Base', 'Intensification', 'Consolidation', 'Développement', 'Poussée', 'Pic de forme', 'Explosion', 'Affûtage', 'Performance Max', 'Maintien', 'Sommet'];
  return Array.from({ length: weeks }, (_, i) => ({
    num: i + 1,
    title: `Semaine ${i + 1} : ${labels[i % labels.length]}`,
  }));
}

function ProgramSchedule({ weeks = 8 }) {
  const weekData = generateWeeks(weeks);

  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-calendar-week" /><h2>Déroulement du programme</h2>
      </div>
      <div className="pd-accordion">
        {weekData.map((w) => (
          <WeekAccordion key={w.num} weekNum={w.num} title={w.title} />
        ))}
      </div>
    </div>
  );
}
export default ProgramSchedule;

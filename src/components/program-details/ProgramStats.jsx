function ProgramStats({ program }) {
  const stats = [
    { value: program.enrolled || program.enrolledCount || 0, label: 'Participants' },
    { value: `${program.weeks} sem.`, label: 'Durée' },
    { value: `${program.sessionsPerWeek}x/sem.`, label: 'Séances' },
    { value: `${program.sessionDuration || 60} min`, label: 'Par séance' },
    { value: program.difficulty, label: 'Difficulté' },
  ];
  return (
    <div className="pd-stats">
      {stats.map((s) => (
        <div key={s.label} className="pd-stat">
          <div className="pd-stat-value">{s.value}</div>
          <div className="pd-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
export default ProgramStats;

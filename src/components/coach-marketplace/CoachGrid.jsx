import AdvancedCoachCard from './AdvancedCoachCard';

function CoachGrid({ coaches }) {
  return (
    <div className="mp-grid">
      {coaches.map((coach) => (
        <AdvancedCoachCard key={coach.id} coach={coach} />
      ))}
    </div>
  );
}

export default CoachGrid;

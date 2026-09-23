import ProgramCard from './ProgramCard';

function ProgramsGrid({ programs }) {
  if (!programs?.length) return null;

  return (
    <div className="pg-grid">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}

export default ProgramsGrid;

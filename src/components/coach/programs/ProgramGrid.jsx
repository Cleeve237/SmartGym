import ProgramManagementCard from './ProgramManagementCard';

function ProgramGrid({ programs, onDelete, onDuplicate, onTogglePublish }) {
  if (!programs?.length) return null;

  return (
    <div className="cd-programs-grid">
      {programs.map((p) => (
        <ProgramManagementCard
          key={p.id}
          program={p}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onTogglePublish={onTogglePublish}
        />
      ))}
    </div>
  );
}

export default ProgramGrid;

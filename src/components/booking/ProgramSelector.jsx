import ProgramCard from "./ProgramCard";

export default function ProgramSelector({ programs, selectedProgram, onSelect }) {
  return (
    <div className="bk-programs">
      {programs.map((p) => (
        <ProgramCard
          key={p.id}
          program={p}
          selected={selectedProgram?.id === p.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

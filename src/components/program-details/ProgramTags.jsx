function ProgramTags({ tags }) {
  return (
    <div className="pd-tags">
      {tags.map((t) => <span key={t} className="pd-tag">{t}</span>)}
    </div>
  );
}
export default ProgramTags;

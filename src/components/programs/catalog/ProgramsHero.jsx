function ProgramsHero({ searchQuery, onSearchChange, onSubmit }) {
  return (
    <section className="pc-hero">
      <div className="pc-hero-blob pc-hero-blob--1" />
      <div className="pc-hero-blob pc-hero-blob--2" />
      <h1>Trouvez le programme idéal pour atteindre vos objectifs</h1>
      <p>Des centaines de programmes conçus par des coachs qualifiés, adaptés à tous les niveaux et tous les budgets.</p>
      <form className="pc-search-bar" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <input type="text" placeholder="Rechercher un programme..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} aria-label="Rechercher un programme" />
        <button type="submit"><i className="bi bi-search" /> Rechercher</button>
      </form>
    </section>
  );
}
export default ProgramsHero;

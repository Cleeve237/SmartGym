import { useState } from 'react';

function ProgramSearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className="pc-search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="Rechercher un programme..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Rechercher un programme" />
      <button type="submit"><i className="bi bi-search" /> Rechercher</button>
    </form>
  );
}
export default ProgramSearchBar;

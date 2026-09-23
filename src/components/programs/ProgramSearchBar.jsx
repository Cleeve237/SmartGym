import { useState } from 'react';

function ProgramSearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className="pg-search" onSubmit={handleSubmit}>
      <div className="pg-search-field">
        <i className="bi bi-search" />
        <input
          type="text"
          placeholder="Rechercher un programme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="pg-search-btn">
        <i className="bi bi-search" />
        Rechercher
      </button>
    </form>
  );
}

export default ProgramSearchBar;

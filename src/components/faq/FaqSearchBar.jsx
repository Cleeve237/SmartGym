import { useState } from 'react';

function FaqSearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <section className="fq-search" aria-label="Recherche">
      <div className="container">
        <div className="fq-search-wrapper">
          <i className="bi bi-search fq-search-icon" aria-hidden="true" />
          <input
            type="search"
            className="fq-search-input"
            placeholder="Rechercher une question..."
            value={query}
            onChange={handleChange}
            aria-label="Rechercher une question dans la FAQ"
          />
        </div>
      </div>
    </section>
  );
}

export default FaqSearchBar;

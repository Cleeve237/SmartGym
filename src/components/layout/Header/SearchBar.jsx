import { useState } from 'react';
import SearchSuggestions from './SearchSuggestions';

export default function SearchBar({ dark }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className="hd-search">
      <i className="bi bi-search hd-search-icon" />
      <input
        type="text"
        className="hd-search-input"
        placeholder="Rechercher un coach ou un programme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 200)}
        aria-label="Rechercher"
        style={dark ? { background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' } : undefined}
      />
      {focused && <SearchSuggestions query={query} onSelect={() => setQuery('')} />}
    </div>
  );
}

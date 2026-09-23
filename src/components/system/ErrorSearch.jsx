import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ErrorSearch() {
  const [query, setQuery] = useState('');

  const suggestions = [
    { label: 'Trouver un coach', path: '/coaches', icon: 'person-badge' },
    { label: 'Catalogue programmes', path: '/programs/catalog', icon: 'journal-text' },
    { label: 'FAQ', path: '/faq', icon: 'question-circle' },
    { label: 'Contact', path: '/contact', icon: 'envelope' },
  ];

  const filtered = query
    ? suggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase()))
    : suggestions;

  return (
    <div>
      <div className="sys-search">
        <i className="bi bi-search sys-search-icon" />
        <input
          type="text"
          className="sys-search-input"
          placeholder="Rechercher une page..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Rechercher"
        />
      </div>
      {query && filtered.length === 0 ? (
        <p className="text-muted" style={{ fontSize: '0.8125rem' }}>Aucun résultat pour "{query}"</p>
      ) : (
        <div className="sys-links">
          {filtered.map((link, i) => (
            <Link key={i} to={link.path} className="sys-link">
              <i className={`bi bi-${link.icon}`} />
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

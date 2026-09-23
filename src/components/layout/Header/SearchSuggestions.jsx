import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const suggestions = {
  coaches: [
    { label: 'Jean-Pierre Mbarga', path: '/coaches/1', icon: 'person' },
    { label: 'Carine Atangana', path: '/coaches/2', icon: 'person' },
  ],
  programs: [
    { label: 'Musculation Fondamentale', path: '/programs/p1', icon: 'journal' },
    { label: 'Prise de Masse Intensive', path: '/programs/p2', icon: 'journal' },
    { label: 'Cardio Intensif', path: '/programs/p5', icon: 'journal' },
  ],
  pages: [
    { label: 'Tous les coaches', path: '/coaches', icon: 'people' },
    { label: 'Catalogue programmes', path: '/programs/catalog', icon: 'grid' },
  ],
};

export default function SearchSuggestions({ query, onSelect }) {
  if (!query || query.length < 1) return null;

  const all = [
    ...suggestions.coaches.filter(s => s.label.toLowerCase().includes(query.toLowerCase())),
    ...suggestions.programs.filter(s => s.label.toLowerCase().includes(query.toLowerCase())),
  ];

  if (all.length === 0) return null;

  return (
    <div className="hd-suggestions">
      <div className="hd-suggestions-header">Suggestions</div>
      {all.map((s, i) => (
        <Link key={i} to={s.path} className="hd-suggestions-item" onClick={onSelect}>
          <i className={`bi bi-${s.icon}`} />
          <span>{s.label}</span>
        </Link>
      ))}
    </div>
  );
}

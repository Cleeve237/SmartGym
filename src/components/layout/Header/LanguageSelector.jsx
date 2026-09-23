import { useState } from 'react';

const langs = [
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'en', label: 'EN', full: 'English' },
];

export default function LanguageSelector({ dark }) {
  const [current, setCurrent] = useState('fr');

  return (
    <div className="hd-dropdown">
      <button className="hd-lang-btn" aria-label="Changer la langue">
        <i className="bi bi-globe2" />
        <span>{langs.find(l => l.code === current)?.label}</span>
        <i className="bi bi-chevron-down" style={{ fontSize: '0.625rem' }} />
      </button>
      <div className="hd-dropdown-menu" style={{ minWidth: '140px' }}>
        {langs.map((l) => (
          <button key={l.code} className="hd-dropdown-item" style={{ width: '100%', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.8125rem' }}
            onClick={() => setCurrent(l.code)}>
            <span style={{ fontWeight: current === l.code ? 600 : 400 }}>{l.full}</span>
            {current === l.code && <i className="bi bi-check ms-auto" style={{ color: 'var(--ds-primary)' }} />}
          </button>
        ))}
      </div>
    </div>
  );
}

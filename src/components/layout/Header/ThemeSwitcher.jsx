import { useState } from 'react';

const themes = [
  { value: 'light', icon: 'sun-fill', label: 'Clair' },
  { value: 'dark', icon: 'moon-stars-fill', label: 'Sombre' },
  { value: 'system', icon: 'circle-half', label: 'Système' },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');
  const current = themes.find(t => t.value === theme);

  return (
    <div className="hd-dropdown">
      <button className="hd-theme-btn" aria-label="Changer le thème">
        <i className={`bi bi-${current?.icon || 'sun-fill'}`} />
      </button>
      <div className="hd-dropdown-menu" style={{ minWidth: '160px' }}>
        {themes.map((t) => (
          <button key={t.value} className="hd-dropdown-item" style={{ width: '100%', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.8125rem', padding: '0.625rem 1rem' }}
            onClick={() => setTheme(t.value)}>
            <i className={`bi bi-${t.icon} me-2`} />
            <span style={{ fontWeight: theme === t.value ? 600 : 400 }}>{t.label}</span>
            {theme === t.value && <i className="bi bi-check ms-auto" style={{ color: 'var(--ds-primary)' }} />}
          </button>
        ))}
      </div>
    </div>
  );
}

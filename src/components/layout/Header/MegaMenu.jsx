import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MegaMenu({ label, icon, sections, isActive }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`hd-nav-item hd-mega-trigger ${open ? 'hd-mega--open' : ''}`}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to="/programs" className={`hd-nav-link ${isActive('/programs') ? 'hd-nav-link--active' : ''}`}
        onFocus={() => setOpen(true)} onBlur={() => setTimeout(() => setOpen(false), 200)}>
        {icon && <i className={`bi bi-${icon}`} />}{label}
      </Link>
      <div className="hd-mega" onClick={() => setOpen(false)}>
        <div className="hd-mega-grid">
          {sections.map((sec, i) => (
            <div key={i} className="hd-mega-col">
              <h4>{sec.title}</h4>
              {sec.links.map((link, j) => (
                <Link key={j} to={link.path} className="hd-mega-link">{link.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

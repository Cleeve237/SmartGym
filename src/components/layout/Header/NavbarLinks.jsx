import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

export default function NavbarLinks({ links, isActive, dark }) {
  return (
    <ul className="hd-nav">
      {links.map((link, i) => (
        link.megaMenu ? (
          <MegaMenu key={i} label={link.label} icon={link.icon} sections={link.sections} isActive={isActive} />
        ) : (
          <li key={i} className="hd-nav-item">
            <Link to={link.path} className={`hd-nav-link ${isActive(link.path, link.exact) ? 'hd-nav-link--active' : ''} ${dark ? 'text-white' : ''}`}>
              {link.icon && <i className={`bi bi-${link.icon}`} />}
              {link.label}
            </Link>
          </li>
        )
      ))}
    </ul>
  );
}

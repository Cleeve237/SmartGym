import { Link } from 'react-router-dom';

export default function NavbarBrand({ dark }) {
  return (
    <Link to="/" className={`hd-brand ${dark ? 'text-white' : ''}`}>
      <span className="hd-brand-icon">
        <i className="bi bi-activity" />
      </span>
      <span>SmartGym</span>
    </Link>
  );
}

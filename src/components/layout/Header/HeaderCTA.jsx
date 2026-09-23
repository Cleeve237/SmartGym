import { Link } from 'react-router-dom';

export default function HeaderCTA({ variant = 'primary', dark }) {
  if (variant === 'outline') {
    return (
      <Link to="/register" className={`hd-auth-link ${dark ? 'text-white' : ''}`}>
        Créer un compte
      </Link>
    );
  }
  return (
    <Link to="/coaches" className="hd-cta hd-cta--primary hd-cta--mobile">
      <i className="bi bi-geo-alt" />
      Trouver mon coach
    </Link>
  );
}

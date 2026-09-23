import { Link } from 'react-router-dom';
import ErrorIllustration from '../../components/system/ErrorIllustration';
import ErrorActions from '../../components/system/ErrorActions';
import ErrorSearch from '../../components/system/ErrorSearch';
import './System.css';

export default function NotFoundPage() {
  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="404" />
        <div className="sys-code">404</div>
        <h1 className="sys-title">Oups... Page introuvable</h1>
        <p className="sys-desc">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Vous pouvez utiliser la recherche ou les liens ci-dessous.
        </p>
        <ErrorSearch />
        <div style={{ marginTop: '1.5rem' }}>
          <ErrorActions
            actions={[
              { label: 'Accueil', icon: 'house', path: '/' },
              { label: 'Trouver un coach', icon: 'person-badge', path: '/coaches', variant: 'outline' },
              { label: 'Programmes', icon: 'journal-text', path: '/programs', variant: 'outline' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

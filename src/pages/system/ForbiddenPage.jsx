import { Link } from 'react-router-dom';
import ErrorIllustration from '../../components/system/ErrorIllustration';
import ErrorActions from '../../components/system/ErrorActions';
import './System.css';

export default function ForbiddenPage() {
  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="403" />
        <div className="sys-code sys-code--danger">403</div>
        <h1 className="sys-title">Accès refusé</h1>
        <p className="sys-desc">
          Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
          Contactez votre administrateur si vous pensez qu'il s'agit d'une erreur.
        </p>
        <ErrorActions
          actions={[
            { label: 'Retour', icon: 'arrow-left', variant: 'ghost', onClick: () => window.history.back() },
            { label: 'Accueil', icon: 'house', path: '/' },
            { label: 'Connexion', icon: 'box-arrow-in-right', path: '/login', variant: 'outline' },
          ]}
        />
      </div>
    </div>
  );
}

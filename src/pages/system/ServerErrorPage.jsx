import ErrorIllustration from '../../components/system/ErrorIllustration';
import ErrorActions from '../../components/system/ErrorActions';
import './System.css';

export default function ServerErrorPage() {
  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="500" />
        <div className="sys-code sys-code--danger">500</div>
        <h1 className="sys-title">Une erreur interne est survenue</h1>
        <p className="sys-desc">
          Nous rencontrons un problème technique. Nos équipes ont été notifiées
          et travaillent à résoudre la situation. Veuillez réessayer dans quelques instants.
        </p>
        <ErrorActions
          actions={[
            { label: 'Réessayer', icon: 'arrow-clockwise', onClick: () => window.location.reload() },
            { label: 'Accueil', icon: 'house', path: '/', variant: 'outline' },
            { label: 'Contact', icon: 'envelope', path: '/contact', variant: 'ghost' },
          ]}
        />
      </div>
    </div>
  );
}

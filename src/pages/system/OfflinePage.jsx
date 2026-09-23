import { useState } from 'react';
import ErrorIllustration from '../../components/system/ErrorIllustration';
import ErrorActions from '../../components/system/ErrorActions';
import './System.css';

export default function OfflinePage() {
  const [checking, setChecking] = useState(false);

  const handleRetry = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      if (navigator.onLine) window.location.reload();
    }, 2000);
  };

  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="offline" />
        <div className="sys-code sys-code--gray">Hors ligne</div>
        <h1 className="sys-title">Connexion Internet indisponible</h1>
        <p className="sys-desc">
          Vous semblez être déconnecté. Vérifiez votre connexion réseau et réessayez.
        </p>
        <div className="sys-tips">
          <div className="sys-tip">
            <i className="bi bi-wifi" />
            <span>Vérifiez que votre Wi-Fi ou données mobiles sont activés</span>
          </div>
          <div className="sys-tip">
            <i className="bi bi-arrow-repeat" />
            <span>Essayez de rafraîchir la page une fois connecté</span>
          </div>
          <div className="sys-tip">
            <i className="bi bi-hdd-network" />
            <span>Certaines fonctionnalités peuvent être disponibles hors ligne</span>
          </div>
        </div>
        <div style={{ marginTop: '1.25rem' }}>
          <ErrorActions
            actions={[
              { label: checking ? 'Vérification...' : 'Réessayer', icon: checking ? 'arrow-repeat' : 'arrow-clockwise', onClick: handleRetry },
              { label: 'Accueil', icon: 'house', path: '/', variant: 'outline' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

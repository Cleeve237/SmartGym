import ErrorIllustration from '../../components/system/ErrorIllustration';
import CountdownTimer from '../../components/system/CountdownTimer';
import './System.css';

export default function MaintenancePage() {
  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="maintenance" />
        <div className="sys-code sys-code--gray">Maintenance</div>
        <h1 className="sys-title">Maintenance en cours</h1>
        <p className="sys-desc">
          Nous améliorons SmartGym pour vous offrir une meilleure expérience.
          Notre équipe travaille activement — revenez vite !
        </p>
        <CountdownTimer targetDate="2026-11-10T06:00:00" />
        <div style={{ marginTop: '1.5rem' }}>
          <div className="sys-newsletter">
            <input type="email" className="sys-newsletter-input" placeholder="Votre email pour être averti" aria-label="Email" />
            <button className="sys-btn sys-btn--primary" style={{ flexShrink: 0 }}>Prévenir</button>
          </div>
        </div>
        <div className="sys-social">
          <a href="#" className="sys-social-link" aria-label="Facebook"><i className="bi bi-facebook" /></a>
          <a href="#" className="sys-social-link" aria-label="Instagram"><i className="bi bi-instagram" /></a>
          <a href="#" className="sys-social-link" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
          <a href="#" className="sys-social-link" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>
  );
}

import ErrorIllustration from '../../components/system/ErrorIllustration';
import CountdownTimer from '../../components/system/CountdownTimer';
import './System.css';

const features = [
  { icon: 'calendar-check', iconBg: 'var(--ds-primary-50)', iconColor: 'var(--ds-primary)', title: 'Réservation instantanée', desc: 'Réservez votre coach en un clic' },
  { icon: 'chat-dots', iconBg: 'var(--ds-info-50)', iconColor: 'var(--ds-info)', title: 'Messagerie intégrée', desc: 'Échangez directement avec votre coach' },
  { icon: 'graph-up', iconBg: 'var(--ds-accent-50)', iconColor: 'var(--ds-accent)', title: 'Suivi des performances', desc: 'Visualisez vos progrès semaine après semaine' },
  { icon: 'people', iconBg: 'var(--ds-success-50)', iconColor: 'var(--ds-success)', title: 'Programmes collectifs', desc: 'Rejoignez des sessions en groupe' },
];

export default function ComingSoonPage() {
  return (
    <div className="sys-page">
      <div className="sys-container">
        <ErrorIllustration type="comingsoon" />
        <div className="sys-code" style={{ fontSize: '2.5rem', WebkitTextFillColor: 'initial', color: 'var(--ds-primary)' }}>Bientôt</div>
        <h1 className="sys-title">Cette fonctionnalité arrive bientôt</h1>
        <p className="sys-desc">
          Nous préparons quelque chose d'exceptionnel pour vous.
          Restez à l'écoute — le lancement approche !
        </p>
        <CountdownTimer targetDate="2026-12-01T00:00:00" />
        <div className="sys-features">
          {features.map((f, i) => (
            <div key={i} className="sys-feature">
              <span className="sys-feature-icon" style={{ background: f.iconBg, color: f.iconColor }}>
                <i className={`bi bi-${f.icon}`} />
              </span>
              <div>
                <div className="sys-feature-text">{f.title}</div>
                <div className="sys-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

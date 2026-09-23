import './Benefits.css';
import BenefitCard from './BenefitCard';

const benefitsData = [
  {
    icon: 'bi-patch-check',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    title: 'Coachs verifies',
    description:
      'Tous nos coachs sont selectionnes pour garantir un accompagnement de qualite.',
    reassurance: 'Profils controles',
  },
  {
    icon: 'bi-geo-alt',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    title: 'Recherche pres de chez vous',
    description:
      'Trouvez facilement un coach disponible dans votre ville ou votre quartier.',
    reassurance: 'Disponible partout au Cameroun',
  },
  {
    icon: 'bi-calendar-check',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    title: 'Reservation simplifiee',
    description:
      'Reservez votre seance en quelques clics selon vos disponibilites.',
    reassurance: 'Gain de temps',
  },
  {
    icon: 'bi-shield-lock',
    iconBg: 'var(--color-warning-light)',
    iconColor: 'var(--color-warning)',
    title: 'Paiement securise',
    description:
      'Payez vos seances simplement avec des solutions adaptees.',
    reassurance: 'Transactions protegees',
  },
];

function BenefitsSection() {
  return (
    <section className="benefits-section" aria-label="Avantages SmartGym">
      <div className="container">

        {/* En-tete */}
        <div className="benefits-header">
          <div className="benefits-badge">
            <i className="bi bi-shield-check" />
            Nos avantages
          </div>
          <h2 className="benefits-title">
            Pourquoi choisir SmartGym ?
          </h2>
          <p className="benefits-subtitle">
            Une plateforme pensee pour simplifier votre experience sportive.
          </p>
        </div>

        {/* Layout 2 colonnes */}
        <div className="benefits-layout">

          {/* Illustration */}
          <div className="benefits-visual">
            <div className="benefits-illustration">
              <i className="bi bi-trophy" aria-hidden="true" />
              <div className="benefits-illustration-badge">
                <div className="benefits-illustration-badge-icon">
                  <i className="bi bi-patch-check-fill" />
                </div>
                <div>
                  <div className="benefits-illustration-badge-text">
                    100% Confiance
                  </div>
                  <div className="benefits-illustration-badge-sub">
                    Plateforme securisee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes avantages */}
          <div className="benefits-cards">
            {benefitsData.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                iconBg={benefit.iconBg}
                iconColor={benefit.iconColor}
                title={benefit.title}
                description={benefit.description}
                reassurance={benefit.reassurance}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;

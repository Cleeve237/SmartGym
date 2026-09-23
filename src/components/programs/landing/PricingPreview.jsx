import { Link } from 'react-router-dom';

const plansData = [
  {
    id: 'discovery',
    name: 'Programme D\u00e9couverte',
    icon: 'bi-play-circle',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    price: '5 000',
    period: 'par programme',
    popular: false,
    features: [
      { text: '1 programme au choix', included: true },
      { text: 'Acc\u00e9s aux vid\u00e9os de cours', included: true },
      { text: 'Suivi de base', included: true },
      { text: 'Support par email', included: true },
      { text: 'Coach d\u00e9di\u00e9', included: false },
      { text: 'Nutrition personnalis\u00e9e', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Programme Standard',
    icon: 'bi-rocket-takeoff',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    price: '15 000',
    period: 'par mois',
    popular: true,
    features: [
      { text: '3 programmes au choix', included: true },
      { text: 'Acc\u00e9s complet aux cours', included: true },
      { text: 'Suivi hebdomadaire', included: true },
      { text: 'Support prioritaire', included: true },
      { text: 'Coach d\u00e9di\u00e9', included: true },
      { text: 'Nutrition personnalis\u00e9e', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Programme Premium',
    icon: 'bi-gem',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    price: '25 000',
    period: 'par mois',
    popular: false,
    features: [
      { text: 'Programmes illimit\u00e9s', included: true },
      { text: 'Acc\u00e9s complet aux cours', included: true },
      { text: 'Suivi quotidien', included: true },
      { text: 'Support 24/7', included: true },
      { text: 'Coach d\u00e9di\u00e9', included: true },
      { text: 'Nutrition personnalis\u00e9e', included: true },
    ],
  },
];

function PricingPreview() {
  return (
    <section className="pl-pricing" aria-label="Tarifs des programmes">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-tag-fill" />
            Tarifs
          </div>
          <h2 className="pl-section-title">
            Choisissez votre formule
          </h2>
          <p className="pl-section-subtitle">
            Des tarifs adapt\u00e9s &agrave; chaque objectif, sans frais cach\u00e9s.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {plansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4">
              <div className={`pl-pricing-card ${plan.popular ? 'pl-pricing-card--popular' : ''}`}>
                {plan.popular && <span className="pl-pricing-badge">Le plus populaire</span>}
                <div className="pl-pricing-icon" style={{ backgroundColor: plan.iconBg }}>
                  <i className={`bi ${plan.icon}`} style={{ color: plan.iconColor, fontSize: '1.4rem' }} aria-hidden="true" />
                </div>
                <h3 className="pl-pricing-name">{plan.name}</h3>
                <div className="pl-pricing-amount">
                  {plan.price} <span>FCFA</span>
                </div>
                <p className="pl-pricing-period">{plan.period}</p>
                <ul className="pl-pricing-features">
                  {plan.features.map((f) => (
                    <li key={f.text} className="pl-pricing-feature">
                      <i className={`bi ${f.included ? 'bi-check-circle-fill pl-pricing-feature--check' : 'bi-x-circle-fill pl-pricing-feature--cross'}`} />
                      {f.text}
                    </li>
                  ))}
                </ul>
                <div className="pl-pricing-cta">
                  <Link
                    to="/programs/catalogue"
                    className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}
                    style={{ fontWeight: 'var(--font-weight-semibold)' }}
                  >
                    Commencer
                    <i className="bi bi-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPreview;

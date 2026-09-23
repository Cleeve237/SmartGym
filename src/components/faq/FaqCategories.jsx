import FaqCategoryCard from './FaqCategoryCard';

const categoriesData = [
  { id: 'fq-cat-general', name: 'G\u00e9n\u00e9ral', icon: 'bi-info-circle', iconBg: 'var(--color-primary-lighter)', iconColor: 'var(--color-primary)', count: 4 },
  { id: 'fq-cat-compte', name: 'Compte utilisateur', icon: 'bi-person', iconBg: 'var(--color-info-light)', iconColor: 'var(--color-info)', count: 3 },
  { id: 'fq-cat-reservations', name: 'R\u00e9servations', icon: 'bi-calendar-check', iconBg: 'var(--color-accent-lighter)', iconColor: 'var(--color-accent)', count: 3 },
  { id: 'fq-cat-paiements', name: 'Paiements', icon: 'bi-credit-card', iconBg: 'var(--color-success-light)', iconColor: 'var(--color-success)', count: 3 },
  { id: 'fq-cat-coachs', name: 'Coachs', icon: 'bi-person-workspace', iconBg: 'var(--color-warning-light)', iconColor: 'var(--color-warning)', count: 3 },
  { id: 'fq-cat-programmes', name: 'Programmes', icon: 'bi-list-check', iconBg: '#F3E8FF', iconColor: '#8B5CF6', count: 2 },
  { id: 'fq-cat-securite', name: 'S\u00e9curit\u00e9', icon: 'bi-shield-lock', iconBg: 'var(--color-danger-light)', iconColor: 'var(--color-danger)', count: 3 },
  { id: 'fq-cat-support', name: 'Support', icon: 'bi-headset', iconBg: 'var(--color-gray-200)', iconColor: 'var(--color-gray-700)', count: 2 },
];

function FaqCategories() {
  return (
    <section className="fq-categories" aria-label="Cat\u00e9gories de questions">
      <div className="container">
        <div className="fq-section-header">
          <div className="fq-section-badge">
            <i className="bi bi-grid-3x3-gap-fill" />
            Cat\u00e9gories
          </div>
          <h2 className="fq-section-title">
            Parcourir par cat\u00e9gorie
          </h2>
          <p className="fq-section-subtitle">
            Choisissez un sujet pour trouver rapidement la r\u00e9ponse recherch\u00e9e.
          </p>
        </div>

        <div className="row g-4">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="col-6 col-md-4 col-lg-3">
              <FaqCategoryCard category={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqCategories;

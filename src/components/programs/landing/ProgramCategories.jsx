import { Link } from 'react-router-dom';

const categoriesData = [
  { name: 'Perte de poids', icon: 'bi-heart-pulse', count: 24, gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)' },
  { name: 'Musculation', icon: 'bi-trophy', count: 31, gradient: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)' },
  { name: 'Cardio', icon: 'bi-lightning-charge', count: 18, gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)' },
  { name: 'Yoga', icon: 'bi-circle', count: 15, gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' },
  { name: 'CrossFit', icon: 'bi-fire', count: 12, gradient: 'linear-gradient(135deg, #0F172A 0%, #334155 100%)' },
  { name: 'Nutrition', icon: 'bi-egg-fried', count: 20, gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' },
  { name: 'Remise en forme', icon: 'bi-activity', count: 22, gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)' },
  { name: 'Bien-\u00eatre', icon: 'bi-emoji-smile', count: 14, gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)' },
];

function ProgramCategories() {
  return (
    <section className="pl-categories" aria-label="Cat\u00e9gories de programmes">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-grid-3x3-gap-fill" />
            Cat\u00e9gories
          </div>
          <h2 className="pl-section-title">
            Explorez par discipline
          </h2>
          <p className="pl-section-subtitle">
            Trouvez le programme id\u00e9al parmi nos diff\u00e9rentes cat\u00e9gories sportives.
          </p>
        </div>

        <div className="row g-4">
          {categoriesData.map((cat) => (
            <div key={cat.name} className="col-6 col-md-4 col-lg-3">
              <div className="pl-category-card">
                <div className="pl-category-visual" style={{ background: cat.gradient }}>
                  <i className={`bi ${cat.icon}`} />
                  <span className="pl-category-count">{cat.count} programmes</span>
                </div>
                <div className="pl-category-body">
                  <h3 className="pl-category-name">{cat.name}</h3>
                  <Link
                    to="/programs/catalogue"
                    className="btn btn-sm btn-outline-primary w-100 pl-category-btn"
                  >
                    Explorer
                    <i className="bi bi-arrow-right ms-1" />
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

export default ProgramCategories;

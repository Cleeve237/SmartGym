import { CITIES, DISCIPLINES } from '../../utils/constants';

const GOALS = [
  'Perte de poids',
  'Prise de masse',
  'Tonification',
  'Performance',
  'Bien-etre',
  'Cardio',
];

function SearchHero({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    onSearch?.({
      city: form.get('city'),
      discipline: form.get('discipline'),
      goal: form.get('goal'),
    });
  };

  return (
    <section className="mp-hero">
      <div className="container">
        <div className="mp-hero-content">
          <h1 className="mp-hero-title">
            Trouvez votre coach sportif ideal
          </h1>
          <p className="mp-hero-subtitle">
            Des coachs qualifies pres de chez vous.
          </p>

          <form className="mp-hero-search" onSubmit={handleSubmit}>
            <div className="mp-hero-search-field">
              <label htmlFor="mp-city">Ville</label>
              <select id="mp-city" name="city" defaultValue="">
                <option value="">Toutes les villes</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="mp-hero-search-field">
              <label htmlFor="mp-discipline">Specialite</label>
              <select id="mp-discipline" name="discipline" defaultValue="">
                <option value="">Toutes les specialites</option>
                {DISCIPLINES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="mp-hero-search-field">
              <label htmlFor="mp-goal">Objectif</label>
              <select id="mp-goal" name="goal" defaultValue="">
                <option value="">Tous les objectifs</option>
                {GOALS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="mp-hero-search-btn">
              <i className="bi bi-search" />
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchHero;

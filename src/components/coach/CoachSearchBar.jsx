function CoachSearchBar() {
  return (
    <div className="coaches-search">
      <div className="coaches-search-form">
        <div className="coaches-search-field">
          <label htmlFor="cs-city">Ville</label>
          <select id="cs-city" defaultValue="">
            <option value="">Toutes les villes</option>
            <option value="yaounde">Yaounde</option>
            <option value="douala">Douala</option>
            <option value="bafoussam">Bafoussam</option>
            <option value="bamenda">Bamenda</option>
            <option value="garoua">Garoua</option>
            <option value="maroua">Maroua</option>
          </select>
        </div>
        <div className="coaches-search-field">
          <label htmlFor="cs-discipline">Discipline</label>
          <select id="cs-discipline" defaultValue="">
            <option value="">Toutes les disciplines</option>
            <option value="musculation">Musculation</option>
            <option value="fitness">Fitness</option>
            <option value="yoga">Yoga</option>
            <option value="boxe">Boxe</option>
            <option value="crossfit">CrossFit</option>
            <option value="cardio">Cardio</option>
            <option value="perte-de-poids">Perte de poids</option>
            <option value="bien-etre">Bien-etre</option>
          </select>
        </div>
        <div className="coaches-search-field">
          <label htmlFor="cs-goal">Objectif</label>
          <select id="cs-goal" defaultValue="">
            <option value="">Tous les objectifs</option>
            <option value="perte-de-poids">Perte de poids</option>
            <option value="prise-de-masse">Prise de masse</option>
            <option value="tonification">Tonification</option>
            <option value="performance">Performance</option>
            <option value="bien-etre">Bien-etre</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>
        <div className="coaches-search-field">
          <label htmlFor="cs-date">Date</label>
          <input type="date" id="cs-date" />
        </div>
        <button type="button" className="coaches-search-btn">
          <i className="bi bi-search" />
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default CoachSearchBar;

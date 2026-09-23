function HeroSearch() {
  return (
    <div className="hero-search-card">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row g-3 align-items-end">
          <div className="col-sm-6 col-lg-3">
            <label htmlFor="hero-ville" className="form-label">
              <i className="bi bi-geo-alt me-1" style={{ color: 'var(--color-primary)' }} />
              Ville
            </label>
            <select id="hero-ville" className="form-select" defaultValue="">
              <option value="" disabled>Choisir une ville</option>
              <option value="douala">Douala</option>
              <option value="yaounde">Yaounde</option>
              <option value="bafoussam">Bafoussam</option>
              <option value="bamenda">Bamenda</option>
              <option value="garoua">Garoua</option>
              <option value="maroua">Maroua</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-3">
            <label htmlFor="hero-discipline" className="form-label">
              <i className="bi bi-lightning me-1" style={{ color: 'var(--color-accent)' }} />
              Discipline
            </label>
            <select id="hero-discipline" className="form-select" defaultValue="">
              <option value="" disabled>Toutes les disciplines</option>
              <option value="musculation">Musculation</option>
              <option value="fitness">Fitness</option>
              <option value="yoga">Yoga</option>
              <option value="crossfit">CrossFit</option>
              <option value="boxe">Boxe</option>
              <option value="pilates">Pilates</option>
              <option value="danse">Danse</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-3">
            <label htmlFor="hero-date" className="form-label">
              <i className="bi bi-calendar3 me-1" style={{ color: 'var(--color-info)' }} />
              Date
            </label>
            <input
              id="hero-date"
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <button
              type="submit"
              className="btn btn-primary hero-search-btn w-100 d-inline-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-search" />
              Rechercher
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HeroSearch;

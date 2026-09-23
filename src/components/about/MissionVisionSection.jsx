function MissionVisionSection() {
  return (
    <section className="ab-mission" aria-label="Mission et Vision">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-compass" />
            Direction
          </div>
          <h2 className="ab-section-title">
            Notre mission &amp; vision
          </h2>
          <p className="ab-section-subtitle">
            Ce qui nous guide au quotidien et l&apos;avenir que nous construisons.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6">
            <div className="ab-mv-card ab-mv-card--mission">
              <div className="ab-mv-icon" style={{ backgroundColor: 'var(--color-primary-lighter)' }}>
                <i className="bi bi-bullseye" style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }} aria-hidden="true" />
              </div>
              <div className="ab-mv-label" style={{ backgroundColor: 'var(--color-primary-lighter)', color: 'var(--color-primary)' }}>
                <i className="bi bi-flag" />
                Mission
              </div>
              <h3 className="ab-mv-title">Faciliter l&apos;acc&egrave;s au coaching sportif</h3>
              <p className="ab-mv-text">
                Nous rendons le coaching sportif accessible &agrave; tous les Camerounais
                en offrant une plateforme simple, s\u00e9curis\u00e9e et innovante qui connecte
                directement les athl&egrave;tes &agrave; des professionnels certifi\u00e9s.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ab-mv-card ab-mv-card--vision">
              <div className="ab-mv-icon" style={{ backgroundColor: 'var(--color-accent-lighter)' }}>
                <i className="bi bi-eye" style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }} aria-hidden="true" />
              </div>
              <div className="ab-mv-label" style={{ backgroundColor: 'var(--color-accent-lighter)', color: 'var(--color-accent)' }}>
                <i className="bi bi-rocket-takeoff" />
                Vision
              </div>
              <h3 className="ab-mv-title">La r\u00e9f\u00e9rence en Afrique centrale</h3>
              <p className="ab-mv-text">
                Devenir la plateforme de r\u00e9f\u00e9rence du coaching sportif en Afrique centrale,
                en donnant aux athl&egrave;tes et aux coachs les outils pour progresser,
                se connecter et r\u00e9ussir ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;

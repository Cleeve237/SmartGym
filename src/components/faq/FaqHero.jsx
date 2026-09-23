function FaqHero() {
  return (
    <section className="fq-hero" aria-label="Questions fr\u00e9quentes SmartGym">
      <div className="container fq-hero-inner">
        <div className="row align-items-center py-5">
          <div className="col-lg-7 py-lg-5">
            <div className="fq-hero-badge mb-4">
              <i className="bi bi-question-circle-fill" />
              <span>Centre d&apos;aide</span>
            </div>

            <h1 className="fq-hero-title mb-4">
              Comment pouvons-nous{' '}
              <span className="fq-hero-title-accent">vous aider</span>{' ?'}
            </h1>

            <p className="fq-hero-subtitle">
              Retrouvez les r\u00e9ponses aux questions les plus fr\u00e9quentes
              sur SmartGym.
            </p>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="fq-hero-visual">
              <div className="fq-hero-visual-box">
                <i className="bi bi-headset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;

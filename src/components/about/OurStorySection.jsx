function OurStorySection() {
  return (
    <section className="ab-story" aria-label="Notre histoire">
      <div className="container">
        <div className="ab-story-layout">
          <div className="ab-story-visual">
            <div className="ab-story-illustration">
              <i className="bi bi-lightbulb" />
              <div className="ab-story-illustration-badge">
                <div className="ab-story-illustration-badge-icon">
                  <i className="bi bi-calendar-event" />
                </div>
                <div>
                  <div className="ab-story-illustration-badge-text">Fond\u00e9 en 2025</div>
                  <div className="ab-story-illustration-badge-sub">Yaound\u00e9, Cameroun</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ab-story-content">
            <div className="ab-story-badge">
              <i className="bi bi-book-half" />
              Notre histoire
            </div>
            <h2 className="ab-story-title">
              Comment tout a commenc\u00e9
            </h2>
            <p className="ab-story-text">
              SmartGym est n\u00e9 d&apos;un constat simple&nbsp;: au Cameroun,
              trouver un coach sportif qualifi\u00e9 est un d\u00e9fi quotidien.
              Les athl&egrave;tes amateurs comme les sportifs confirm\u00e9s peinent &agrave;
              acc\u00e9der &agrave; un accompagnement professionnel, fiable et accessible.
            </p>
            <p className="ab-story-text">
              Parall&egrave;lement, des centaines de coachs talentueux manquent de visibilit\u00e9
              et n&apos;ont pas les outils pour d\u00e9velopper leur activit\u00e9. Les r\u00e9servations
              se font au coup par coup, les paiements sont peu s\u00e9curis\u00e9s et le suivi
              sportif est quasi inexistant.
            </p>
            <p className="ab-story-text">
              C&apos;est pourquoi nous avons cr\u00e9\u00e9 SmartGym&nbsp;: une plateforme qui connecte
              directement les athl&egrave;tes &agrave; des coachs v\u00e9rifi\u00e9s, avec des outils de
              r\u00e9servation, de paiement et de suivi pens\u00e9s pour rendre l&apos;exp\u00e9rience
              fluide et motivante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;

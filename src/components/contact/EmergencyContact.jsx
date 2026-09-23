function EmergencyContact() {
  return (
    <section className="ct-emergency" aria-label="Contact d'urgence">
      <div className="container">
        <div className="ct-section-header">
          <div className="ct-section-badge">
            <i className="bi bi-exclamation-triangle-fill" />
            Urgence
          </div>
          <h2 className="ct-section-title">
            Besoin d&apos;une assistance rapide ?
          </h2>
          <p className="ct-section-subtitle">
            Notre &eacute;quipe d&apos;urgence est disponible pour vous aider rapidement.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="ct-emergency-card">
              <div className="ct-emergency-icon">
                <i className="bi bi-headset" />
              </div>
              <h3 className="ct-emergency-title">Support d&apos;urgence</h3>
              <p className="ct-emergency-subtitle">
                Contactez-nous directement pour une assistance imm&eacute;diate.
              </p>
              <div className="ct-emergency-items">
                <a href="tel:+237600000000" className="ct-emergency-item">
                  <i className="bi bi-telephone-fill" />
                  +237 6XX XXX XXX
                </a>
                <a href="#" className="ct-emergency-item">
                  <i className="bi bi-whatsapp" />
                  WhatsApp
                </a>
                <a href="mailto:urgence@smartgym.cm" className="ct-emergency-item">
                  <i className="bi bi-envelope-fill" />
                  urgence@smartgym.cm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencyContact;

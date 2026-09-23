import MapPlaceholder from './MapPlaceholder';

function LocationSection() {
  return (
    <section className="ct-location" id="location" aria-label="Localisation">
      <div className="container">
        <div className="ct-section-header">
          <div className="ct-section-badge">
            <i className="bi bi-geo-alt-fill" />
            Localisation
          </div>
          <h2 className="ct-section-title">
            O&ugrave; nous trouver
          </h2>
          <p className="ct-section-subtitle">
            Notre si&egrave;ge est situ&eacute; au c&oelig;ur de Yaound&eacute;.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <MapPlaceholder />
          </div>

          <div className="col-12 col-lg-5">
            <div className="ct-location-info">
              <h3 className="ct-location-info-title">
                <i className="bi bi-building me-2" style={{ color: 'var(--color-primary)' }} />
                Si&egrave;ge SmartGym
              </h3>

              <div className="ct-location-info-item">
                <div className="ct-location-info-icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div>
                  <div className="ct-location-info-label">Adresse</div>
                  <div className="ct-location-info-value">Boulevard du 20 Mai, Yaound&eacute;</div>
                </div>
              </div>

              <div className="ct-location-info-item">
                <div className="ct-location-info-icon">
                  <i className="bi bi-building" />
                </div>
                <div>
                  <div className="ct-location-info-label">Immeuble</div>
                  <div className="ct-location-info-value">SmartGym Tower, 3&egrave;me &eacute;tage</div>
                </div>
              </div>

              <div className="ct-location-info-item">
                <div className="ct-location-info-icon">
                  <i className="bi bi-map" />
                </div>
                <div>
                  <div className="ct-location-info-label">Ville</div>
                  <div className="ct-location-info-value">Yaound&eacute;, Cameroun</div>
                </div>
              </div>

              <div className="ct-location-info-item">
                <div className="ct-location-info-icon">
                  <i className="bi bi-envelope" />
                </div>
                <div>
                  <div className="ct-location-info-label">Email</div>
                  <div className="ct-location-info-value">contact@smartgym.cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

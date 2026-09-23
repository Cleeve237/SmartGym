function CoachSidebar({ coach }) {
  const { price, sessionDuration, nextAvailability } = coach;

  return (
    <aside className="cd-sidebar">
      <div className="cd-sidebar-card">

        {/* Prix */}
        <div className="cd-sidebar-price">
          <div className="cd-sidebar-price-value">{price}</div>
          <div className="cd-sidebar-price-unit">par seance</div>
        </div>

        {/* Infos */}
        <div className="cd-sidebar-info">
          <div className="cd-sidebar-info-row">
            <div className="cd-sidebar-info-icon">
              <i className="bi bi-clock" />
            </div>
            <div>
              <div className="cd-sidebar-info-label">Duree moyenne</div>
              <div className="cd-sidebar-info-value">{sessionDuration}</div>
            </div>
          </div>
          <div className="cd-sidebar-info-row">
            <div className="cd-sidebar-info-icon">
              <i className="bi bi-calendar-check" />
            </div>
            <div>
              <div className="cd-sidebar-info-label">Prochaine disponibilite</div>
              <div className="cd-sidebar-info-value">{nextAvailability}</div>
            </div>
          </div>
          <div className="cd-sidebar-info-row">
            <div className="cd-sidebar-info-icon">
              <i className="bi bi-shield-check" />
            </div>
            <div>
              <div className="cd-sidebar-info-label">Profil</div>
              <div className="cd-sidebar-info-value">Coach verifie</div>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="cd-sidebar-buttons">
          <button type="button" className="cd-sidebar-btn cd-sidebar-btn--primary">
            <i className="bi bi-calendar-plus" />
            Reserver maintenant
          </button>
          <button type="button" className="cd-sidebar-btn cd-sidebar-btn--secondary">
            <i className="bi bi-chat-dots" />
            Contacter le coach
          </button>
        </div>

      </div>
    </aside>
  );
}

export default CoachSidebar;

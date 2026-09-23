import ProfileSection from '../ProfileSection';

function CoachPricing({ pricePerSession = 0, sessionDuration = 60, currency = 'FCFA' }) {
  return (
    <ProfileSection title="Tarification" icon="bi-cash-stack">
      {pricePerSession > 0 ? (
        <div className="prf-pricing-card">
          <div className="prf-pricing-amount">
            <span className="prf-pricing-currency">{currency} </span>
            {pricePerSession.toLocaleString('fr-FR')}
          </div>
          <div className="prf-pricing-period">par seance</div>
          <div className="prf-pricing-details">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                <i className="bi bi-clock me-1" />
                {sessionDuration} min
              </span>
              <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                <i className="bi bi-calendar-check me-1" />
                En ligne ou sur place
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="prf-info-value--empty mb-0">
          Tarification non definie
        </p>
      )}
    </ProfileSection>
  );
}

export default CoachPricing;

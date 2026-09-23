function ProgramPricingForm({ errors }) {
  return (
    <div className="cd-pgm-form-group">
      <div className="cd-pgm-form-row">
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-price">
            Prix
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="pgm-price"
              name="price"
              type="number"
              className="cd-pgm-form-input"
              placeholder="0"
              min={0}
              style={{ paddingLeft: '3.5rem' }}
            />
            <span style={{
              position: 'absolute',
              left: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-gray-500)',
              pointerEvents: 'none'
            }}>
              FCFA
            </span>
          </div>
          {errors?.price && <p className="cd-pgm-form-error">{errors.price}</p>}
          <p className="cd-pgm-form-hint">Prix unique ou abonnement. Laissez 0 pour un programme gratuit.</p>
        </div>
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-weeks">
            Duree totale (semaines)
          </label>
          <input
            id="pgm-weeks"
            name="weeks"
            type="number"
            className="cd-pgm-form-input"
            placeholder="Ex: 8"
            min={1}
            max={52}
          />
          {errors?.weeks && <p className="cd-pgm-form-error">{errors.weeks}</p>}
        </div>
      </div>

      <div className="cd-pgm-form-row" style={{ marginTop: '1rem' }}>
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-sessions">
            Nombre de seances
          </label>
          <input
            id="pgm-sessions"
            name="totalSessions"
            type="number"
            className="cd-pgm-form-input"
            placeholder="Ex: 24"
            min={1}
          />
          {errors?.totalSessions && <p className="cd-pgm-form-error">{errors.totalSessions}</p>}
        </div>
        <div>
          <label className="cd-pgm-form-label" htmlFor="pgm-currency">
            Devise
          </label>
          <select id="pgm-currency" name="currency" className="cd-pgm-form-select">
            <option value="FCFA">FCFA (Franc CFA)</option>
            <option value="EUR">EUR (Euro)</option>
            <option value="USD">USD (Dollar)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProgramPricingForm;

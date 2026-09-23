function PricingStep({ data, errors, onChange }) {
  const handleChange = (field) => (e) => onChange(field, e.target.value);

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Votre tarification</h2>
        <p className="cr-step-subtitle">
          Definissez le prix de vos seances. Vous pourrez le modifier plus tard.
        </p>
      </div>

      <div className="cr-field-row">
        <div className="cr-field">
          <label htmlFor="cr-priceMin" className="cr-field-label">Prix minimum (FCFA)</label>
          <input
            id="cr-priceMin"
            type="number"
            className={`cr-field-input${errors.priceMin ? ' cr-field-input--error' : ''}`}
            placeholder="5000"
            min="0"
            step="500"
            value={data.priceMin || ''}
            onChange={handleChange('priceMin')}
          />
          {errors.priceMin && (
            <span className="cr-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.priceMin}
            </span>
          )}
        </div>

        <div className="cr-field">
          <label htmlFor="cr-priceMax" className="cr-field-label">Prix maximum (FCFA)</label>
          <input
            id="cr-priceMax"
            type="number"
            className={`cr-field-input${errors.priceMax ? ' cr-field-input--error' : ''}`}
            placeholder="15000"
            min="0"
            step="500"
            value={data.priceMax || ''}
            onChange={handleChange('priceMax')}
          />
          {errors.priceMax && (
            <span className="cr-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.priceMax}
            </span>
          )}
        </div>
      </div>

      <div className="cr-field">
        <label htmlFor="cr-sessionDuration" className="cr-field-label">Duree moyenne d&apos;une seance</label>
        <select
          id="cr-sessionDuration"
          className={`cr-field-select${errors.sessionDuration ? ' cr-field-select--error' : ''}`}
          value={data.sessionDuration || ''}
          onChange={handleChange('sessionDuration')}
        >
          <option value="">Selectionnez</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">1 heure</option>
          <option value="90">1h30</option>
          <option value="120">2 heures</option>
        </select>
        {errors.sessionDuration && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.sessionDuration}
          </span>
        )}
      </div>

      <div className="cr-field-hint" style={{ marginTop: '0.5rem' }}>
        <i className="bi bi-info-circle" /> La devise est le FCFA (Franc CFA). Vous pourrez ajuster vos tarifs ulterieurement.
      </div>
    </div>
  );
}

export default PricingStep;

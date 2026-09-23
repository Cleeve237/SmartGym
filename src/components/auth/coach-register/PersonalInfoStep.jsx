function PersonalInfoStep({ data, errors, onChange }) {
  const handleChange = (field) => (e) => onChange(field, e.target.value);

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Vos informations personnelles</h2>
        <p className="cr-step-subtitle">
          Commençons par connaitre vos informations de base.
        </p>
      </div>

      <div className="cr-field-row">
        <div className="cr-field">
          <label htmlFor="cr-firstName" className="cr-field-label">Prenom</label>
          <input
            id="cr-firstName"
            type="text"
            className={`cr-field-input${errors.firstName ? ' cr-field-input--error' : ''}`}
            placeholder="Jean"
            autoComplete="given-name"
            value={data.firstName || ''}
            onChange={handleChange('firstName')}
          />
          {errors.firstName && (
            <span className="cr-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="cr-field">
          <label htmlFor="cr-lastName" className="cr-field-label">Nom</label>
          <input
            id="cr-lastName"
            type="text"
            className={`cr-field-input${errors.lastName ? ' cr-field-input--error' : ''}`}
            placeholder="Dupont"
            autoComplete="family-name"
            value={data.lastName || ''}
            onChange={handleChange('lastName')}
          />
          {errors.lastName && (
            <span className="cr-field-error">
              <i className="bi bi-exclamation-circle" />
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      <div className="cr-field">
        <label htmlFor="cr-email" className="cr-field-label">Adresse e-mail</label>
        <input
          id="cr-email"
          type="email"
          className={`cr-field-input${errors.email ? ' cr-field-input--error' : ''}`}
          placeholder="jean.dupont@email.com"
          autoComplete="email"
          value={data.email || ''}
          onChange={handleChange('email')}
        />
        {errors.email && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.email}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-phone" className="cr-field-label">Telephone</label>
        <input
          id="cr-phone"
          type="tel"
          className={`cr-field-input${errors.phone ? ' cr-field-input--error' : ''}`}
          placeholder="+237 6XX XXX XXX"
          autoComplete="tel"
          value={data.phone || ''}
          onChange={handleChange('phone')}
        />
        {errors.phone && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.phone}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-city" className="cr-field-label">Ville</label>
        <select
          id="cr-city"
          className={`cr-field-select${errors.city ? ' cr-field-select--error' : ''}`}
          value={data.city || ''}
          onChange={handleChange('city')}
        >
          <option value="">Selectionnez votre ville</option>
          <option value="yaounde">Yaounde</option>
          <option value="douala">Douala</option>
          <option value="bafoussam">Bafoussam</option>
          <option value="bamenda">Bamenda</option>
          <option value="garoua">Garoua</option>
          <option value="maroua">Maroua</option>
          <option value="bertoua">Bertoua</option>
          <option value="ebolowa">Ebolowa</option>
          <option value="kribi">Kribi</option>
          <option value="limbe">Limbe</option>
        </select>
        {errors.city && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.city}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-password" className="cr-field-label">Mot de passe</label>
        <div className="cr-password-wrapper">
          <input
            id="cr-password"
            type="password"
            className={`cr-field-input${errors.password ? ' cr-field-input--error' : ''}`}
            placeholder="Minimum 8 caracteres"
            autoComplete="new-password"
            value={data.password || ''}
            onChange={handleChange('password')}
          />
        </div>
        {errors.password && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.password}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-confirmPassword" className="cr-field-label">Confirmer le mot de passe</label>
        <div className="cr-password-wrapper">
          <input
            id="cr-confirmPassword"
            type="password"
            className={`cr-field-input${errors.confirmPassword ? ' cr-field-input--error' : ''}`}
            placeholder="Retapez votre mot de passe"
            autoComplete="new-password"
            value={data.confirmPassword || ''}
            onChange={handleChange('confirmPassword')}
          />
        </div>
        {errors.confirmPassword && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.confirmPassword}
          </span>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoStep;

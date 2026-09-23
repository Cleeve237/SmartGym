function ProfessionalInfoStep({ data, errors, onChange }) {
  const handleChange = (field) => (e) => onChange(field, e.target.value);

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Votre parcours professionnel</h2>
        <p className="cr-step-subtitle">
          Parlez-nous de votre experience et de vos qualifications.
        </p>
      </div>

      <div className="cr-field">
        <label htmlFor="cr-experience" className="cr-field-label">Annees d&apos;experience</label>
        <select
          id="cr-experience"
          className={`cr-field-select${errors.experience ? ' cr-field-select--error' : ''}`}
          value={data.experience || ''}
          onChange={handleChange('experience')}
        >
          <option value="">Selectionnez</option>
          <option value="0-1">Moins d&apos;1 an</option>
          <option value="1-3">1 a 3 ans</option>
          <option value="3-5">3 a 5 ans</option>
          <option value="5-10">5 a 10 ans</option>
          <option value="10+">Plus de 10 ans</option>
        </select>
        {errors.experience && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.experience}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-qualification" className="cr-field-label">Niveau de qualification</label>
        <select
          id="cr-qualification"
          className={`cr-field-select${errors.qualification ? ' cr-field-select--error' : ''}`}
          value={data.qualification || ''}
          onChange={handleChange('qualification')}
        >
          <option value="">Selectionnez</option>
          <option value="debutant">Debutant (auto-forme)</option>
          <option value="college">College / Ecole sportive</option>
          <option value="licence">Licence en STAPS / EPS</option>
          <option value="master">Master en Sport / Education physique</option>
          <option value="certifie">Certifie (BPJEPS, CQP, etc.)</option>
          <option value="diplome">Diplome d&apos;Etat</option>
        </select>
        {errors.qualification && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.qualification}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-certifications" className="cr-field-label">Diplomes / Certifications</label>
        <input
          id="cr-certifications"
          type="text"
          className={`cr-field-input${errors.certifications ? ' cr-field-input--error' : ''}`}
          placeholder="Ex: BPJEPS, Certif 2.0, Diplome d'Etat..."
          value={data.certifications || ''}
          onChange={handleChange('certifications')}
        />
        <span className="cr-field-hint">Separez par des virgules si plusieurs</span>
        {errors.certifications && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.certifications}
          </span>
        )}
      </div>

      <div className="cr-field">
        <label htmlFor="cr-workLocation" className="cr-field-label">Lieu principal d&apos;exercice</label>
        <input
          id="cr-workLocation"
          type="text"
          className={`cr-field-input${errors.workLocation ? ' cr-field-input--error' : ''}`}
          placeholder="Ex: Salle Kinetic, Yaounde"
          value={data.workLocation || ''}
          onChange={handleChange('workLocation')}
        />
        {errors.workLocation && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.workLocation}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProfessionalInfoStep;

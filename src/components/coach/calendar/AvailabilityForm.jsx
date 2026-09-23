function AvailabilityForm({ errors }) {
  return (
    <div className="cd-cal-form">
      <div className="cd-cal-form-header">
        <h3 className="cd-cal-form-title">
          <i className="bi bi-plus-circle" />
          Ajouter un creneau
        </h3>
      </div>
      <div className="cd-cal-form-body">
        <div className="cd-cal-form-row" style={{ marginBottom: '0.75rem' }}>
          <div>
            <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="avail-date">
              Date
            </label>
            <input id="avail-date" type="date" className="cd-pgm-form-input" />
            {errors?.date && <p className="cd-pgm-form-error">{errors.date}</p>}
          </div>
          <div>
            <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="avail-type">
              Type
            </label>
            <select id="avail-type" className="cd-pgm-form-select">
              <option value="available">Disponible</option>
              <option value="unavailable">Indisponible</option>
              <option value="break">Pause</option>
            </select>
          </div>
        </div>

        <div className="cd-cal-form-row" style={{ marginBottom: '0.75rem' }}>
          <div>
            <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="avail-start">
              Heure de debut
            </label>
            <input id="avail-start" type="time" className="cd-pgm-form-input" defaultValue="08:00" />
            {errors?.startTime && <p className="cd-pgm-form-error">{errors.startTime}</p>}
          </div>
          <div>
            <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="avail-end">
              Heure de fin
            </label>
            <input id="avail-end" type="time" className="cd-pgm-form-input" defaultValue="18:00" />
            {errors?.endTime && <p className="cd-pgm-form-error">{errors.endTime}</p>}
          </div>
        </div>

        <div className="cd-cal-form-row">
          <div>
            <label className="cd-pgm-form-label" htmlFor="avail-location">
              Lieu
            </label>
            <input id="avail-location" type="text" className="cd-pgm-form-input" placeholder="Ex: Salle 1, Salle B..." />
          </div>
          <div>
            <label className="cd-pgm-form-label" htmlFor="avail-note">
              Commentaire
            </label>
            <input id="avail-note" type="text" className="cd-pgm-form-input" placeholder="Note optionnelle..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityForm;

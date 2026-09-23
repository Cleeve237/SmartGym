function ProgramScheduleForm() {
  return (
    <div className="cd-pgm-form-group">
      <div className="cd-pgm-form-row">
        <div>
          <label className="cd-pgm-form-label" htmlFor="pgm-freq">
            Frequence hebdomadaire
          </label>
          <select id="pgm-freq" name="sessionsPerWeek" className="cd-pgm-form-select">
            <option value="">Choisir</option>
            <option value={1}>1 seance / semaine</option>
            <option value={2}>2 seances / semaine</option>
            <option value={3}>3 seances / semaine</option>
            <option value={4}>4 seances / semaine</option>
            <option value={5}>5 seances / semaine</option>
            <option value={6}>6 seances / semaine</option>
            <option value={7}>Quotidien</option>
          </select>
          <p className="cd-pgm-form-hint">Combien de seances par semaine recommandez-vous ?</p>
        </div>
        <div>
          <label className="cd-pgm-form-label" htmlFor="pgm-duration">
            Duree d&apos;une seance (minutes)
          </label>
          <input
            id="pgm-duration"
            name="sessionDuration"
            type="number"
            className="cd-pgm-form-input"
            placeholder="Ex: 60"
            min={15}
            max={180}
          />
          <p className="cd-pgm-form-hint">Duree moyenne d&apos;une seance d&apos;entrainement.</p>
        </div>
      </div>

      <div className="cd-pgm-form-group" style={{ marginTop: '1rem' }}>
        <label className="cd-pgm-form-label" htmlFor="pgm-schedule-note">
          Horaires indicatifs
        </label>
        <textarea
          id="pgm-schedule-note"
          name="scheduleNote"
          className="cd-pgm-form-textarea"
          placeholder="Ex: Lundi, Mercredi, Vendredi de 18h a 19h. Flexible selon vos disponibilites."
          rows={3}
        />
        <p className="cd-pgm-form-hint">Information indiquative pour les clients. Non contraignant.</p>
      </div>
    </div>
  );
}

export default ProgramScheduleForm;

function ProgramBasicInformation({ errors }) {
  return (
    <div className="cd-pgm-form-group">
      <div className="cd-pgm-form-row">
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-title">
            Nom du programme
          </label>
          <input
            id="pgm-title"
            name="title"
            type="text"
            className="cd-pgm-form-input"
            placeholder="Ex: Musculation Fondamentale"
          />
          {errors?.title && <p className="cd-pgm-form-error">{errors.title}</p>}
        </div>
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-category">
            Categorie
          </label>
          <select id="pgm-category" name="category" className="cd-pgm-form-select">
            <option value="">Choisir une categorie</option>
            <option value="Musculation">Musculation</option>
            <option value="Cardio">Cardio</option>
            <option value="Yoga">Yoga</option>
            <option value="CrossFit">CrossFit</option>
            <option value="Boxe">Boxe</option>
            <option value="Danse">Danse</option>
            <option value="Pilates">Pilates</option>
            <option value="Athletisme">Athletisme</option>
            <option value="Natation">Natation</option>
            <option value="Arts Martiaux">Arts Martiaux</option>
          </select>
          {errors?.category && <p className="cd-pgm-form-error">{errors.category}</p>}
        </div>
      </div>

      <div className="cd-pgm-form-group" style={{ marginTop: '1rem' }}>
        <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-desc-short">
          Description courte
        </label>
        <input
          id="pgm-desc-short"
          name="shortDescription"
          type="text"
          className="cd-pgm-form-input"
          placeholder="Resume en une phrase (affiche dans la liste)"
          maxLength={160}
        />
        <p className="cd-pgm-form-hint">Max. 160 caracteres — visible dans les cartes et resultats de recherche.</p>
      </div>

      <div className="cd-pgm-form-group">
        <label className="cd-pgm-form-label" htmlFor="pgm-desc-full">
          Description complete
        </label>
        <textarea
          id="pgm-desc-full"
          name="description"
          className="cd-pgm-form-textarea"
          placeholder="Decrivez votre programme en detail : objectifs, approche, public cible..."
          rows={5}
        />
      </div>

      <div className="cd-pgm-form-row">
        <div>
          <label className="cd-pgm-form-label cd-pgm-form-label--required" htmlFor="pgm-difficulty">
            Niveau
          </label>
          <select id="pgm-difficulty" name="difficulty" className="cd-pgm-form-select">
            <option value="">Choisir un niveau</option>
            <option value="debutant">Debutant</option>
            <option value="intermediaire">Intermediaire</option>
            <option value="avance">Avance</option>
          </select>
          {errors?.difficulty && <p className="cd-pgm-form-error">{errors.difficulty}</p>}
        </div>
        <div>
          <label className="cd-pgm-form-label" htmlFor="pgm-objective">
            Objectif principal
          </label>
          <input
            id="pgm-objective"
            name="mainObjective"
            type="text"
            className="cd-pgm-form-input"
            placeholder="Ex: Perdre du poids, gagner en force..."
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramBasicInformation;

import { useState } from 'react';

const MAX_CHARS = 1000;

function BiographyStep({ data, errors, onChange }) {
  const [charCount, setCharCount] = useState((data.biography || '').length);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setCharCount(value.length);
      onChange('biography', value);
    }
  };

  const counterClass = charCount > MAX_CHARS
    ? 'cr-char-counter cr-char-counter--over'
    : charCount > MAX_CHARS * 0.9
      ? 'cr-char-counter cr-char-counter--warn'
      : 'cr-char-counter';

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Presentez-vous</h2>
        <p className="cr-step-subtitle">
          Decrivez votre parcours, votre approche et ce qui vous rend unique. C&apos;est ce que les clients verront en premier.
        </p>
      </div>

      <div className="cr-field">
        <label htmlFor="cr-biography" className="cr-field-label">Votre presentation</label>
        <textarea
          id="cr-biography"
          className={`cr-field-textarea${errors.biography ? ' cr-field-textarea--error' : ''}`}
          placeholder="Bonjour, je suis coach sportif certifie avec X annees d'experience... Expliquez votre parcours, votre philosophie d'entrainement, et ce que les clients peuvent attendre de vous."
          value={data.biography || ''}
          onChange={handleChange}
          maxLength={MAX_CHARS}
        />
        <div className={counterClass}>
          {charCount} / {MAX_CHARS} caracteres
        </div>
        {errors.biography && (
          <span className="cr-field-error">
            <i className="bi bi-exclamation-circle" />
            {errors.biography}
          </span>
        )}
      </div>
    </div>
  );
}

export default BiographyStep;

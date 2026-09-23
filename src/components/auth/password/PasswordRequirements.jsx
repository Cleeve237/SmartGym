const REQUIREMENTS = [
  { id: 'length', label: '8 caracteres minimum', test: (p) => p.length >= 8 },
  { id: 'upper', label: 'Une majuscule', test: (p) => /[A-Z]/.test(p) },
  { id: 'lower', label: 'Une minuscule', test: (p) => /[a-z]/.test(p) },
  { id: 'digit', label: 'Un chiffre', test: (p) => /\d/.test(p) },
  { id: 'special', label: 'Un caractere special', test: (p) => /[^A-Za-z0-9]/.test(p) },
];

function PasswordRequirements({ password = '' }) {
  return (
    <div className="pwd-reset-requirements" aria-label="Exigences du mot de passe">
      <span className="pwd-reset-requirements-title">Le mot de passe doit contenir :</span>
      <ul className="pwd-reset-requirements-list">
        {REQUIREMENTS.map((req) => {
          const met = password.length > 0 && req.test(password);
          return (
            <li
              key={req.id}
              className={`pwd-reset-req-item${met ? ' pwd-reset-req-item--met' : ''}`}
            >
              <span className="pwd-reset-req-icon">
                <i className={met ? 'bi bi-check-lg' : 'bi bi-circle'} />
              </span>
              {req.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PasswordRequirements;

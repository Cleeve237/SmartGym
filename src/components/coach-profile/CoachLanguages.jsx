import CoachLangBadge from './CoachLangBadge';

export default function CoachLanguages({ languages }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-globe2" />
        <h2>Langues</h2>
      </div>
      <div className="cp-langs">
        {languages.map((l, i) => (
          <CoachLangBadge key={i} lang={l} />
        ))}
      </div>
    </div>
  );
}

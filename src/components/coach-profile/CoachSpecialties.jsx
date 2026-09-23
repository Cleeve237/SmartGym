import CoachGridItem from './CoachGridItem';

export default function CoachSpecialties({ specialties }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-star" />
        <h2>Spécialités</h2>
      </div>
      <div className="cp-grid-2">
        {specialties.map((s, i) => (
          <CoachGridItem key={i} icon="lightning-fill" label={s} />
        ))}
      </div>
    </div>
  );
}

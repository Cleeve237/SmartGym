import ProfileSection from '../ProfileSection';

function ClientGoalsCard({ goals = {} }) {
  const hasData = goals.objective || goals.fitnessLevel;

  if (!hasData) {
    return (
      <ProfileSection title="Objectifs sportifs" icon="bi-bullseye">
        <div className="prf-empty">
          <i className="bi bi-bullseye" />
          <p className="prf-empty-text">
            Aucun objectif defini. Ajoutez vos objectifs pour personnaliser votre experience.
          </p>
        </div>
      </ProfileSection>
    );
  }

  return (
    <ProfileSection title="Objectifs sportifs" icon="bi-bullseye">
      <div className="prf-info-grid">
        {goals.objective && (
          <div className="prf-info-item">
            <span className="prf-info-label">Objectif</span>
            <span className="prf-info-value">{goals.objective}</span>
          </div>
        )}
        {goals.fitnessLevel && (
          <div className="prf-info-item">
            <span className="prf-info-label">Niveau</span>
            <span className="prf-info-value">{goals.fitnessLevel}</span>
          </div>
        )}
        {goals.targetWeight && (
          <div className="prf-info-item">
            <span className="prf-info-label">Poids cible</span>
            <span className="prf-info-value">{goals.targetWeight} kg</span>
          </div>
        )}
        {goals.sessionsPerWeek && (
          <div className="prf-info-item">
            <span className="prf-info-label">Seances / semaine</span>
            <span className="prf-info-value">{goals.sessionsPerWeek}</span>
          </div>
        )}
      </div>
    </ProfileSection>
  );
}

export default ClientGoalsCard;

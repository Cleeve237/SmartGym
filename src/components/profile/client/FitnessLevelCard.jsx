import ProfileSection from '../ProfileSection';

const LEVEL_CONFIG = {
  'Debutant': { color: 'info', icon: 'bi-seed', progress: 25 },
  'Intermediaire': { color: 'warning', icon: 'bi-tree', progress: 60 },
  'Avance': { color: 'success', icon: 'bi-trophy', progress: 90 },
};

function FitnessLevelCard({ level = '' }) {
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG['Debutant'];
  const progress = config.progress;

  return (
    <ProfileSection title="Niveau de forme" icon="bi-speedometer">
      {level ? (
        <div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="prf-info-value">{level}</span>
            <span className={`badge bg-${config.color}`}>{progress}%</span>
          </div>
          <div className="progress" style={{ height: '8px' }}>
            <div
              className={`progress-bar bg-${config.color}`}
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Niveau: ${level}`}
            />
          </div>
          <p className="text-muted mt-2 mb-0" style={{ fontSize: 'var(--font-size-sm)' }}>
            {level === 'Debutant' && 'Vous commencez votre parcours sportif. Continuez !'}
            {level === 'Intermediaire' && 'Bon niveau ! Vous progressez regulierement.'}
            {level === 'Avance' && 'Excellent niveau. Vous etes un athlete confirme.'}
          </p>
        </div>
      ) : (
        <div className="prf-empty">
          <i className="bi bi-speedometer" />
          <p className="prf-empty-text">Niveau non defini</p>
        </div>
      )}
    </ProfileSection>
  );
}

export default FitnessLevelCard;

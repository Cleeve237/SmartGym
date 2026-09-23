const LEVEL_MAP = {
  debutant: { label: 'Debutant', icon: 'bi-heart' },
  intermediaire: { label: 'Intermediaire', icon: 'bi-lightning' },
  avance: { label: 'Avance', icon: 'bi-fire' }
};

function DifficultyBadge({ level }) {
  const config = LEVEL_MAP[level] || LEVEL_MAP.debutant;

  return (
    <span className={`pg-badge pg-badge--${level}`}>
      <i className={`bi ${config.icon}`} />
      {config.label}
    </span>
  );
}

export default DifficultyBadge;

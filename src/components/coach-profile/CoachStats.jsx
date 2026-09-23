import CoachStat from './CoachStat';

export default function CoachStats({ coach }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-graph-up-arrow" />
        <h2>Statistiques</h2>
      </div>
      <div className="cp-stats">
        <CoachStat value={coach.clientsCount} label="Clients" icon={<i className="bi bi-people-fill" style={{color:'var(--color-primary)'}} />} />
        <CoachStat value={coach.sessionsCount} label="Sessions" icon={<i className="bi bi-lightning-fill" style={{color:'var(--color-orange)'}} />} />
        <CoachStat value={`${coach.yearsExp}+`} label="Années d'exp." icon={<i className="bi bi-award-fill" style={{color:'#8B5CF6'}} />} />
      </div>
    </div>
  );
}

import TeamMemberCard from './TeamMemberCard';

const teamData = [
  {
    name: 'Eric Tchuente',
    role: 'Fondateur & CEO',
    bio: 'Passionn\u00e9 par la tech et le sport, Eric a cr\u00e9\u00e9 SmartGym pour combler le manque d&apos;outils num\u00e9riques dans le fitness au Cameroun.',
    color: 'var(--color-primary)',
  },
  {
    name: 'Sarah Nkou',
    role: 'Directrice Op\u00e9rations',
    bio: 'Experte en gestion de projet, Sarah supervise le d\u00e9veloppement de la plateforme et l&apos;exp\u00e9rience coach-client.',
    color: 'var(--color-info)',
  },
  {
    name: 'Jean Mbarga',
    role: 'Directeur Technique',
    bio: 'Ing\u00e9nieur logiciel passionn\u00e9, Jean architecte les syst&egrave;mes qui font tourner SmartGym au quotidien.',
    color: 'var(--color-accent)',
  },
  {
    name: 'Amina Belo',
    role: 'Responsable Marketing',
    bio: 'Strat\u00e8ge digitale talentueuse, Amina construit la marque SmartGym et d\u00e9veloppe la communaut\u00e9 d&apos;utilisateurs.',
    color: '#8B5CF6',
  },
];

function TeamSection() {
  return (
    <section className="ab-team" aria-label="Notre \u00e9quipe">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-people-fill" />
            L&apos;&eacute;quipe
          </div>
          <h2 className="ab-section-title">
            Notre &eacute;quipe fondatrice
          </h2>
          <p className="ab-section-subtitle">
            Des passionn\u00e9s d\u00e9di\u00e9s &agrave; votre succ&egrave;s sportif.
          </p>
        </div>

        <div className="row g-4">
          {teamData.map((m) => (
            <div key={m.name} className="col-12 col-sm-6 col-lg-3">
              <TeamMemberCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

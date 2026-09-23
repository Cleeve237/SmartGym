const storiesData = [
  {
    id: 1,
    name: 'Franck Fotso',
    city: 'Douala',
    goal: 'Prise de masse',
    duration: '12 semaines',
    beforeWeight: '68 kg',
    afterWeight: '78 kg',
    result: 'Franck a gagn\u00e9 10 kg de masse musculaire et a doubl\u00e9 sa force en d\u00e9velopp\u00e9 couch\u00e9.',
  },
  {
    id: 2,
    name: 'Clarisse Noubissi',
    city: 'Yaound\u00e9',
    goal: 'Perte de poids',
    duration: '8 semaines',
    beforeWeight: '82 kg',
    afterWeight: '70 kg',
    result: 'Clarisse a perdu 12 kg et a retrouv\u00e9 une condition physique remarquable.',
  },
  {
    id: 3,
    name: 'Amina Bello',
    city: 'Bamenda',
    goal: 'Bien-\u00eatre',
    duration: '16 semaines',
    beforeWeight: 'Stress',
    afterWeight: 'S\u00e9r\u00e9nit\u00e9',
    result: 'Amina a appris &agrave; g\u00e9rer son stress et a am\u00e9lior\u00e9 sa flexibilit\u00e9 gr\u00e2ce au yoga.',
  },
];

function SuccessStories() {
  return (
    <section className="pl-success-stories" aria-label="Histoires de r\u00e9ussite">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-trophy-fill" />
            R\u00e9ussites
          </div>
          <h2 className="pl-section-title">
            Histoires de r\u00e9ussite
          </h2>
          <p className="pl-section-subtitle">
            D&eacute;couvrez les transformations r\u00e9elles de nos utilisateurs.
          </p>
        </div>

        <div className="row g-4">
          {storiesData.map((story) => (
            <div key={story.id} className="col-12 col-md-4">
              <div className="pl-story-card">
                <div className="pl-story-before-after">
                  <div className="pl-story-before">
                    <span className="pl-story-before-label">Avant</span>
                    <div className="pl-story-avatar pl-story-avatar--before">
                      <i className="bi bi-person" />
                    </div>
                    <span className="pl-story-stat-label">{story.goal}</span>
                    <span className="pl-story-stat-value">{story.beforeWeight}</span>
                  </div>
                  <div className="pl-story-after">
                    <span className="pl-story-after-label">Apr&egrave;s</span>
                    <div className="pl-story-avatar pl-story-avatar--after">
                      <i className="bi bi-trophy" />
                    </div>
                    <span className="pl-story-stat-label">{story.duration}</span>
                    <span className="pl-story-stat-value">{story.afterWeight}</span>
                  </div>
                </div>
                <div className="pl-story-body">
                  <span className="pl-story-goal">
                    <i className="bi bi-bullseye" />
                    {story.goal}
                  </span>
                  <h3 className="pl-story-name">{story.name}</h3>
                  <p className="pl-story-duration">{story.city} &middot; {story.duration}</p>
                  <p className="pl-story-result">{story.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;

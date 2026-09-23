import TimelineItem from './TimelineItem';

const ACTIVITIES = [
  {
    id: 1,
    type: 'booking',
    text: <>Seance reservee avec <strong>Coach Ahmadou</strong></>,
    time: 'Il y a 2h',
  },
  {
    id: 2,
    type: 'payment',
    text: <>Paiement de <strong>5 000 FCFA</strong> confirme</>,
    time: 'Il y a 3h',
  },
  {
    id: 3,
    type: 'favorite',
    text: <>Coach <strong>Sarah</strong> ajoutee en favoris</>,
    time: 'Hier',
  },
  {
    id: 4,
    type: 'review',
    text: <>Avis laisse pour <strong>Coach Celeste</strong></>,
    time: 'Hier',
  },
  {
    id: 5,
    type: 'session',
    text: <>Seance terminee avec <strong>Coach Michel</strong></>,
    time: 'Il y a 2j',
  },
];

function ActivityTimeline() {
  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-clock-history" />
          Activites recentes
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-timeline">
          {ACTIVITIES.map((a) => (
            <TimelineItem key={a.id} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityTimeline;

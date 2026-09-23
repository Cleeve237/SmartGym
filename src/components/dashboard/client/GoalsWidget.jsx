function GoalsWidget() {
  const goals = [
    { label: '4 seances / semaine', current: 3, target: 4, color: 'var(--color-primary)' },
    { label: '12 seances / mois', current: 8, target: 12, color: 'var(--color-info)' },
    { label: 'Perte de 3 kg', current: 2, target: 3, color: 'var(--color-success)' },
  ];

  return (
    <div className="dash-widget dash-animate">
      <div className="dash-widget-header">
        <h2 className="dash-widget-title">
          <i className="bi bi-bullseye" />
          Objectifs
        </h2>
      </div>
      <div className="dash-widget-body">
        <div className="dash-goals">
          {goals.map((goal) => {
            const pct = Math.round((goal.current / goal.target) * 100);
            return (
              <div key={goal.label} className="dash-goal">
                <div className="dash-goal-info">
                  <div className="dash-goal-icon" style={{ background: `${goal.color}15`, color: goal.color }}>
                    <i className="bi bi-trophy" />
                  </div>
                  {goal.label}
                </div>
                <div className="dash-goal-bar">
                  <div className="dash-goal-fill" style={{ width: `${Math.min(pct, 100)}%`, background: goal.color }} />
                </div>
                <span className="dash-goal-pct" style={{ color: goal.color }}>
                  {goal.current}/{goal.target}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GoalsWidget;

function MotivationWidget() {
  return (
    <div className="dash-widget">
      <div className="dash-widget-body">
        <div className="dash-motivation">
          <div className="dash-motivation-icon">
            <i className="bi bi-stars" />
          </div>
          <p className="dash-motivation-quote">
            &ldquo;Le succes est la somme de petits efforts repetes jour apres jour.&rdquo;
          </p>
          <p className="dash-motivation-author">— Robert Collier</p>
          <div className="dash-motivation-goal">
            <i className="bi bi-target" />
            Objectif de la semaine : 4 seances
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotivationWidget;

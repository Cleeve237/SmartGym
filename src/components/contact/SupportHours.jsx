const hoursData = [
  { day: 'Lundi - Vendredi', time: '08h00 - 18h00', open: true },
  { day: 'Samedi', time: '09h00 - 14h00', open: true },
  { day: 'Dimanche', time: 'Ferm\u00e9', open: false },
  { day: 'Jours f\u00e9ri\u00e9s', time: 'Ferm\u00e9', open: false },
];

function SupportHours() {
  return (
    <section className="ct-hours" aria-label="Horaires de support">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="ct-hours-card">
              <h3 className="ct-hours-title">
                <i className="bi bi-clock-history me-2" style={{ color: 'var(--color-primary)' }} />
                Horaires de support
              </h3>
              {hoursData.map((h) => (
                <div key={h.day} className="ct-hours-row">
                  <span className="ct-hours-day">{h.day}</span>
                  <span className={`ct-hours-time${h.open ? '' : ' ct-hours-time--closed'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportHours;

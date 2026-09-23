function RegisterBenefits() {
  const benefits = [
    { icon: 'bi-search', text: 'Recherchez un coach pres de chez vous' },
    { icon: 'bi-calendar-check', text: 'Reservez vos seances en ligne' },
    { icon: 'bi-credit-card', text: 'Payez en toute securite' },
    { icon: 'bi-graph-up-arrow', text: 'Suivez vos progres' },
  ];

  return (
    <div className="register-benefits">
      <span className="register-benefits-title">En vous inscrivant</span>
      {benefits.map((benefit) => (
        <div key={benefit.text} className="register-benefit">
          <div className="register-benefit-icon">
            <i className={`bi ${benefit.icon}`} />
          </div>
          <span className="register-benefit-text">{benefit.text}</span>
        </div>
      ))}
    </div>
  );
}

export default RegisterBenefits;

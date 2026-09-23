function LoginBenefits() {
  const benefits = [
    { icon: 'bi-lightning-charge', text: 'Reservation rapide' },
    { icon: 'bi-shield-lock', text: 'Paiement securise' },
    { icon: 'bi-patch-check', text: 'Coachs verifies' },
    { icon: 'bi-headset', text: 'Support disponible' },
  ];

  return (
    <div className="login-benefits">
      <span className="login-benefits-title">Pourquoi SmartGym</span>
      {benefits.map((benefit) => (
        <div key={benefit.text} className="login-benefit">
          <div className="login-benefit-icon">
            <i className={`bi ${benefit.icon}`} />
          </div>
          <span className="login-benefit-text">{benefit.text}</span>
        </div>
      ))}
    </div>
  );
}

export default LoginBenefits;

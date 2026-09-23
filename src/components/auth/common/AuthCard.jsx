function AuthCard({ children, centered, className = '' }) {
  return (
    <div className={`auth-card${centered ? ' auth-card--centered' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default AuthCard;

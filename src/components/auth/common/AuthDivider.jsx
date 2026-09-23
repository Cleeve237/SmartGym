function AuthDivider({ text = 'ou continuer avec' }) {
  return (
    <div className="auth-divider">
      <div className="auth-divider-line" />
      <span className="auth-divider-text">{text}</span>
      <div className="auth-divider-line" />
    </div>
  );
}

export default AuthDivider;

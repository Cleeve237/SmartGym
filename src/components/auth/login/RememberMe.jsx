function RememberMe({ checked, onChange }) {
  return (
    <label className="login-remember">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="login-remember-label">Se souvenir de moi</span>
    </label>
  );
}

export default RememberMe;

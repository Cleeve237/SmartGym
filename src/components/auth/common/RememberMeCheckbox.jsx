function RememberMeCheckbox({ checked, onChange }) {
  return (
    <label className="auth-remember">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="auth-remember-label">Se souvenir de moi</span>
    </label>
  );
}

export default RememberMeCheckbox;
